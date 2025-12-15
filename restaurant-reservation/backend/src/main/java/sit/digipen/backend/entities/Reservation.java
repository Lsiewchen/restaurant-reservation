package sit.digipen.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Reservation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rsId;
    private int pax;
    private LocalDate date;
    @Min(0) @Max(23)
    private int time;
    @ManyToOne @JoinColumn(name = "rt_id")
    private Restaurant restaurant;
    @ManyToOne @JoinColumn(name = "c_id")
    private Customer customer;
    @ManyToOne @JoinColumn(name = "s_id")
    private Status status;
}
