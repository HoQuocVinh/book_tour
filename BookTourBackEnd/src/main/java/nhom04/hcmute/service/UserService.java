package nhom04.hcmute.service;

import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.PageResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:08
 * Filename : UserService
 */
public interface UserService {
    User saveUser(User user);
    PageResponse getUserPaging(int pageNo, int pageSize, String sortBy, String sortDir);

    User updateUser(String email, User user);

    Role saveRole(Role role);

    void addRoleToUser(String email, Role role);
    void deleteRoleFromUser(String email, Role role);

    User getUserByEmail(String email);
    List<User> getAllUsers();
    Boolean existedByEmail(String email);
    void deleteUser(String id);
    Boolean changePassword(String password, String email);
    Boolean forgotPassword(String email);
    List<Role> getAllRoles();
    Role findByRoleName(String roleName);
    User updateAvatar(String email, String avatar);
    PageResponse searchUser(String search, Pageable paging);
}
