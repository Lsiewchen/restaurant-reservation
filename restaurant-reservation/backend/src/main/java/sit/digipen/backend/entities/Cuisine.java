package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Cuisine {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int csId;
    private String type;
    @JsonIgnore
    @ManyToMany(mappedBy = "cuisine")
    private List<Restaurant> restaurant;
}
