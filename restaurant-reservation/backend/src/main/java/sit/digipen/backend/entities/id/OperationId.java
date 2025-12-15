package sit.digipen.backend.entities.id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import sit.digipen.backend.entities.enums.Day;

import java.io.Serializable;
import java.util.Objects;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OperationId implements Serializable {
    private Day day;
    private int restaurant;

    @Override
    public boolean equals(Object operation) {
        if (this == operation) {
            return true;
        }
        if (operation == null || getClass() != operation.getClass()) {
            return false;
        }
        OperationId inOperation = (OperationId) operation;
        return Objects.equals(day, inOperation.day) &&
                Objects.equals(restaurant, inOperation.restaurant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(day, restaurant);
    }
}
