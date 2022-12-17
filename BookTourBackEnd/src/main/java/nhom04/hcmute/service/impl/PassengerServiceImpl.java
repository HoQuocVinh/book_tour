package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Passenger;
import nhom04.hcmute.repository.PassengerRepository;
import nhom04.hcmute.service.PassengerService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:25
 * Filename : PassengerServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class PassengerServiceImpl implements PassengerService {
    private final PassengerRepository passengerRepository;

    @Override
    public List<Passenger> getAllPassengers() {
        log.info("Get all Passengers");
        return passengerRepository.findAll();
    }

    @Override
    public Passenger getPassengerById(String id) {
        log.info("Get Passenger with id {}", id);
        return passengerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Passenger with id %s not found", id)));
    }

    @Override
    public Passenger savePassenger(Passenger passenger) {
        log.info("Saving Passenger");
        return passengerRepository.save(passenger);
    }

    @Override
    public Passenger updatePassenger(String id, Passenger passenger) {
        Passenger updatePassenger = passengerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Passenger with id %s not found", id)));
        log.info("Updating Passenger");
        updatePassenger.setFullName(passenger.getFullName());
        updatePassenger.setBirthDay(passenger.getBirthDay());
        updatePassenger.setGender(passenger.getGender());
        Date date = new Date();
        return passengerRepository.save(updatePassenger);
    }

    @Override
    public void deletePassenger(String id) {
        Passenger deletePassenger = passengerRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Passenger with id %s not found", id)));
        log.info("Deleting Passenger");
        passengerRepository.delete(deletePassenger);
    }
}
