package nhom04.hcmute;

import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.repository.RoleRepository;
import nhom04.hcmute.service.UserService;
import nhom04.hcmute.util.GenderType;
import nhom04.hcmute.util.RoleName;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;
import java.util.Date;

@SpringBootApplication
@EnableMongoAuditing
public class BookTourBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookTourBackEndApplication.class, args);
    }

//    @Bean
//    CommandLineRunner runner(UserService userService, PasswordEncoder passwordEncoder, RoleRepository roleRepository) {
//        return args -> {
//            Date now = new Date();
//            Role roleTourist = new Role();
//            Role roleTourGuide = new Role();
//            Role roleAdmin = new Role();
//            roleTourist.setRoleName(RoleName.TOURIST);
//            roleTourist.setCreatedAt(now);
//            roleTourist.setModifiedAt(now);
//            roleTourGuide.setRoleName(RoleName.TOUR_GUIDE);
//            roleTourGuide.setCreatedAt(now);
//            roleTourGuide.setModifiedAt(now);
//            roleAdmin.setRoleName(RoleName.ADMIN);
//            roleAdmin.setCreatedAt(now);
//            roleAdmin.setModifiedAt(now);
//            userService.saveRole(roleTourist);
//            userService.saveRole(roleTourGuide);
//            userService.saveRole(roleAdmin);
//            User admin = new User();
//            admin.setFullName("Nguyen Thanh Trong");
//            admin.setEmail("admin@booktour.com");
//            admin.setPassword(passwordEncoder.encode("BookTour@@admin"));
//            admin.setAddress(null);
//            admin.setAvatar(null);
//            admin.setGender(GenderType.MALE);
//            Role adminRole = roleRepository.findByName(RoleName.ADMIN);
//            admin.setRoles(Collections.singleton(adminRole));
//            admin.setCreatedAt(now);
//            admin.setModifiedAt(now);
//            userService.saveUser(admin);
//        };
//    }
}

