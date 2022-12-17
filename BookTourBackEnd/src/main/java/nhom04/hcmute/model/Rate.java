package nhom04.hcmute.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:40
 * Filename : Rate
 */
@Data
@Document(collection = "rate")
public class Rate {
    @Id
    private String id;
    private User user;
    private Integer rateStar;
    private String comment;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
