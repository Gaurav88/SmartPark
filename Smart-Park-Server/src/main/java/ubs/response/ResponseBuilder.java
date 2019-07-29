package ubs.response;

import ubs.model.Bookings;

import java.util.ArrayList;
import java.util.List;

public class ResponseBuilder {

    public BookingDetails createBookingResponse(Bookings booking) {
        BookingDetails bookingDetails = new BookingDetails();
        if (booking != null) {
            bookingDetails.setBookingDate(booking.getBookingDate());
            bookingDetails.setBookingId(booking.getId());
            bookingDetails.setParkingDesc(booking.getParkingSlot().getDescription());
            bookingDetails.setParkingLevel(booking.getParkingSlot().getLevel());
            bookingDetails.setShiftTime(booking.getShiftTime());
            bookingDetails.setStatus(booking.getStatus());
            bookingDetails.setUserName(booking.getUser().getName());
            bookingDetails.setVehicalNo(booking.getUser().getVehicalNo());
        }
        return bookingDetails;
    }

    public List<BookingDetails> createBookingResponsefromList(Iterable<Bookings> bookings) {
        List<BookingDetails> bookingDetailsList = new ArrayList<>();
        for (Bookings booking : bookings) {
            bookingDetailsList.add(createBookingResponse(booking));
        }
        return bookingDetailsList;
    }
}
