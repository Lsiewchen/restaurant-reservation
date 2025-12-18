package sit.digipen.backend.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import sit.digipen.backend.dto.ReservationDetailDTO;
import sit.digipen.backend.dto.ReservationDisplayDTO;
import sit.digipen.backend.entities.Customer;
import sit.digipen.backend.entities.Reservation;
import sit.digipen.backend.entities.Restaurant;
import sit.digipen.backend.entities.Status;
import sit.digipen.backend.execption.CustomerNotFoundException;
import sit.digipen.backend.execption.ReservationExistException;
import sit.digipen.backend.execption.ReservationNotAvailableException;
import sit.digipen.backend.execption.ReservationNotFoundException;
import sit.digipen.backend.execption.RestaurantNotFoundException;
import sit.digipen.backend.execption.StatusNotFoundException;
import sit.digipen.backend.repository.CustomerRepo;
import sit.digipen.backend.repository.ReservationRepo;
import sit.digipen.backend.repository.RestaurantRepo;
import sit.digipen.backend.repository.StatusRepo;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ReservationServiceImpl implements ReservationService {

    private ReservationRepo reservationRepo;
    private RestaurantRepo restaurantRepo;
    private CustomerRepo customerRepo;
    private StatusRepo statusRepo;

    public ReservationServiceImpl(ReservationRepo reservationRepo, RestaurantRepo restaurantRepo,
                                  CustomerRepo customerRepo, StatusRepo statusRepo) {
        this.reservationRepo = reservationRepo;
        this.restaurantRepo = restaurantRepo;
        this.customerRepo = customerRepo;
        this.statusRepo = statusRepo;
    }

    @Override
    public List<ReservationDisplayDTO> findReservationByCustomerId(int cId) {
        return reservationRepo.findReservationByCustomerId(cId);
    }

    //Assumed customer is logged in, using cId = 1
    @Transactional
    @Override
    public void createReservation(ReservationDetailDTO reservationDetailDTO) {
        if (!isReservationAvailable(reservationDetailDTO.rtId(), reservationDetailDTO.pax(),
                reservationDetailDTO.date(), reservationDetailDTO.time())) {
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd MMM yyyy, ha");
            LocalDateTime dateAndTimeRaw = reservationDetailDTO.date().atTime(LocalTime.of(reservationDetailDTO.time(), 0));
            String dateAndTime = dateAndTimeRaw.format(formatter);
            throw new ReservationNotAvailableException(
                    "Sorry, the restaurant is fully booked on " + dateAndTime +
                            ".\nPlease choose another date or time.");
        }
        if (hasExistingReservation(reservationDetailDTO.rtId(), 1,
                reservationDetailDTO.date(), reservationDetailDTO.time())) {
            throw new ReservationExistException(
                    "You already have a reservation at this restaurant for the selected date and time.");
        }

        Reservation reservation = new Reservation();
        Restaurant restaurant = restaurantRepo.findById(reservationDetailDTO.rtId())
                .orElseThrow(() -> new RestaurantNotFoundException("Restaurant not found."));
        Customer customer = customerRepo.findById(1)
                .orElseThrow(() -> new CustomerNotFoundException("Customer not found."));
        Status status = statusRepo.findActiveStatus();
        if (status == null) {
            throw new StatusNotFoundException("Status not found.");
        }
        reservation.setPax(reservationDetailDTO.pax());
        reservation.setDate(reservationDetailDTO.date());
        reservation.setTime(reservationDetailDTO.time());
        reservation.setRestaurant(restaurant);
        reservation.setCustomer(customer);
        reservation.setStatus(status);
        reservationRepo.saveAndFlush(reservation);
    }

    private boolean isReservationAvailable(int rtId, int pax, LocalDate date, int time) {
        int availableCapacity = restaurantRepo.findCapacityOfRestaurant(rtId);
        if (availableCapacity != 0) {
            List<ReservationDetailDTO> reservation = reservationRepo.findReservationByRestaurantId(rtId);
            for (ReservationDetailDTO r: reservation) {
                if (r.date().equals(date) && r.time() == time) {
                    availableCapacity -= r.pax();
                }
            }
        }
        return (availableCapacity - pax) >= 0;
    }

    private boolean hasExistingReservation(int rtId, int cId, LocalDate date, int time) {
        List<Reservation> reservation = reservationRepo.findActiveReservationByCustomerId(cId);
        if (!reservation.isEmpty()) {
            for (Reservation rs: reservation) {
                if (rs.getDate().equals(date) && rs.getTime() == time) {
                    return true;
                }
            }
        }
        return false;
    }

    @Transactional
    @Override
    public void cancelReservationById(int rsId) {
        reservationRepo.findById(rsId)
                .orElseThrow(() -> new ReservationNotFoundException("Reservation not found."));
        reservationRepo.cancelReservationById(rsId);
    }

}
