package org.example.boersendashboard;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class YahooFinanceService {

    private final RestTemplate restTemplate;

    public YahooFinanceService() {
        this.restTemplate = new RestTemplate();
    }

    public YahooResponseDto getAktienDaten(String symbol) {
        String url = "https://query1.finance.yahoo.com/v7/finance/quote?symbols=" + symbol;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        try {
            ObjectMapper mapper = new ObjectMapper();
            JsonNode root = mapper.readTree(response.getBody());
            JsonNode result = root.path("quoteResponse").path("result").get(0);

            String sym = result.path("symbol").asText();
            double preis = result.path("regularMarketPrice").asDouble();
            String waehrung = result.path("currency").asText();

            return new YahooResponseDto(sym, preis, waehrung);

        } catch (Exception e) {
            throw new RuntimeException("Fehler beim Verarbeiten der Yahoo Finance Daten", e);
        }
    }
}
