package nhom04.hcmute.service;

import nhom04.hcmute.model.Booking;
import nhom04.hcmute.payload.BookingRequest;
import nhom04.hcmute.payload.PageResponse;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:22
 * Filename : BookingService
 */
public interface BookingService {
    PageResponse getBookingPaging(int pageNo, int pageSize, String sortBy, String sortDir);

    List<Booking> getBookingByUser(String email);

    Booking getById(String id);

    Booking createBooking(Booking booking);

    Booking updateBooking(String id, Booking booking);

    void deleteBooking(String id);
    Boolean activeBooking (String email,String id);
}
