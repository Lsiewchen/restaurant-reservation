package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Restaurant {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rtId;
    @NotNull
    private String name;
    @NotNull
    private String email;
    @NotNull
    private String phone;
    @NotNull
    private String intro;
    @Lob @NotNull
    private String description;
    @NotNull
    private int capacity;
    @NotNull
    private String streetAddress1;
    @Column(nullable = true)
    private String streetAddress2;
    @Column(nullable = true)
    private String unitNumber;
    @NotNull
    private String postalCode;
    @NotNull
    private LocalDate dateCreated;
    @OneToMany(mappedBy = "restaurant")
    private List<Operation> operation;
    @OneToMany(mappedBy = "restaurant")
    private List<RestaurantImage> restaurantImage;
    @OneToMany(mappedBy = "restaurant")
    private List<RestaurantMenu> restaurantMenu;
    @ManyToMany @JoinTable(name = "restaurant_cuisine",
            joinColumns = @JoinColumn(name = "rt_id"),
            inverseJoinColumns = @JoinColumn(name = "cs_id"))
    private List<Cuisine> cuisine;
    @OneToMany(mappedBy = "restaurant") @JsonIgnore
    private List<Reservation> reservation;
}
