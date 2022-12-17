package nhom04.hcmute.security.principal;

import nhom04.hcmute.model.User;
import nhom04.hcmute.repository.RoleRepository;
import nhom04.hcmute.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:27
 * Filename : CustomUserDetailService
 */
@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = userRepository.findByEmail(email)
//                .orElseThrow(() ->
//                        new UsernameNotFoundException("User not found with username or email : " + email)
//                );
        User user = userRepository.findByEmail(email)
                .orElse(null);


        return UserPrincipal.create(user);
    }
}
