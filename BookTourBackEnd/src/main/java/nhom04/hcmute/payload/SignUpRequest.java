package nhom04.hcmute.payload;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.Set;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:09
 * Filename : SignUpRequest
 */
@Data
public class SignUpRequest {
    private String fullName;
    private String email;
    private String password;
}
