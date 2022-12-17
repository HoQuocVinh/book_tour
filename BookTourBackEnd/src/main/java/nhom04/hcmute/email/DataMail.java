package nhom04.hcmute.email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 19:57
 * Filename : DataMail
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DataMail {
    private String to;
    private String subject;
    private String content;
    private Map<String, Object> props;
}