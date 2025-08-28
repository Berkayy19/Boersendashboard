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

        // API-Anfrage senden und Antwort abrufen
        StockResponse stockResponse = restTemplate.getForObject(url, StockResponse.class);

        if (stockResponse != null) {
            // Konvertiere numerische Felder, falls sie als String kommen
            try {
                // Wenn die API die Zahlen als Strings zurückgibt, hier konvertieren
                stockResponse.setClose(Double.parseDouble(stockResponse.getClose() + ""));
                stockResponse.setChange(Double.parseDouble(stockResponse.getChange() + ""));
                stockResponse.setOpen(Double.parseDouble(stockResponse.getOpen() + ""));
                stockResponse.setHigh(Double.parseDouble(stockResponse.getHigh() + ""));
                stockResponse.setLow(Double.parseDouble(stockResponse.getLow() + ""));
                stockResponse.setPreviousClose(Double.parseDouble(stockResponse.getPreviousClose() + ""));
                stockResponse.setPercentChange(Double.parseDouble(stockResponse.getPercentChange() + ""));
            } catch (NumberFormatException e) {
                // Falls ein Fehler beim Parsen auftritt, setze Standardwerte
                stockResponse.setClose(0.0);
                stockResponse.setChange(0.0);
                stockResponse.setOpen(0.0);
                stockResponse.setHigh(0.0);
                stockResponse.setLow(0.0);
                stockResponse.setPreviousClose(0.0);
                stockResponse.setPercentChange(0.0);
            }
        }

        return stockResponse;
    }
}
