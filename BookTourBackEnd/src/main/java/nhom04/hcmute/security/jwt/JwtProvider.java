package nhom04.hcmute.security.jwt;

import io.jsonwebtoken.*;
import nhom04.hcmute.payload.JwtAuthenticationResponse;
import nhom04.hcmute.security.principal.UserPrincipal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Date;
import java.util.Map;
import java.util.function.Predicate;
import java.util.stream.Collectors;


/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 9/22/2022
 * Time     : 07:28
 * Filename : JwtProvider
 */
@Component
public class JwtProvider {
    public static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpirationInMs}")
    private int jwtExpirationInMs;

    @Value("${app.jwtRefreshExpirationInMs}")
    private int jwtRefreshExpirationInMs;

    public JwtAuthenticationResponse createToken(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        Date expiryRefreshDate = new Date(now.getTime() + jwtRefreshExpirationInMs);
        Predicate<GrantedAuthority> filter = item -> item.getAuthority().equals("ADMIN");
        Collection<GrantedAuthority> roles = userPrincipal.getAuthorities().stream().filter(filter).collect(Collectors.toList());
        Boolean admin = false;
        if (roles.size() > 0) {
            admin = true;
        }
        String accessToken = Jwts.builder().setSubject(userPrincipal.getUsername())
                .claim("admin",admin)
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
        String refreshToken = Jwts.builder().setSubject(userPrincipal.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(expiryRefreshDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
        return new JwtAuthenticationResponse(accessToken, refreshToken);
    }

    public String getUsernameFromJWT(String token) {
        String username = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
        return username;
    }

    public boolean validateToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            logger.info("Token true");
            return true;
        } catch (SignatureException ex) {
            logger.error("Invalid JWT signature");
        } catch (MalformedJwtException ex) {
            logger.error("Invalid JWT token");
        } catch (ExpiredJwtException ex) {
            logger.error("Expired JWT token");
        } catch (UnsupportedJwtException ex) {
            logger.error("Unsupported JWT token");
        } catch (IllegalArgumentException ex) {
            logger.error("JWT claims string is empty.");
        }
        return false;
    }
}
