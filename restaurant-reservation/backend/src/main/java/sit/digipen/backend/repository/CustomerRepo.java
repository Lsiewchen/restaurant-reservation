package sit.digipen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sit.digipen.backend.entities.Customer;

public interface CustomerRepo extends JpaRepository<Customer, Integer> {
}
