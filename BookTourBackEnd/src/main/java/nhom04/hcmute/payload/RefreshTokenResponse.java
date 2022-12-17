package nhom04.hcmute.payload;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 10/28/2022
 * Time     : 17:14
 * Filename : RefreshTokenResponse
 */
@Data
@AllArgsConstructor
public class RefreshTokenResponse {
    private String accessToken;
    private boolean success;
    private String message;
}
