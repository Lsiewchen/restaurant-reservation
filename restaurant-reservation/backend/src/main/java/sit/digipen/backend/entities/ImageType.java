package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class ImageType {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int itId;
    @NotNull
    private String type;
    @OneToMany(mappedBy="imageType") @JsonIgnore
    private List<RestaurantImage> restaurantImage;
}
