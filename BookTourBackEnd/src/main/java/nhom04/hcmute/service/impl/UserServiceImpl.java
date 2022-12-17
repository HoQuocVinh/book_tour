package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.AppException;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.repository.RoleRepository;
import nhom04.hcmute.repository.UserRepository;
import nhom04.hcmute.service.UserService;
import nhom04.hcmute.util.Constants;
import nhom04.hcmute.util.RoleName;
import nhom04.hcmute.service.ClientService;
import nhom04.hcmute.util.page.SetPageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:09
 * Filename : UserServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final SetPageResponse<User> setPageResponse;
    private final ClientService clientService;


    @Override
    public User saveUser(User user) {
        log.info("Saving User");
        return userRepository.save(user);
    }

    @Override
    public PageResponse getUserPaging(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<User> users = userRepository.findAll(PageRequest.of(pageNo, pageSize, sort));
        log.info("List of user with paging at page {} with size {} sortBy {}",pageNo,pageSize,sortBy);
        return setPageResponse.pageResponse(users);
    }

    @Override
    public User updateUser(String email, User user) {
        User updateUser = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException(String.format("User with email %s not found", email)));
        log.info("Updating User");
        if (!user.getFullName().equals("")) updateUser.setFullName(user.getFullName());
        if (user.getAddress() != null) updateUser.setAddress(user.getAddress());
        if (user.getBirthDay()!= null) updateUser.setBirthDay(user.getBirthDay());
        if (user.getGender()!= null) updateUser.setGender(user.getGender());
        Date date = new Date();
        updateUser.setModifiedAt(date);
        return userRepository.save(updateUser);
    }

    @Override
    public Role saveRole(Role role) {
        Role roleExist = roleRepository.findByName(role.getRoleName());
        if (roleExist != null) {
            throw new AppException(String.format("Role with RoleName %s has existed", role.getRoleName()));
        }
        log.info("Saving Role");
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String email, Role role) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException(String.format("User with email %s not found!", email)));
        user.getRoles().add(role);
        userRepository.save(user);
        log.info("Add role {} into user {}", role.getRoleName(), user.getFullName());
    }

    @Override
    public void deleteRoleFromUser(String email, Role role) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException(String.format("User with email %s not found!", email)));
        user.getRoles().remove(role);
        userRepository.save(user);
        log.info("Delete role {} into user {}", role.getRoleName(), user.getFullName());
    }

    @Override
    public User getUserByEmail(String email) {
        log.info("Get user with email {}", email);
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException(String.format("User with email %s not found!", email)));
    }

    @Override
    public List<User> getAllUsers() {
        log.info("Get All Users");
        return userRepository.findAll();
    }

    @Override
    public Boolean existedByEmail(String email) {
        log.info("Check user existed with email {}", email);
        return userRepository.existsByEmail(email);
    }

    @Override
    public void deleteUser(String id) {
        User userDelete = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("User with id %s not found", id
                )));
        log.info("Deleting user with email {}", id);
        userRepository.delete(userDelete);
    }

    @Override
    public Boolean changePassword(String password, String email) {
        User userChange = userRepository.findByEmail(email).orElse(null);
        if (userChange == null) {
            log.error("User not found!");
            return false;
        } else {
            log.info("Change Password");
            userChange.setPassword(BCrypt.hashpw(password, BCrypt.gensalt(12)));
            userRepository.save(userChange);
        }
        return true;
    }

    @Override
    public Boolean forgotPassword(String email) {
        User user = userRepository.findByEmail(email).orElse(null);
        if(user!= null){
            user.setPassword(Constants.generateTempPwd(8));
            clientService.forgotPassword(user, user.getPassword());
            user.setPassword(BCrypt.hashpw(user.getPassword(),BCrypt.gensalt(12)));
            userRepository.save(user);
            return true;
        }
        return false;
    }

    @Override
    public List<Role> getAllRoles() {
        log.info("Get all roles!");
        return roleRepository.findAll();
    }

    @Override
    public Role findByRoleName(String roleName) {
        log.info("Finding Role!");
        return roleRepository.findByName(RoleName.valueOf(roleName));
    }


    @Override
    public User updateAvatar(String email, String avatar) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new NotFoundException(String.format("User with email %s not found", email)));
        log.info("Update Avatar!");
        user.setAvatar(avatar);
        return userRepository.save(user);
    }

    @Override
    public PageResponse searchUser(String search,Pageable paging) {
        Page<User> searchUser =  userRepository.query(search, paging);
        log.info("Searching Users!");
        return setPageResponse.pageResponse(searchUser);
    }


}
