package nhom04.hcmute.config;

import nhom04.hcmute.security.jwt.JwtEntryPoint;
import nhom04.hcmute.security.jwt.JwtTokenFilter;
import nhom04.hcmute.security.principal.CustomUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:33
 * Filename : WebSecurityConfig
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    private CustomUserDetailService customUserDetailsService;

    @Autowired
    private JwtEntryPoint jwtEntryPoint;

    @Bean
    public JwtTokenFilter JwtTokenFilter() {
        return new JwtTokenFilter();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        // Password encoder, để Spring Security sử dụng mã hóa mật khẩu người dùng
        return new BCryptPasswordEncoder();
    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        // Get AuthenticationManager bean
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth)
            throws Exception {
        auth.userDetailsService(customUserDetailsService) // Cung cáp userservice cho spring security
                .passwordEncoder(passwordEncoder()); // cung cấp password encoder
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors() //Ngăn chặn truy cập từ các domain khác
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/api/v1/auth/**").permitAll()
                .antMatchers("/api/v1/forgotPass/**").permitAll()
                .antMatchers("/api/v1/users/**").hasAnyAuthority("ADMIN")
                .antMatchers("/api/v1/role/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.POST,"/api/v1/tours").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.POST,"/api/v1/tours/search").permitAll()
                .antMatchers(HttpMethod.POST,"/api/v1/locations/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.GET,"/api/v1/tours/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/v1/locations/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/v1/tour/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/v1/location/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/v1/bookings/**").permitAll()
                .antMatchers(HttpMethod.GET,"/api/v1/booking/**").hasAnyAuthority("ADMIN","TOURIST","TOUR_GUIDE")
                .antMatchers("/api/v1/location/**").hasAnyAuthority("ADMIN")
                .antMatchers("/api/v1/tour/**").hasAnyAuthority("ADMIN")
                .antMatchers(HttpMethod.GET,"/api/v1/user/**").hasAnyAuthority("ADMIN","TOURIST","TOUR_GUIDE")
                .antMatchers(HttpMethod.DELETE,"/api/v1/user/**").hasAnyAuthority("ADMIN")
                .antMatchers("/api/v1/token/**").permitAll()
                .anyRequest().authenticated()
                .and().exceptionHandling()
                .authenticationEntryPoint(jwtEntryPoint)
                .and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);//Tất cả các request khác đều được phải xác thực trước khi truy cập
        // Thêm một lớp Filter kiểm tra jwt
        http.addFilterBefore(JwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }
}
