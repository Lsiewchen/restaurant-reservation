package sit.digipen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import sit.digipen.backend.entities.Status;

public interface StatusRepo extends JpaRepository<Status, Integer> {

    @Query("SELECT s FROM Status s WHERE s.type = 'active'")
    Status findActiveStatus();

}
