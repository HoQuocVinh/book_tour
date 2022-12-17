package nhom04.hcmute.repository;

import nhom04.hcmute.model.Booking;
import nhom04.hcmute.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:56
 * Filename : BookingRepository
 */
@Repository
public interface BookingRepository extends MongoRepository<Booking,String> {

    @Query(value = "{'user.email':?0}")
    List<Booking> getBookingByUser(String email);
}
