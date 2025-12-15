package sit.digipen.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import sit.digipen.backend.dto.RestCuisDisplayDTO;
import sit.digipen.backend.dto.RestDisplayDTO;
import sit.digipen.backend.entities.Reservation;
import sit.digipen.backend.entities.Restaurant;
import sit.digipen.backend.service.RestaurantServiceImpl;

import java.util.List;

@RestController
public class RestaurantController {

    private RestaurantServiceImpl restaurantService;

    public RestaurantController(RestaurantServiceImpl restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurant")
    public ResponseEntity<List<RestCuisDisplayDTO>> getAllRestaurantWithCuisine() {
        return ResponseEntity.ok().body(restaurantService.findRestaurantWithCuisine());
    }

    @GetMapping("/restaurant/search")
    public ResponseEntity<List<RestDisplayDTO>> getRestaurantByKeyword(@RequestParam String keyword) {
        return ResponseEntity.ok().body(restaurantService.findRestaurantByKeyword(keyword));
    }

    @GetMapping("/restaurant/{rtId}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable(value = "rtId") int rtId) {
        return ResponseEntity.ok().body(restaurantService.findRestaurantById(rtId));
    }

//    @PostMapping("/restaurant/{rtId}/reservation")
//    public ResponseEntity<> addReservation(@RequestBody Reservation reservation) {
//
//    }
}
