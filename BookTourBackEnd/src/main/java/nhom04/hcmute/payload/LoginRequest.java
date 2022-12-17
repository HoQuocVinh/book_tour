package nhom04.hcmute.payload;

import lombok.Data;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 09:40
 * Filename : LoginRequest
 */
@Data
public class LoginRequest {
    private String email;
    private String password;
}
