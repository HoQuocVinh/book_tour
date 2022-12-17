package nhom04.hcmute.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 13:49
 * Filename : ApiResponse
 */
@AllArgsConstructor
@Getter
@Setter
public class ApiResponse {
    private boolean success;
    private String message;
}
