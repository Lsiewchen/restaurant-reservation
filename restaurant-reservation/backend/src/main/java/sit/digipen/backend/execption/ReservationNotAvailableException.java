package sit.digipen.backend.execption;

public class ReservationNotAvailableException extends RuntimeException{
    public ReservationNotAvailableException(String message) {
        super(message);
    }
}
