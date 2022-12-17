package nhom04.hcmute.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 11/2/2022
 * Time     : 19:15
 * Filename : PageResponse
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResponse {
    private List<?> data;
    private int pageNo;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean last;
}
