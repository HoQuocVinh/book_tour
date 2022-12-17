package nhom04.hcmute.repository;

import nhom04.hcmute.model.Passenger;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:58
 * Filename : PassengerRepository
 */
@Repository
public interface PassengerRepository extends MongoRepository<Passenger,String> {
}
