package nhom04.hcmute.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 9/28/2022
 * Time     : 12:55
 * Filename : AppException
 */
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class AppException extends RuntimeException{
    public AppException(String message){
        super(message);
    }
    public AppException(String message,Throwable cause){
        super(message,cause);
    }
}
