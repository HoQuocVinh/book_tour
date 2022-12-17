package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Tour;
import nhom04.hcmute.model.TourDetail;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.ApiResponseDelete;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.service.TourService;
import nhom04.hcmute.util.Constants;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:17
 * Filename : TourController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class TourController {
    private final TourService tourService;

    @GetMapping("/tours")
    public ResponseEntity<List<Tour>> getAllTours() {
        return ResponseEntity.ok().body(tourService.getAllTours());
    }

    @GetMapping("/tours/paging")
    public ResponseEntity<PageResponse> getTourPaging(
            @RequestParam(value = "pageNo", defaultValue = Constants.DEFAULT_PAGE_NUMBER, required = false)
            int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constants.DEFAULT_PAGE_SIZE, required = false)
            int pageSize,
            @RequestParam(value = "sortBy", defaultValue = Constants.DEFAULT_SORT_BY, required = false)
            String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constants.DEFAULT_SORT_DIRECTION, required = false)
            String sortDir
    ) {
        return ResponseEntity.ok().body(tourService.getTourPaging(pageNo,pageSize,sortBy,sortDir));
    }

    @PostMapping("/tours/search")
    public ResponseEntity<PageResponse> searchTour(
            @RequestBody Tour tour,
            @RequestParam(value = "pageNo", defaultValue = Constants.DEFAULT_PAGE_NUMBER, required = false)
            int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constants.DEFAULT_PAGE_SIZE, required = false)
            int pageSize,
            @RequestParam(value = "sortBy", defaultValue = Constants.DEFAULT_SORT_BY, required = false)
            String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constants.DEFAULT_SORT_DIRECTION, required = false)
            String sortDir){
        return ResponseEntity.ok(tourService.getTourLocation(tour,pageNo,pageSize,sortBy,sortDir));
    }

    @PostMapping("/tours")
    public ResponseEntity<List<Tour>> saveAll(@RequestBody List<Tour> tourList) {
        return ResponseEntity.ok().body(tourService.saveAll(tourList));
    }

    @GetMapping("/tour/{id}")
    public ResponseEntity<Tour> getTourById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(tourService.getTourById(id));
    }

    @PostMapping("/tour/save")
    public ResponseEntity<Tour> saveTour(@RequestBody Tour tour) {
        Tour saveTour = tourService.saveTour(tour);
        return ResponseEntity.ok().body(saveTour);
    }

    @PutMapping("/tour/{id}")
    public ResponseEntity<ApiResponse> updateTour(@PathVariable("id") String id, @RequestBody Tour tour) {
        Tour updateTour = tourService.updateTour(id, tour);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update Success"));
    }

    @DeleteMapping("/tour/delete/{id}")
    public ResponseEntity<ApiResponseDelete> deleteTour(@PathVariable("id") String id) {
        tourService.deleteTour(id);
        return ResponseEntity.ok().body(new ApiResponseDelete(true,"Delete success!",200));
    }

}
