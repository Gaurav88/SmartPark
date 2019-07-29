package ubs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ubs.model.*;
import ubs.repository.BookingRepository;
import ubs.repository.ParkingSlotRepository;
import ubs.repository.UserRepository;
import ubs.request.SlotBookRequest;
import ubs.request.VehicleRequest;
import ubs.response.BookingDetails;
import ubs.response.OpenSlots;
import ubs.response.ResponseBuilder;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RestController
@RequestMapping(path = "/smart-park")
public class SmartParkController {

    @Autowired
    private ParkingSlotRepository parkingSlotRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;
    private ResponseBuilder builder = new ResponseBuilder();

    @GetMapping(path = "/count-open-slots")
    public @ResponseBody
    List<OpenSlots> getCountOfTimeBasedOpenSlots() {
        return getCountBasedOnTime();
    }


    @PostMapping(path = "/book-slot")
    public ResponseEntity bookSlot(@RequestBody SlotBookRequest request) {
        Bookings todayBooking = bookingRepository.fetchTodaysBooking(request.getUserId());
        Map<String, Object> resultMap = new HashMap<>();
        if (todayBooking != null && ParkingStatus.BOOKED.equals(todayBooking.getStatus())) {
            resultMap.put("message", "You have already done today's booking");
            resultMap.put("bean", todayBooking);
            return ResponseEntity.ok(resultMap);
        } else if (todayBooking != null && ParkingStatus.PARKED.equals(todayBooking.getStatus())) {
            resultMap.put("message", "Your vehicle is parked, you can try again after you un park your car");
            resultMap.put("bean", todayBooking);
            return ResponseEntity.ok(resultMap);
        }

        ParkingSlot parkingSlot = parkingSlotRepository.getSlotBasedOnTime(LocalTime.parse(request.getTimeSlots(), DateTimeFormatter.ofPattern("HH:mm")));
        Bookings slotBooking = new Bookings();
        Optional<User> user = userRepository.findById(request.getUserId());

        slotBooking.setUser(user.get());
        slotBooking.setParkingSlot(parkingSlot);
        slotBooking.setBookingDate(LocalDate.now());
        slotBooking.setShiftTime(LocalTime.parse(request.getTimeSlots(), DateTimeFormatter.ofPattern("HH:mm")));
        slotBooking.setStatus(ParkingStatus.BOOKED);
        Integer version = bookingRepository.getLatestVersion(request.getUserId());
        slotBooking.setVersion(version == null ? 1 : version + 1);
        bookingRepository.save(slotBooking);
        resultMap.put("message", "Success");
        resultMap.put("bean", builder.createBookingResponse(slotBooking));
        return ResponseEntity.ok(resultMap);
    }

    @GetMapping(path = "/cancel-booking/{bookingId}")
    public @ResponseBody
    ResponseEntity<Map<String, String>> cancelBooking(@PathVariable Integer bookingId) {
        Map<String, String> resultMap = new HashMap<>();
        Optional<Bookings> booking = bookingRepository.findById(bookingId);
        if (booking.isPresent() && booking.get().getStatus() != ParkingStatus.CANCELLED) {
            Bookings cancelBooking = booking.get();
            cancelBooking.setStatus(ParkingStatus.CANCELLED);
            cancelBooking.setVersion(cancelBooking.getVersion() + 1);
            bookingRepository.save(cancelBooking);
        }
        resultMap.put("message", "Success");
        return ResponseEntity.ok(resultMap);
    }

    @PostMapping(path = "/register-vehicle", consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Map> registerVehicle(@RequestBody VehicleRequest request) {
        Optional<User> optionalUser = userRepository.findById(request.getUserId());
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setId(request.getUserId());
            user.setVehicalNo(request.getVehicleNo());
            user.setPhoneNo(request.getMobileNo());
            userRepository.save(user);
        }
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("responseMsg", "saved");
        return ResponseEntity.ok(responseMap);
    }

    @GetMapping(path = "/current-booking/{userId}")
    public @ResponseBody
    BookingDetails getCurrentBooking(@PathVariable Integer userId) {
        Bookings booking = bookingRepository.findBookingBasedOnUser(userId);
        return builder.createBookingResponse(booking);
    }

    private List<OpenSlots> getCountBasedOnTime() {
        LocalTime currentTime = LocalTime.now();
        List<OpenSlots> openSlotsList = new ArrayList<>();
        int lapsedCount = 0;
        for (TimeSlots slots : TimeSlots.values()) {
            LocalTime time = LocalTime.parse(slots.getDesc(),
                    DateTimeFormatter.ofPattern("HH:mm"));
            int totalCount = parkingSlotRepository.countBasedOnTime(time);
            int bookedCount = bookingRepository.countBookedSlotsBasedOnTime(time);
            int openCount = totalCount - bookedCount;
            if (openCount > 0 && time.isAfter(currentTime)) {
                OpenSlots openSlots = new OpenSlots();
                openSlots.setCountOfSlots(openCount + lapsedCount);
                openSlots.setTimeSlots(slots.getDesc());
                openSlotsList.add(openSlots);
                lapsedCount = 0;
            } else {
                lapsedCount += openCount;
            }
        }

        return openSlotsList;
    }
}
