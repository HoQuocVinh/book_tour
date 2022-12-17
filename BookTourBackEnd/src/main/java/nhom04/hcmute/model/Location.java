package nhom04.hcmute.model;

import lombok.Data;
import nhom04.hcmute.util.LocationType;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;
import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 19:06
 * Filename : Location
 */
@Data
@Document(collection = "location")
public class Location {
    @Id
    private String id;
    private String locationName;
    private LocationType locationType;
}
