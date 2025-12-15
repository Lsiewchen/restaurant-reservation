package sit.digipen.backend.service;

import sit.digipen.backend.dto.RestCuisDisplayDTO;
import sit.digipen.backend.dto.RestDisplayDTO;
import sit.digipen.backend.entities.Restaurant;

import java.util.List;

public interface RestaurantService {

    List<RestCuisDisplayDTO> findRestaurantWithCuisine();

    List<RestDisplayDTO> findRestaurantByKeyword(String keyword);

    Restaurant findRestaurantById(int rtId);
}
