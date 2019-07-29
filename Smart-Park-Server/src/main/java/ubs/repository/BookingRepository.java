package ubs.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ubs.model.Bookings;

import java.time.LocalTime;
import java.util.List;

public interface BookingRepository extends CrudRepository<Bookings, Integer> {

    @Query(value = "select max(version) from Bookings where user_id = :userId and booking_date = CURDATE()", nativeQuery = true)
    Integer getLatestVersion(@Param("userId") Integer userId);

    @Query(value = "select count(*) from Bookings b where b.shift_Time = :time and b.status in ('BOOKED', 'PARKED') and booking_date = CURDATE()", nativeQuery = true)
    int countBookedSlotsBasedOnTime(@Param("time") LocalTime time);

    @Query(value = "select * from Bookings where user_id = :userId and booking_date = CURDATE() and status in ('BOOKED', 'PARKED') order by version desc limit 1", nativeQuery = true)
    Bookings fetchTodaysBooking(@Param("userId") Integer userId);

    @Query(value = "select * from Bookings b where b.user_id = :userId and status in ('BOOKED', 'PARKED') and booking_date = CURDATE() order by version desc limit 1", nativeQuery = true)
    Bookings findBookingBasedOnUser(@Param("userId") Integer userId);

    @Query(value = "select * from Bookings b where b.status in ('BOOKED', 'PARKED') and booking_date = CURDATE()", nativeQuery = true)
    List<Bookings> getAllBookingDetails();
}
