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
 * Time     : 16:36
 * Filename : Booking
 */
@Data
@Document(collection = "booking")
public class Booking {
    @Id
    private String id;
    private String fullName;
    private String email;
    private String phoneNumber;
    private  String address;
    private Integer passenger;
    private Float totalPrice;
    private User user;
    private boolean enable = false;
    private Tour tour;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
