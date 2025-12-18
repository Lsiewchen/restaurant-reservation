package sit.digipen.backend.service;

import org.springframework.stereotype.Service;
import sit.digipen.backend.dto.RestaurantByCuisineDisplayDTO;
import sit.digipen.backend.dto.RestaurantDisplayDTO;
import sit.digipen.backend.entities.Restaurant;
import sit.digipen.backend.execption.RestaurantNotFoundException;
import sit.digipen.backend.repository.RestaurantRepo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    private RestaurantRepo restaurantRepo;

    public RestaurantServiceImpl(RestaurantRepo restaurantRepo) {
        this.restaurantRepo = restaurantRepo;
    }

    @Override
    public Map<String, List<RestaurantDisplayDTO>> findRestaurantCuisine() {
        Map<String, List<RestaurantDisplayDTO>> restaurant = new HashMap<>();
        List<RestaurantByCuisineDisplayDTO> restCuis = restaurantRepo.findRestaurantCuisine();
        for (RestaurantByCuisineDisplayDTO r: restCuis) {
            RestaurantDisplayDTO tempRest = new RestaurantDisplayDTO(r.rtId(), r.name(), r.intro(), r.imageUrl());
            if (!restaurant.containsKey(r.cuisineType())) {
                restaurant.put(r.cuisineType(), new ArrayList<>(List.of(tempRest)));
            }
            else {
                restaurant.get(r.cuisineType()).add(tempRest);
            }
        }
        if (restaurant.isEmpty()) {
            throw new RestaurantNotFoundException("No restaurants found.");
        }
        return restaurant;
    }

    @Override
    public List<RestaurantDisplayDTO> findRestaurantNew() {
        List<RestaurantDisplayDTO> restaurant = restaurantRepo.findRestaurantNew();
        if (restaurant.isEmpty()) {
            throw new RestaurantNotFoundException("No restaurants found.");
        }
        return restaurant;
    }

    @Override
    public List<RestaurantDisplayDTO> findRestaurantByKeyword(String keyword) {
        List<RestaurantDisplayDTO> restaurant = restaurantRepo.findRestaurantByKeyword(keyword);
        if (restaurant.isEmpty()) {
            throw new RestaurantNotFoundException("No results found. Try a different keyword.");
        }
        return restaurant;
    }

    @Override
    public Restaurant findRestaurantById(int rtId) {
        Restaurant restaurant = restaurantRepo.findRestaurantById(rtId).orElseThrow(() ->
                new RestaurantNotFoundException("Restaurant not found."));
        return restaurant;
    }

}
