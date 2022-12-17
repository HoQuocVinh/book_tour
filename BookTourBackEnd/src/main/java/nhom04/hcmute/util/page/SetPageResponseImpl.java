package nhom04.hcmute.util.page;

import nhom04.hcmute.payload.PageResponse;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Wed, 11/9/2022
 * Time     : 21:02
 * Filename : SetPageResponseImpl
 */
@Service
public class SetPageResponseImpl<T> implements SetPageResponse<T>{
    @Override
    public PageResponse pageResponse(Page<T> list) {
        PageResponse pageResponse = new PageResponse();
        pageResponse.setData(list.getContent());
        pageResponse.setPageNo(list.getNumber());
        pageResponse.setPageSize(list.getSize());
        pageResponse.setTotalElements(list.getTotalElements());
        pageResponse.setTotalPages(list.getTotalPages());
        pageResponse.setLast(list.isLast());
        return pageResponse;
    }
}
