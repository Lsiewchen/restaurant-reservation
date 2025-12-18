package sit.digipen.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sit.digipen.backend.dto.RestaurantDisplayDTO;
import sit.digipen.backend.entities.Restaurant;
import sit.digipen.backend.service.RestaurantService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    private RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/cuisine")
    public ResponseEntity<Map<String, List<RestaurantDisplayDTO>>> getAllRestaurantCuisine() {
        return ResponseEntity.ok().body(restaurantService.findRestaurantCuisine());
    }

    @GetMapping("/new")
    public ResponseEntity<List<RestaurantDisplayDTO>> getAllRestaurantNew() {
        return ResponseEntity.ok().body(restaurantService.findRestaurantNew());
    }

    @GetMapping("/search/{keyword}")
    public ResponseEntity<List<RestaurantDisplayDTO>> getRestaurantByKeyword(@PathVariable(value = "keyword") String keyword) {
        return ResponseEntity.ok().body(restaurantService.findRestaurantByKeyword(keyword));
    }

    @GetMapping("/{rtId}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable(value = "rtId") int rtId) {
        return ResponseEntity.ok().body(restaurantService.findRestaurantById(rtId));
    }
}
