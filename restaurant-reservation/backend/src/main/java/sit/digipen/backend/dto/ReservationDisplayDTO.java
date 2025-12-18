package sit.digipen.backend.dto;

import java.time.LocalDate;

public record ReservationDisplayDTO(int rsId, int rtId, String name, String imageUrl,
                                    int pax, LocalDate date, int time, String statusType) {}
