package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.repository.LocationRepository;
import nhom04.hcmute.repository.TourRepository;
import nhom04.hcmute.service.TourService;
import nhom04.hcmute.util.LocationType;
import nhom04.hcmute.util.TourType;
import nhom04.hcmute.util.page.SetPageResponse;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:25
 * Filename : TourServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class TourServiceImpl implements TourService {
    private final TourRepository tourRepository;
    private final LocationRepository locationRepository;
    private final SetPageResponse<Tour> setPageResponse;

    @Override
    public List<Tour> getAllTours() {
        log.info("Get All Tours");
        return tourRepository.findAll();
    }

    @Override
    public List<Tour> saveAll(List<Tour> tourList) {
        log.info("Save All Tours");
        for (Tour item : tourList) {
            item.getTourDetail().getBeginningLocation().setLocationType( LocationType.BEGINNING);
            item.getTourDetail().getDestinationLocation().setLocationType( LocationType.DESTINATION);
            Example<Location> locationBegin = Example.of(item.getTourDetail().getBeginningLocation());
            Location begin = locationRepository.findOne(locationBegin).orElse(null);
            Example<Location> locationDes = Example.of(item.getTourDetail().getDestinationLocation());
            Location destination = locationRepository.findOne(locationDes).orElse(null);

            item.getTourDetail().setBeginningLocation(begin);
            item.getTourDetail().setDestinationLocation(destination);
        }
        return tourRepository.saveAll(tourList);
    }


    @Override
    public Tour getTourById(String id) {
        log.info("Get Tour with id {}", id);
        return tourRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
    }

    @Override
    public Tour saveTour(Tour tour) {
        log.info("Saving Tour");
        tour.getTourDetail().getBeginningLocation().setLocationType( LocationType.BEGINNING);
        tour.getTourDetail().getDestinationLocation().setLocationType( LocationType.DESTINATION);
        Example<Location> locationBegin = Example.of(tour.getTourDetail().getBeginningLocation());
        Location begin = locationRepository.findOne(locationBegin).orElse(null);
        Example<Location> locationDes = Example.of(tour.getTourDetail().getDestinationLocation());
        Location destination = locationRepository.findOne(locationDes).orElse(null);
        tour.getTourDetail().setBeginningLocation(begin);
        tour.getTourDetail().setDestinationLocation(destination);
        return tourRepository.save(tour);
    }

    @Override
    public Tour updateTour(String id, Tour tour) {
        Tour updateTour = tourRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
        log.info("Updating Tour");
        updateTour.setTourDetail(tour.getTourDetail());
        updateTour.setType(tour.getType());
        Date date = new Date();
        updateTour.setModifiedAt(date);
        return tourRepository.save(updateTour);
    }

    @Override
    public void deleteTour(String id) {
        Tour deleteTour = tourRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Tour with id %s not found", id)));
        log.info("Deleting Tour");
        tourRepository.delete(deleteTour);
    }

    @Override
    public PageResponse searchTour(String desLocation,String begLocation, Pageable pageable) {
        Location destination = locationRepository
                .findLocationByLocationNameAndLocationType(desLocation,LocationType.DESTINATION);
        Location beginning = locationRepository
                .findLocationByLocationNameAndLocationType(begLocation,LocationType.BEGINNING);
        Page<Tour> tours = tourRepository.searchTourPaging(beginning,destination, pageable);
        log.info("Searching Tours");
        return setPageResponse.pageResponse(tours);
    }

    @Override
    public PageResponse getTourPaging(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<Tour> tours = tourRepository.findAll(PageRequest.of(pageNo, pageSize, sort));
        log.info("Get All tours with pagination");
        return setPageResponse.pageResponse(tours);
    }

    @Override
    public PageResponse getTourLocation(Tour tour, int pageNo, int pageSize, String sortBy, String sortDir) {
//        Location destination = locationRepository.findLocationByLocationNameAndLocationType(location,LocationType.DESTINATION);
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
//        Page<Tour> tours = tourRepository.findByLocation(destination,PageRequest.of(pageNo, pageSize, sort));
//        return setPageResponse.pageResponse(tours);
        Example<Tour> example = Example.of(tour);
        Page<Tour> tours = tourRepository.findAll(example,PageRequest.of(pageNo, pageSize, sort));
        return setPageResponse.pageResponse(tours);
    }
}
