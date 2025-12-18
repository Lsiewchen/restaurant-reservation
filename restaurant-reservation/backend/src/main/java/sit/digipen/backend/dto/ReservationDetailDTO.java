package sit.digipen.backend.dto;

import java.time.LocalDate;

public record ReservationDetailDTO(int rtId, int pax, LocalDate date, int time) {}
