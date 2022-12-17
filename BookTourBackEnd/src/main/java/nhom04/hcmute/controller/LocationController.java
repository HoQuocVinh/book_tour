package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Location;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.ApiResponseDelete;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.service.LocationService;
import nhom04.hcmute.util.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : LocationController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class LocationController {
    private final LocationService locationService;

    @GetMapping("/locations")
    public ResponseEntity<List<Location>> getAllLocation(){
        return ResponseEntity.ok().body(locationService.getAllLocations());
    }
    @GetMapping("/locations/paging")
    public ResponseEntity<PageResponse> getAllLocationPaging(
            @RequestParam(value = "pageNo", defaultValue = Constants.DEFAULT_PAGE_NUMBER, required = false)
            int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constants.DEFAULT_PAGE_SIZE, required = false)
            int pageSize,
            @RequestParam(value = "sortBy", defaultValue = Constants.DEFAULT_SORT_BY, required = false)
            String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constants.DEFAULT_SORT_DIRECTION, required = false)
            String sortDir
    ){
        return ResponseEntity.ok().body(locationService.getLocationPaging(pageNo,pageSize,sortBy,sortDir));
    }
    @PostMapping("/locations")
    public ResponseEntity<List<Location>> saveAll(@RequestBody List<Location> locationList){
        return ResponseEntity.ok().body(locationService.saveAll(locationList));
    }
    @GetMapping("/locations/search")
    public ResponseEntity<List<Location>> searchLocation(@RequestBody Location location){
        return ResponseEntity.ok().body(locationService.searchLocation(location));
    }
    @GetMapping("/locations/type")
    public ResponseEntity<PageResponse> getLocationByName(
            @RequestParam(value = "typeName",defaultValue = "")String typeName){
        PageResponse pageResponse = new PageResponse();
        pageResponse.setData(locationService.getLocationByType(typeName));
        return ResponseEntity.ok().body(pageResponse);
    }

    @GetMapping("/location/{id}")
    public ResponseEntity<Location> getLocationById(@PathVariable("id")String id){
        return ResponseEntity.ok().body(locationService.getLocationById(id));
    }

    @PostMapping("/location/save")
    public ResponseEntity<ApiResponse> saveLocation(@RequestBody Location location){
        Location saveLocation = locationService.saveLocation(location);
        return ResponseEntity.ok().body(new ApiResponse(true,"Save success!"));
    }
    @PutMapping("/location/{id}")
    public ResponseEntity<ApiResponse> updateLocation(@PathVariable("id")String id,@RequestBody Location location){
        Location updateLocation = locationService.updateLocation(id,location);
        return ResponseEntity.ok().body(new ApiResponse(true,"Update Success!"));
    }


    @DeleteMapping("/location/delete/{id}")
    public ResponseEntity<ApiResponseDelete> deleteLocation(@PathVariable("id")String id){
        locationService.deleteLocation(id);
        return ResponseEntity.ok().body(new ApiResponseDelete(true,"Delete success!",200));
    }
}
