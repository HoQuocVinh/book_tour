package nhom04.hcmute.controller;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.Booking;
import nhom04.hcmute.payload.BookingRequest;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.PageResponse;
import nhom04.hcmute.service.BookingService;
import nhom04.hcmute.util.Constants;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Tue, 9/20/2022
 * Time     : 18:16
 * Filename : BookingController
 */
@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    @GetMapping("/bookings")
    public ResponseEntity<PageResponse> getAllBookings(
            @RequestParam(value = "pageNo", defaultValue = Constants.DEFAULT_PAGE_NUMBER, required = false)
            int pageNo,
            @RequestParam(value = "pageSize", defaultValue = Constants.DEFAULT_PAGE_SIZE, required = false)
            int pageSize,
            @RequestParam(value = "sortBy", defaultValue = Constants.DEFAULT_SORT_BY, required = false)
            String sortBy,
            @RequestParam(value = "sortDir", defaultValue = Constants.DEFAULT_SORT_DIRECTION, required = false)
            String sortDir
    ) {
        return ResponseEntity.ok().body(bookingService.getBookingPaging(pageNo,pageSize,sortBy,sortDir));
    }

    @GetMapping("/booking/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") String id) {
        return ResponseEntity.ok().body(bookingService.getById(id));
    }

    @GetMapping("/bookings/user/{email}")
    public ResponseEntity<List<Booking>> getBookingByUser(@PathVariable("email") String email) {
        return ResponseEntity.ok().body(bookingService.getBookingByUser(email));
    }

    @PostMapping("/booking/create")
    public ResponseEntity<ApiResponse> createBooking(@RequestBody Booking booking) {
        Booking saveBooking = bookingService.createBooking(booking);
        return ResponseEntity.ok().body(new ApiResponse(true, "Create Booking success!"));
    }

    @PostMapping("/booking/active")
    public ResponseEntity<ApiResponse> activeBooking(@RequestParam("email") String email,
                                                     @RequestParam("id") String id){
    Boolean active = bookingService.activeBooking(email,id);
    if(active)
        return ResponseEntity.ok().body(new ApiResponse(true,"Active success!"));
    else return ResponseEntity.ok().body(new ApiResponse(false,"Active failed!"));
    }

    @PutMapping("/booking/{id}")
    public ResponseEntity<ApiResponse> updateBooking(@PathVariable("id") String id, Booking booking) {
        Booking updateBooking = bookingService.updateBooking(id, booking);
        return ResponseEntity.ok().body(new ApiResponse(true, "Update success!"));
    }

    @DeleteMapping("/booking/delete/{id}")
    public ResponseEntity<ApiResponse> deleteBooking(@PathVariable("id") String id) {
        bookingService.deleteBooking(id);
        return ResponseEntity.ok().body(new ApiResponse(true, "Delete Booking success!"));
    }
}
