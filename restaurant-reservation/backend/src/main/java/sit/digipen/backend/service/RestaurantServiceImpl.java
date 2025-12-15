package sit.digipen.backend.service;

import org.springframework.stereotype.Service;
import sit.digipen.backend.dto.RestCuisDisplayDTO;
import sit.digipen.backend.dto.RestDisplayDTO;
import sit.digipen.backend.entities.Restaurant;
import sit.digipen.backend.execption.RestaurantNotFoundException;
import sit.digipen.backend.repository.RestaurantRepo;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private RestaurantRepo restaurantRepo;

    public RestaurantServiceImpl(RestaurantRepo restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }

    @Override
    public List<RestCuisDisplayDTO> findRestaurantWithCuisine() {
        List<RestCuisDisplayDTO> restaurant = restaurantRepo.findRestaurantWithCuisine();
        if (restaurant.isEmpty()) {
            throw new RestaurantNotFoundException("No restaurants found.");
        }
        return restaurant;
    }

    @Override
    public List<RestDisplayDTO> findRestaurantByKeyword(String keyword) {
        List<RestDisplayDTO> restaurant = restaurantRepo.findRestaurantByKeyword(keyword);
        if (restaurant.isEmpty()) {
            throw new RestaurantNotFoundException("No restaurant matching keyword.");
        }
        return restaurant;
    }

    @Override
    public Restaurant findRestaurantById(int rtId) {
        Restaurant restaurant = restaurantRepo.findRestaurantById(rtId).orElseThrow(() ->
                new RestaurantNotFoundException("No restaurant found."));
        return restaurant;
    }
}
