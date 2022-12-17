package nhom04.hcmute.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import nhom04.hcmute.util.GenderType;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.time.Instant;
import java.util.Date;
import java.util.Set;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/3/2022
 * Time     : 11:29
 * Filename : User
 */
@Getter
@Setter
@ToString
@RequiredArgsConstructor
@Document("user")
public class User {
    @Id
    private String id;
    @NotBlank
    private String email;
    @JsonIgnore
    private String password;
    private String fullName;
    private String phoneNumber;
    private Address address;
    private GenderType gender;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date birthDay;
    private String avatar;
    private Set<Role> roles;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
