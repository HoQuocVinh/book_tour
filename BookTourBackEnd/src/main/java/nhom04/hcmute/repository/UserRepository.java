package nhom04.hcmute.repository;

import nhom04.hcmute.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/11/2022
 * Time     : 12:08
 * Filename : UserRepository
 */
@Repository
public interface UserRepository extends MongoRepository<User,String> {
    @Query(value = "{'email' : ?0}")
    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

    @Query(value = "{ $or: [ { 'fullName' : {$regex:?0,$options:'i'} }," +
            " { 'email' : {$regex:?0,$options:'i'} } ] }")
    Page<User> query(String query, Pageable page);
}
