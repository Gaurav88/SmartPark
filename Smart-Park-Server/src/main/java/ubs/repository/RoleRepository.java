package ubs.repository;

import ubs.model.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface RoleRepository extends CrudRepository<Role, Integer> {

    @Query("SELECT u FROM Role u WHERE u.id = :id")
    Role findUserByStatusAndNameNamedParams(
            @Param("id") Integer id);
}
