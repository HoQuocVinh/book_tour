package nhom04.hcmute.util;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 20:03
 * Filename : ConstantMail
 */
public class ConstantMail {
    public static class SEND_MAIL {
        public final static String CLIENT_REGISTER = "CONFIRMATION OF USER INFORMATION REGISTRATION";
        public final static String CLIENT_FORGET_PASSWORD = "CONFIRM NEW PASSWORD USER";
        public final static String CLIENT_ACTIVE_BOOKING = "ACTIVE YOUR BOOKING";
        public final static String CLIENT_CREATE_USER = "ACCOUNT IS INITIALIZED BY ADMINISTRATIVE";
    }

    public final static class TEMPLATE_FILE_NAME {
        public final static String CLIENT_REGISTER = "Registration";
        public final static String CLIENT_FORGET_PASSWORD = "PasswordForgot";
        public final static String CLIENT_ACTIVE_BOOKING = "ActiveBooking";
        public final static String CLIENT_CREATE_USER = "create_user";
    }
}
