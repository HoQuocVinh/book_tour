package nhom04.hcmute.repository;

import nhom04.hcmute.model.Role;
import nhom04.hcmute.util.RoleName;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 10:56
 * Filename : RoleRepository
 */
@Repository
public interface RoleRepository extends MongoRepository<Role,String> {

    @Query(value = "{'roleName' : ?0}")
    Role findByName(RoleName roleName);
}
