package nhom04.hcmute.util;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 9/28/2022
 * Time     : 12:37
 * Filename : TourType
 */
public enum TourType {
    HOTEL,FLIGHT,TOUR_BASIC;

    public static TourType findByName(String name) {
        TourType result = null;
        for (TourType tourType : values()) {
            if (tourType.name().equalsIgnoreCase(name)) {
                result = tourType;
                break;
            }
        }
        return result;
    }
}
