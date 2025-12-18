package sit.digipen.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.IdClass;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import sit.digipen.backend.entities.enums.Day;
import sit.digipen.backend.entities.id.OperationId;

@Getter
@Setter
@NoArgsConstructor
@Entity
@IdClass(OperationId.class)
public class Operation {
    @Id @Enumerated(EnumType.STRING)
    private Day day;
    @Id @ManyToOne @JoinColumn(name="rt_id") @JsonIgnore
    private Restaurant restaurant;
    @Min(0) @Max(23) @NotNull
    private int openingTime;
    @Min(0) @Max(23) @NotNull
    private int closingTime;

    public int getDay() {
        return day.getDayCode();
    }
}
