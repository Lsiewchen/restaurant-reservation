package sit.digipen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sit.digipen.backend.dto.RestCuisDisplayDTO;
import sit.digipen.backend.dto.RestDisplayDTO;
import sit.digipen.backend.entities.Restaurant;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

    @Query("SELECT new sit.digipen.backend.dto.RestCuisDisplayDTO(r.rtId, r.name, r.intro, c.type) FROM Restaurant r JOIN r.cuisine c")
    List<RestCuisDisplayDTO> findRestaurantWithCuisine();

    @Query("SELECT DISTINCT new sit.digipen.backend.dto.RestDisplayDTO(r.rtId, r.name, r.intro) FROM Restaurant r JOIN r.cuisine c " +
            "WHERE (LOWER(r.name) LIKE CONCAT('%', LOWER(:keyword), '%')) OR (LOWER(c.type) LIKE CONCAT('%', LOWER(:keyword), '%'))")
    List<RestDisplayDTO> findRestaurantByKeyword(@Param("keyword") String keyword);

    @Query("SELECT r FROM Restaurant r WHERE r.rtId = :rtId")
    Optional<Restaurant> findRestaurantById(@Param("rtId") Integer rtId);
}
