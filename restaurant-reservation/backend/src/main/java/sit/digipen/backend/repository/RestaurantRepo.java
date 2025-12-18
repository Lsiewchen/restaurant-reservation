package sit.digipen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sit.digipen.backend.dto.RestaurantByCuisineDisplayDTO;
import sit.digipen.backend.dto.RestaurantDisplayDTO;
import sit.digipen.backend.entities.Restaurant;

import java.util.List;
import java.util.Optional;

public interface RestaurantRepo extends JpaRepository<Restaurant, Integer> {

    @Query("SELECT new sit.digipen.backend.dto.RestaurantByCuisineDisplayDTO(rt.rtId, rt.name, rt.intro, ri.imageUrl, c.type) " +
            "FROM Restaurant rt JOIN rt.cuisine c JOIN rt.restaurantImage ri JOIN ri.imageType it " +
            "WHERE it.type = 'cover'")
    List<RestaurantByCuisineDisplayDTO> findRestaurantCuisine();

    @Query("SELECT new sit.digipen.backend.dto.RestaurantDisplayDTO(rt.rtId, rt.name, rt.intro, ri.imageUrl) " +
            "FROM Restaurant rt JOIN rt.restaurantImage ri JOIN ri.imageType it " +
            "WHERE it.type = 'cover' ORDER BY rt.dateCreated DESC LIMIT 5")
    List<RestaurantDisplayDTO> findRestaurantNew();

    @Query("SELECT DISTINCT new sit.digipen.backend.dto.RestaurantDisplayDTO(r.rtId, r.name, r.intro, ri.imageUrl) " +
            "FROM Restaurant r JOIN r.cuisine c JOIN r.restaurantImage ri JOIN ri.imageType t " +
            "WHERE t.type = 'cover' AND ((LOWER(r.name) LIKE CONCAT('%', LOWER(:keyword), '%')) OR (LOWER(c.type) LIKE CONCAT('%', LOWER(:keyword), '%')))")
    List<RestaurantDisplayDTO> findRestaurantByKeyword(@Param("keyword") String keyword);

    @Query("SELECT rt FROM Restaurant rt WHERE rt.rtId = :rtId")
    Optional<Restaurant> findRestaurantById(@Param("rtId") Integer rtId);

    @Query("SELECT rt.capacity FROM Restaurant rt WHERE rt.rtId = :rtId")
    Integer findCapacityOfRestaurant(@Param("rtId") Integer rtId);
}
