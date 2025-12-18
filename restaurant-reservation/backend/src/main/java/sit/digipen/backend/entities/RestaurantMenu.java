package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class RestaurantMenu {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mId;
    @NotNull
    private String imageUrl;
    @NotNull
    private String fileUrl;
    @Column(nullable = true)
    private String type;
    @ManyToOne @JoinColumn(name="rt_id") @JsonIgnore @NotNull
    private Restaurant restaurant;
}
