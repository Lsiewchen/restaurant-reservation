package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Status {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int sId;
    private String type;
    @JsonIgnore
    @OneToMany(mappedBy = "status")
    private List<Reservation> reservation;
}
