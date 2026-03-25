package com.example.myapp.service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class FraudDetectionService {

    private final RestTemplate restTemplate = new RestTemplate();
    private final String ML_URL = "http://localhost:5050/predict";

    public Map<String, Object> checkFraud(Double amount, String category, String deviceType, LocalDateTime time) {

        try {

            Map<String, Object> requestBody = new HashMap<>();
            requestBody.put("amount", amount);
            requestBody.put("hour", time.getHour());
            requestBody.put("category", encodeCategory(category));
            requestBody.put("device", encodeDevice(deviceType));

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<Map<String, Object>> entity =
                    new HttpEntity<>(requestBody, headers);

            ResponseEntity<Map> response =
                    restTemplate.postForEntity(
                            ML_URL,
                            entity,
                            Map.class
                    );

            return response.getBody();

        } catch (Exception e) {

            e.printStackTrace();

            // fallback if ML API fails
            Map<String, Object> fallback = new HashMap<>();
            fallback.put("fraud", 0);
            fallback.put("probability", 0.1);

            return fallback;
        }
    }

    private int encodeCategory(String category) {

        if (category == null) return 4;

        return switch (category.toLowerCase()) {
            case "shopping" -> 0;
            case "food" -> 1;
            case "travel" -> 2;
            case "bills" -> 3;
            default -> 4;
        };
    }

    private int encodeDevice(String deviceType) {

        if (deviceType == null) return 0;

        return deviceType.equalsIgnoreCase("mobile") ? 1 : 0;
    }
}