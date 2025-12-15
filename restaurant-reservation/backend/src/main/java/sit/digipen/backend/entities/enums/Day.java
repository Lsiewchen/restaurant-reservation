package sit.digipen.backend.entities.enums;

public enum Day {
    SUN(0), MON(1), TUE(2), WED(3), THU(4), FRI(5), SAT(6);

    private final int dayCode;

    private Day(int dayCode) {
        this.dayCode = dayCode;
    }

    public int getDayCode() {
        return this.dayCode;
    }
}
