package nhom04.hcmute.payload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 11/27/2022
 * Time     : 22:41
 * Filename : ApiResponseDelete
 */
@AllArgsConstructor
@Getter
@Setter
public class ApiResponseDelete {
    private boolean success;
    private String message;
    private Integer status;
}
