package org.example.boersendashboard;

public class YahooResponseDto {

    private String symbol;
    private double kurs;
    private String waehrung;

    // Konstruktoren
    public YahooResponseDto(String symbol, double kurs, String waehrung) {
        this.symbol = symbol;
        this.kurs = kurs;
        this.waehrung = waehrung;
    }

    // Getter & Setter
}
