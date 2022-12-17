package nhom04.hcmute.email;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import nhom04.hcmute.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;


/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Fri, 11/11/2022
 * Time     : 19:57
 * Filename : EmailService
 */
@Service
@Slf4j
public class EmailService implements EmailSender{
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private SpringTemplateEngine templateEngine;
    @Override
    public void send(User user, String template) {
        try{
            MimeMessage msg = mailSender.createMimeMessage();
            Context context = new Context();
            MimeMessageHelper helper = new MimeMessageHelper(msg, true);
            String mainMessage =templateEngine.process(template, context);

            helper.setTo(user.getEmail());

            helper.setSubject("Testing from Spring Boot");

            helper.setText(mainMessage, true);
            mailSender.send(msg);
        }catch (MessagingException exception){
            log.error("fail to send email", exception);
            throw new IllegalStateException("fail to send email");
        }
    }

    @Override
    public void sendHtml(DataMail dataMail, String template) {
        try{
            MimeMessage message = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true, "utf-8");

            Context context = new Context();
            context.setVariables(dataMail.getProps());
            String html = templateEngine.process(template, context);
            helper.setTo(dataMail.getTo());
            helper.setSubject(dataMail.getSubject());
            helper.setText(html, true);

            mailSender.send(message);
        }catch (MessagingException exception){
            log.error("fail to send email", exception);
            throw new IllegalStateException("fail to send email");
        }
    }
}
