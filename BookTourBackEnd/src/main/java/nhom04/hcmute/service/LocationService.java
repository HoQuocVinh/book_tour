package nhom04.hcmute.service;

import nhom04.hcmute.model.Location;
import nhom04.hcmute.payload.PageResponse;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : LocationService
 */
public interface LocationService {
    List<Location> getAllLocations();
    PageResponse getLocationPaging(int pageNo, int pageSize,String sortBy,String sortDir);
    List<Location> saveAll(List<Location> locationList);
    Location getLocationById(String id);
    Location saveLocation(Location location);
    Location updateLocation(String id, Location location);
    void deleteLocation(String id);
    Location getLocationByNameAndType(String locationName,String typeName);
    List<Location> getLocationByType(String typeName);

    List<Location> searchLocation(Location location);
}
