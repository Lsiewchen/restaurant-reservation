package sit.digipen.backend.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sit.digipen.backend.dto.ReservationDetailDTO;
import sit.digipen.backend.dto.ReservationDisplayDTO;
import sit.digipen.backend.service.ReservationService;

import java.util.List;

//Assumed customer is logged in, using cId = 1
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    private ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ReservationDisplayDTO>> getAllReservation() {
        return ResponseEntity.ok().body(reservationService.findReservationByCustomerId(1));
    }

    @PostMapping("/create")
    public ResponseEntity<String> createReservation(@RequestBody ReservationDetailDTO reservationDetailDTO) {
        reservationService.createReservation(reservationDetailDTO);
        return ResponseEntity.accepted().body("Your reservation has been confirmed.");
    }

    @PutMapping("/cancel/{rsId}")
    public ResponseEntity<String> cancelReservation(@PathVariable(value = "rsId") int rsId) {
        reservationService.cancelReservationById(rsId);
        return ResponseEntity.ok().body("Your reservation has been canceled.");
    }
}
