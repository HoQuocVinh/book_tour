package nhom04.hcmute.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import nhom04.hcmute.model.User;
import nhom04.hcmute.payload.ApiResponse;
import nhom04.hcmute.payload.JwtAuthenticationResponse;
import nhom04.hcmute.payload.RefreshTokenResponse;
import nhom04.hcmute.security.jwt.JwtProvider;
import nhom04.hcmute.service.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * Create by: IntelliJ IDEA
 * User     : trongnt
 * Date     : Thu, 10/27/2022
 * Time     : 10:22
 * Filename : Token
 */
@RestController
@RequestMapping("api/v1")
@RequiredArgsConstructor
public class TokenController {
    private final JwtProvider jwtProvider;
    @Value("${app.jwtSecret}")
    private String jwtSecret;

    @Value("${app.jwtExpirationInMs}")
    private int jwtExpirationInMs;
    private final UserService userService;

    @PostMapping("/token/{refreshToken}")
    public ResponseEntity<?> refreshToken(@PathVariable("refreshToken") String refreshToken) {
        if (refreshToken != null && jwtProvider.validateToken(refreshToken)) {
            String email = jwtProvider.getUsernameFromJWT(refreshToken);
            User user = userService.getUserByEmail(email);
            Date now = new Date();
            Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
            String accessToken = Jwts.builder().setSubject(user.getEmail())
                    .setIssuedAt(new Date())
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS512, jwtSecret)
                    .compact();
            return ResponseEntity.ok().body(new JwtAuthenticationResponse(accessToken, refreshToken));
        }
        return ResponseEntity.ok().body(new ApiResponse(false, "Refresh failed!"));
    }
}
