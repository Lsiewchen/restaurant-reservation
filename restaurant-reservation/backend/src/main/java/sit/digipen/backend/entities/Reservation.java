package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
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
    @NotNull
    private int pax;
    @NotNull
    private LocalDate date;
    @Min(0) @Max(23) @NotNull
    private int time;
    @ManyToOne @JoinColumn(name = "rt_id") @JsonIgnore @NotNull
    private Restaurant restaurant;
    @ManyToOne @JoinColumn(name = "c_id") @JsonIgnore @NotNull
    private Customer customer;
    @ManyToOne @JoinColumn(name = "s_id") @JsonIgnore @NotNull
    private Status status;
}
