package sit.digipen.backend.execption;

public class ReservationExistException extends RuntimeException {
    public ReservationExistException(String message) {
        super(message);
    }
}
