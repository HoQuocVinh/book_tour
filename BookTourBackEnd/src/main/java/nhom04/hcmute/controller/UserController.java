package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Role;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.ApiResponseDelete;
import nhom04.hcmute.payload.DeleteRequest;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.service.UserService;
import nhom04.hcmute.util.Constants;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:16
 * Filename : UserController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok().body(userService.getAllUsers());
    }

    @GetMapping("/users/paging")
    public ResponseEntity<PageResponse> getAllUserPaging(
            @RequestParam(value = "pageNo", defaultValue = Constants.DEFAULT_PAGE_NUMBER, required = false)
            int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constants.DEFAULT_PAGE_SIZE, required = false)
            int pageSize,
            @RequestParam(value = "sortBy", defaultValue = Constants.DEFAULT_SORT_BY, required = false)
            String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constants.DEFAULT_SORT_DIRECTION, required = false)
            String sortDir) {
        return ResponseEntity.ok().body(userService.getUserPaging(pageNo, pageSize, sortBy, sortDir));
    }

    @GetMapping("/user/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable("email") String email) {
        return ResponseEntity.ok().body(userService.getUserByEmail(email));
    }

    @PutMapping("/user/{email}")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable("email") String email, @RequestBody User user) {
        User updateUser = userService.updateUser(email, user);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update success!"));
    }

    @PutMapping("/user/avt/{email}")
    public ResponseEntity<ApiResponse> updateAvatar(@PathVariable("email") String email, @RequestBody String avatar) {
        User updateUser = userService.updateAvatar(email, avatar);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update success!"));
    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<ApiResponseDelete> deleteUser(@PathVariable("id") String id) {
        userService.deleteUser(id);
        return ResponseEntity.ok().body(new ApiResponseDelete(true,"Delete success!",200));
    }

    @PostMapping("/user/changePass/{email}")
    public ResponseEntity<ApiResponse> changePassword(@PathVariable("email") String email) {
        userService.changePassword("trong", email);
        return ResponseEntity.ok().body(new ApiResponse(true, "Change password success!"));
    }

    @PostMapping("/forgotPass/{email}")
    public ResponseEntity<ApiResponse> forgotPassword(@PathVariable("email") String email) {
        Boolean forgot = userService.forgotPassword(email);
        return forgot ? new ResponseEntity<>(
                new ApiResponse(true, "Reset Password success"), HttpStatus.OK)
                : new ResponseEntity<>(
                new ApiResponse(false, "Username Or Email does not existed !"), HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/users/search")
    public ResponseEntity<PageResponse> searchUser(@RequestParam("search") String search,
                                                   @RequestParam(defaultValue = "0") int page,
                                                   @RequestParam(defaultValue = "3") int size) {
        Pageable paging = PageRequest.of(page, size);
        return ResponseEntity.ok().body(userService.searchUser(search, paging));
    }
}