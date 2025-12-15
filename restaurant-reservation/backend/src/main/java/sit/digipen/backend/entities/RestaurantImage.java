package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class RestaurantImage {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iId;
    private String imageUrl;
    @JsonIgnore
    @ManyToOne @JoinColumn(name="rt_id")
    private Restaurant restaurant;
    @ManyToOne @JoinColumn(name="it_id")
    private ImageType imageType;
}
