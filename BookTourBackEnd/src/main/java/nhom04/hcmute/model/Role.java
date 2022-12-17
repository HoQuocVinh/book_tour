package nhom04.hcmute.model;

import lombok.*;
import nhom04.hcmute.util.RoleName;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 9/9/2022
 * Time     : 11:54
 * Filename : Role
 */
@Data
@Document(collection = "role")
public class Role {
    @Id
    private String id;
    private RoleName roleName;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
