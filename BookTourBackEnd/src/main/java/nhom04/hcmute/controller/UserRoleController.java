package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : UserRoleController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserRoleController {
    private final UserService userService;

    @PostMapping("/role/save")
    public ResponseEntity<ApiResponse> saveRole(@RequestBody Role role){
        Role saveRole = userService.saveRole(role);
        return ResponseEntity.ok().body(new ApiResponse(true,"Add role success!"));
    }
    @PostMapping("/role/addtouser/{email}")
    public ResponseEntity<ApiResponse> addRoleToUser(@PathVariable("email") String email,@RequestBody Role role){
        Role roleAdd = userService.findByRoleName(role.getRoleName().toString());
        try {
            userService.addRoleToUser(email, roleAdd);
        }
        catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        return ResponseEntity.ok().body(new ApiResponse(true,"Add role to user success"));
    }
    @PostMapping("/role/delete/{email}")
    public ResponseEntity<ApiResponse> deleteRoleFromUser(@PathVariable("email") String email,@RequestBody Role role){
        Role roleAdd = userService.findByRoleName(role.getRoleName().toString());
        try {
            userService.deleteRoleFromUser(email, roleAdd);
        }
        catch (Exception ex){
            System.out.println(ex.getMessage());
        }
        return ResponseEntity.ok().body(new ApiResponse(true,"Delete role from user success"));
    }
}
