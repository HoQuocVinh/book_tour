package nhom04.hcmute.service;

import nhom04.hcmute.model.User;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 20:05
 * Filename : ClientService
 */
public interface ClientService {
    void forgotPassword(User user, String password);
    void activeBooking(String email,String id);
}
