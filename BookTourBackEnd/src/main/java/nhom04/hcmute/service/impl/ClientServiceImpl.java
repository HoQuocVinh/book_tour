package nhom04.hcmute.service.impl;

import lombok.RequiredArgsConstructor;
import nhom04.hcmute.email.DataMail;
import nhom04.hcmute.email.EmailSender;
import nhom04.hcmute.model.User;
import nhom04.hcmute.service.ClientService;
import nhom04.hcmute.util.ConstantMail;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 19:56
 * Filename : ForgotPass
 */
@Service
@RequiredArgsConstructor
public class ClientServiceImpl implements ClientService {
    private final EmailSender emailSender;
    @Override
    public void forgotPassword(User user, String password) {
        DataMail dataMail = new DataMail();

        dataMail.setTo(user.getEmail());
        dataMail.setSubject(ConstantMail.SEND_MAIL.CLIENT_FORGET_PASSWORD);

        Map<String, Object> props = new HashMap<>();
        props.put("fullName", user.getFullName());
        props.put("password", password);
        dataMail.setProps(props);

        emailSender.sendHtml(dataMail, ConstantMail.TEMPLATE_FILE_NAME.CLIENT_FORGET_PASSWORD);
    }

    @Override
    public void activeBooking(String email,String id) {
        DataMail dataMail = new DataMail();

        dataMail.setTo(email);
        dataMail.setSubject(ConstantMail.SEND_MAIL.CLIENT_ACTIVE_BOOKING);

        Map<String, Object> props = new HashMap<>();
        props.put("email",email);
        props.put("id",id);
        dataMail.setProps(props);

        emailSender.sendHtml(dataMail, ConstantMail.TEMPLATE_FILE_NAME.CLIENT_ACTIVE_BOOKING);
    }
}
