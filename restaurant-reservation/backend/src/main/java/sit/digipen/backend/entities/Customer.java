package sit.digipen.backend.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.UniqueElements;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Customer {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cId;
    @NotNull
    private String name;
    @NotNull @Column(unique = true)
    private String phone;
    @NotNull @Column(unique = true)
    private String email;
    @NotNull
    private String password;
    @OneToMany(mappedBy = "customer")
    private List<Reservation> reservation;
}
