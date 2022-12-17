package nhom04.hcmute.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Sat, 9/24/2022
 * Time     : 16:01
 * Filename : WebMvcConfig
 */
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    private final long MAX_AGE_SECS = 3600;

//    @Value("${app.cors.allowedOrigins}")
//    private String[] allowedOrigins;
//    @Value("${app.cors.allowedOriginsAdmin}")
//    private String[] allowedOriginsAdmin;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4000","http://localhost:3000","http://localhost:3006")
                .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE")
                .maxAge(MAX_AGE_SECS);
    }
}
