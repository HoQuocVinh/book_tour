package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.LoginRequest;
import nhom04.hcmute.payload.SignUpRequest;
import nhom04.hcmute.repository.RoleRepository;
import nhom04.hcmute.security.jwt.JwtProvider;
import nhom04.hcmute.service.UserService;
import nhom04.hcmute.util.GenderType;
import nhom04.hcmute.util.RoleName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 13:48
 * Filename : AuthController
 */
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    private final RoleRepository roleRepository;

    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/signup")
    public ResponseEntity<?> register(@Valid @RequestBody SignUpRequest signUpRequest){
        if(signUpRequest.getEmail().equals("")){
            return ResponseEntity.ok().body(new ApiResponse(false,"Email cannot be null"));
        }
        if(userService.existedByEmail(signUpRequest.getEmail())){
            return ResponseEntity.ok().body(new ApiResponse(false,"Email has been existed"));
        }
        User user = new User();
        user.setFullName(signUpRequest.getFullName());
        user.setEmail(signUpRequest.getEmail());
        user.setAvatar("");
        user.setGender(GenderType.ANOTHER);
        user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.TOURIST);
        user.setRoles(Collections.singleton(userRole));


        User result = userService.saveUser(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getEmail()).toUri();
        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest){
        User user = userService.getUserByEmail(loginRequest.getEmail());

        if(!passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())){
            return new ResponseEntity<>(new ApiResponse(false,"The password was wrong!"), HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),loginRequest.getPassword())
        );

        log.info("Creating Json Web Token!!");
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return ResponseEntity.ok(jwtProvider.createToken(authentication));
    }
}
