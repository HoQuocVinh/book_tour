package nhom04.hcmute.util;

import java.util.Random;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 11/9/2022
 * Time     : 20:07
 * Filename : Constants
 */
public class Constants {
    public static final String DEFAULT_PAGE_NUMBER = "0";
    public  static final String DEFAULT_PAGE_SIZE = "2";
    public static final String DEFAULT_SORT_BY = "firstName";
    public static final String DEFAULT_SORT_DIRECTION = "asc";

    public static String generateTempPwd(int length) {
        String numbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        char otp[] = new char[length];
        Random getOtpNum = new Random();
        for (int i = 0; i < length; i++) {
            otp[i] = numbers.charAt(getOtpNum.nextInt(numbers.length()));
        }
        String optCode = "";
        for (int i = 0; i < otp.length; i++) {
            optCode += otp[i];
        }
        return optCode;
    }
}
