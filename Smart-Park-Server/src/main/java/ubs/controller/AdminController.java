package ubs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ubs.model.Bookings;
import ubs.model.ParkingStatus;
import ubs.repository.BookingRepository;
import ubs.response.BookingDetails;
import ubs.response.ResponseBuilder;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping(path = "/admin-park")
public class AdminController {
    @Autowired
    private BookingRepository bookingRepository;
    private ResponseBuilder builder = new ResponseBuilder();

    @GetMapping(path = "/get-all-booking")
    public @ResponseBody
    List<BookingDetails> getAllBookingDetails() {
        return builder.createBookingResponsefromList(bookingRepository.getAllBookingDetails());
    }

    @GetMapping(path = "/mark-parked/{bookingId}")
    public @ResponseBody
    ResponseEntity<Map<String, String>> markAsParked(@PathVariable Integer bookingId) {
        Optional<Bookings> bookings = bookingRepository.findById(bookingId);
        if (bookings.isPresent()) {
            Bookings booking = bookings.get();
            booking.setStatus(ParkingStatus.PARKED);
            bookingRepository.save(booking);
        }
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("message", "Success");
        return ResponseEntity.ok(responseMap);
    }

    @GetMapping(path = "/mark-logged-out/{bookingId}")
    public @ResponseBody
    ResponseEntity<Map<String, String>> markAsLoggedOut(@PathVariable Integer bookingId) {
        Optional<Bookings> bookings = bookingRepository.findById(bookingId);
        if (bookings.isPresent()) {
            Bookings booking = bookings.get();
            booking.setStatus(ParkingStatus.LOGGED_OUT);
            bookingRepository.save(booking);
        }
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("message", "Success");
        return ResponseEntity.ok(responseMap);
    }
}
