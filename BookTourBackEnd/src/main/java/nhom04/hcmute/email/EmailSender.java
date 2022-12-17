package nhom04.hcmute.email;

import nhom04.hcmute.model.User;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 19:57
 * Filename : EmailSender
 */
public interface EmailSender {
    void send(User user, String template);

    void sendHtml(DataMail dataMail, String template);
}
