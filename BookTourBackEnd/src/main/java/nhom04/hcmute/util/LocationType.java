package nhom04.hcmute.util;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sun, 9/18/2022
 * Time     : 15:33
 * Filename : LocationType
 */
public enum LocationType {
    DESTINATION, BEGINNING;
    public static LocationType findByName(String name) {
        LocationType result = null;
        for (LocationType locationType : values()) {
            if (locationType.name().equalsIgnoreCase(name)) {
                result = locationType;
                break;
            }
        }
        return result;
    }
}
