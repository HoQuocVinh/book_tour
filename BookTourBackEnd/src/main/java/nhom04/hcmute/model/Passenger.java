package nhom04.hcmute.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import nhom04.hcmute.util.GenderType;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 19:02
 * Filename : Passenger
 */
@Data
public class Passenger {
    private String fullName;
    private GenderType gender;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date birthDay;
}
