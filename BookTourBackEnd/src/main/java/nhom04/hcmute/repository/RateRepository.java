package nhom04.hcmute.repository;

import nhom04.hcmute.model.Rate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:58
 * Filename : RateRepository
 */
@Repository
public interface RateRepository extends MongoRepository<Rate,String> {
}
