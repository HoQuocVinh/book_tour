package nhom04.hcmute.service;

import nhom04.hcmute.model.Passenger;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:23
 * Filename : PassengerService
 */
public interface PassengerService {
    List<Passenger> getAllPassengers();
    Passenger getPassengerById(String id);
    Passenger savePassenger(Passenger passenger);
    Passenger updatePassenger(String id, Passenger passenger);
    void deletePassenger(String id);
}
