package nhom04.hcmute.service;

import nhom04.hcmute.model.Rate;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:23
 * Filename : RateService
 */
public interface RateService {
    List<Rate> getAllRates();
    Rate getRateById(String id);
    Rate saveRate(Rate rate);
    Rate updateRate(String id, Rate rate);
    void deleteRate(String id);
}
