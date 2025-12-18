package sit.digipen.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import sit.digipen.backend.dto.ReservationDetailDTO;
import sit.digipen.backend.dto.ReservationDisplayDTO;
import sit.digipen.backend.entities.Reservation;

import java.util.List;

public interface ReservationRepo extends JpaRepository<Reservation, Integer> {

    @Query("SELECT new sit.digipen.backend.dto.ReservationDisplayDTO(rs.rsId, rt.rtId, rt.name, ri.imageUrl, rs.pax, rs.date, rs.time, s.type) " +
            "FROM Reservation rs JOIN rs.status s JOIN rs.restaurant rt JOIN rt.restaurantImage ri JOIN ri.imageType it " +
            "WHERE rs.customer.cId = :cId AND it.type = 'cover'")
    List<ReservationDisplayDTO> findReservationByCustomerId(@Param("cId") Integer cId);

    @Query("SELECT new sit.digipen.backend.dto.ReservationDetailDTO(rt.rtId, r.pax, r.date, r.time ) " +
            "FROM Reservation r JOIN r.restaurant rt WHERE rt.rtId = :rtId")
    List<ReservationDetailDTO> findReservationByRestaurantId(@Param("rtId") Integer rtId);

    //status 1 - active
    @Query("SELECT rs FROM Reservation rs WHERE rs.customer.cId = :cId AND rs.status.sId = 1")
    List<Reservation> findActiveReservationByCustomerId(@Param("cId") Integer cId);

    //status 3 - canceled
    @Modifying
    @Query("UPDATE Reservation rs SET rs.status.sId = 3 WHERE rs.rsId = :rsId")
    void cancelReservationById(@Param("rsId") Integer rsId);
}
