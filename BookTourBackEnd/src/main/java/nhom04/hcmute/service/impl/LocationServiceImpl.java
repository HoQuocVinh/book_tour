package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.exception.NotFoundException;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.repository.LocationRepository;
import nhom04.hcmute.service.LocationService;
import nhom04.hcmute.util.LocationType;
import nhom04.hcmute.util.page.SetPageResponseImpl;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:24
 * Filename : LocationServiceImpl
 */
@Service
@RequiredArgsConstructor
@Slf4j
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;
    private final SetPageResponseImpl<Location> setPageResponse;

    @Override
    public List<Location> getAllLocations() {
        log.info("Get all locations");
        return locationRepository.findAll();
    }

    @Override
    public PageResponse getLocationPaging(int pageNo, int pageSize, String sortBy, String sortDir) {
        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();
        Page<Location> locations = locationRepository.findAll(PageRequest.of(pageNo, pageSize, sort));
        log.info("Get All locations with pagination");
        return setPageResponse.pageResponse(locations);
    }

    @Override
    public List<Location> saveAll(List<Location> locationList) {
        log.info("Saving all locations");
        return locationRepository.saveAll(locationList);
    }

    @Override
    public Location getLocationById(String id) {
        log.info("Find location with id {}", id);
        return locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
    }

    @Override
    public Location saveLocation(Location location) {
        log.info("Saving location!");
        return locationRepository.save(location);
    }

    @Override
    public Location updateLocation(String id, Location location) {
        Location updateLocation = locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
        log.info("Updating location");
        updateLocation.setLocationName(location.getLocationName());
        updateLocation.setLocationType(location.getLocationType());
        Date date = new Date();
        return locationRepository.save(updateLocation);
    }

    @Override
    public void deleteLocation(String id) {
        Location deleteLocation = locationRepository.findById(id)
                .orElseThrow(() ->new NotFoundException(String.format("Location with id %s not found", id)));
        log.info("Deleting location");
        locationRepository.delete(deleteLocation);
    }

    @Override
    public Location getLocationByNameAndType(String locationName, String typeName) {
        LocationType locationType = LocationType.findByName(typeName);
        log.info("Get Location By Name: {} and type: {}",locationName,typeName);
        return locationRepository.findLocationByLocationNameAndLocationType(locationName,locationType);
    }

    @Override
    public List<Location> getLocationByType(String typeName) {
        LocationType locationType = LocationType.findByName(typeName);
        Location location = new Location();
        location.setLocationType(locationType);
        Example<Location> example = Example.of(location);
        return locationRepository.findAll(example);
    }

    @Override
    public List<Location> searchLocation(Location location) {
        Example<Location> example = Example.of(location);
        return locationRepository.findAll(example);
    }
}
