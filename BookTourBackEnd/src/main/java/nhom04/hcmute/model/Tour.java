package nhom04.hcmute.model;

import lombok.Data;
import nhom04.hcmute.util.TourType;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 16:37
 * Filename : Tour
 */
@Data
@Document(collection = "tour")
public class Tour {
    @Id
    private String id;
    private Integer hotelRooms;
    private Integer flightClass;
    private TourDetail tourDetail;
    private TourType type;
    @CreatedDate
    private Date createdAt;
    @LastModifiedDate
    private Date modifiedAt;
}
