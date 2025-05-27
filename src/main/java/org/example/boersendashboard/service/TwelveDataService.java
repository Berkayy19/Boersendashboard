package org.example.boersendashboard.service;

import org.example.boersendashboard.model.StockResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class TwelveDataService {

    @Value("${twelvedata.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public StockResponse getStockData(String symbol) {
        String url = UriComponentsBuilder.fromHttpUrl("https://api.twelvedata.com/quote")
                .queryParam("symbol", symbol)
                .queryParam("apikey", apiKey)
                .toUriString();

        return restTemplate.getForObject(url, StockResponse.class);
    }
}
