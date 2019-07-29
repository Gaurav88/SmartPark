package ubs.model;

public enum TimeSlots {
    SIX_THIRTY("06:30"),
    EIGHT_THIRTY("08:30"),
    TEN_THIRTY("10:30"),
    TWELVE_THIRTY("12:30"),
    THIRTEEN_THIRTY("13:30"),
    FIFTEEN_THIRTY("15:30"),
    SEVENTEEN_THIRTY("17:30"),
    NINETEEN_THIRTY("19:30"),
    TWENTYONE_THIRTY("21:30"),
    TWENTYTHREE_THIRTY("23:30");

    private String desc;

    TimeSlots(String desc) {
        this.desc = desc;
    }

    public String getDesc() {
        return desc;
    }
}
