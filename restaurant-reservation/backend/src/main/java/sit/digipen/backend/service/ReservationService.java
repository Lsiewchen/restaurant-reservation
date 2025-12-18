package sit.digipen.backend.service;

import sit.digipen.backend.dto.ReservationDetailDTO;
import sit.digipen.backend.dto.ReservationDisplayDTO;

import java.util.List;

public interface ReservationService {

    List<ReservationDisplayDTO> findReservationByCustomerId(int cId);

    void createReservation(ReservationDetailDTO reservationDetailDTO);

    void cancelReservationById(int rsId);

}
