package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Rate;
import nhom04.hcmute.repository.RateRepository;
import nhom04.hcmute.service.RateService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:25
 * Filename : RateServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class RateServiceImpl implements RateService {
    private final RateRepository rateRepository;
    @Override
    public List<Rate> getAllRates() {
        log.info("Get all Rates");
        return rateRepository.findAll();
    }

    @Override
    public Rate getRateById(String id) {
        log.info("Get Rate with id {}",id);
        return rateRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Rate with id %s not found",id)));
    }

    @Override
    public Rate saveRate(Rate rate) {
        log.info("Saving Rate");
        return rateRepository.save(rate);
    }

    @Override
    public Rate updateRate(String id, Rate rate) {
        Rate updateRate = rateRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Rate with id %s not found",id)));
        log.info("Updating Rate");
        updateRate.setRateStar(rate.getRateStar());
        updateRate.setComment(rate.getComment());
        Date date = new Date();
        updateRate.setModifiedAt(date);
        return rateRepository.save(updateRate);
    }

    @Override
    public void deleteRate(String id) {
        Rate deleteRate = rateRepository.findById(id)
                .orElseThrow(()->new NotFoundException(String.format("Rate with id %s not found",id)));
        log.info("Deleting Rate");
        rateRepository.delete(deleteRate);
    }
}
