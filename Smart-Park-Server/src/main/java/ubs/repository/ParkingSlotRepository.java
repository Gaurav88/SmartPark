package ubs.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ubs.model.ParkingSlot;

import java.time.LocalTime;

public interface ParkingSlotRepository extends CrudRepository<ParkingSlot, Integer> {
    @Query(value ="SELECT count(*) FROM parking_slot p WHERE p.open_Time < :time\n" +
            "and p.id not in (select parking_slot_id from bookings b where b.status !='cancelled')", nativeQuery = true)
    public int getAllTimeBasedOpenSlot(@Param("time") LocalTime time);

    @Query(value ="SELECT * FROM parking_slot p WHERE p.open_Time = :time\n" +
            "and p.id not in (select parking_slot_id from bookings b where (b.status IN ('BOOKED', 'PARKED') and booking_date = CURDATE())) LIMIT 1", nativeQuery = true)
    public ParkingSlot getSlotBasedOnTime(@Param("time") LocalTime time);


    @Query("SELECT count(*) FROM ParkingSlot p WHERE p.openTime = :time")
    int countBasedOnTime(@Param("time") LocalTime time);

}
