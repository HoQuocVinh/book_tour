package nhom04.hcmute.service;

import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.util.TourType;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:23
 * Filename : TourService
 */
public interface TourService {
    List<Tour> getAllTours();
    List<Tour> saveAll(List<Tour> tourList);
    Tour getTourById(String id);
    Tour saveTour(Tour tour);
    Tour updateTour(String id, Tour tour);
    void deleteTour(String id);

    PageResponse searchTour(String desLocation,String begLocation, Pageable pageable);
    PageResponse getTourPaging(int pageNo, int pageSize,String sortBy,String sortDir);
    PageResponse getTourLocation(Tour tour,int pageNo, int pageSize,String sortBy,String sortDir);
}
