package nhom04.hcmute.util.page;

import nhom04.hcmute.payload.PageResponse;
import org.springframework.data.domain.Page;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 11/9/2022
 * Time     : 21:01
 * Filename : SetPageRespones
 */
public interface SetPageResponse<T> {
    PageResponse pageResponse(Page<T> list);
}
