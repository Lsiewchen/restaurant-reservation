package sit.digipen.backend.service;

import sit.digipen.backend.dto.RestaurantDisplayDTO;
import sit.digipen.backend.entities.Restaurant;

import java.util.List;
import java.util.Map;

public interface RestaurantService {

    Map<String, List<RestaurantDisplayDTO>> findRestaurantCuisine();

    List<RestaurantDisplayDTO> findRestaurantNew();

    List<RestaurantDisplayDTO> findRestaurantByKeyword(String keyword);

    Restaurant findRestaurantById(int rtId);

}
