package ubs.response;

import ubs.model.ParkingStatus;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class BookingDetails {

    private String parkingDesc;
    private String parkingLevel;
    private int bookingId;
    private LocalDate bookingDate;
    private LocalTime shiftTime;
    private ParkingStatus status;
    private String userName;
    private String vehicalNo;
    private DateTimeFormatter timeFormatter = DateTimeFormatter.ofPattern("HH:mm");
    private DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("dd-MMM-yy");

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getVehicalNo() {
        return vehicalNo;
    }

    public void setVehicalNo(String vehicalNo) {
        this.vehicalNo = vehicalNo;
    }

    public ParkingStatus getStatus() {
        return status;
    }

    public void setStatus(ParkingStatus status) {
        this.status = status;
    }

    public String getParkingDesc() {
        return parkingDesc;
    }

    public void setParkingDesc(String parkingDesc) {
        this.parkingDesc = parkingDesc;
    }

    public String getParkingLevel() {
        return parkingLevel;
    }

    public void setParkingLevel(String parkingLevel) {
        this.parkingLevel = parkingLevel;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getBookingDate() {
        return bookingDate != null ? bookingDate.format(dateFormatter) : null;
    }

    public void setBookingDate(LocalDate bookingDate) {
        this.bookingDate = bookingDate;
    }

    public String getShiftTime() {
        return shiftTime != null ? shiftTime.format(timeFormatter) : null;
    }

    public void setShiftTime(LocalTime shiftTime) {
        this.shiftTime = shiftTime;
    }
}
