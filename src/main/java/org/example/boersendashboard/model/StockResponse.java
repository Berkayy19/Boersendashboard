package org.example.boersendashboard.model;

public class StockResponse {
    private String symbol;
    private String name;
    private double close;  // numeric field
    private double change;  // numeric field
    private String volume;  // string field, since it's returned as a string
    private double open;  // numeric field
    private double high;  // numeric field
    private double low;  // numeric field
    private double previousClose;  // numeric field
    private double percentChange;  // numeric field

    // Standard constructor
    public StockResponse() {}

    // Constructor for initializing all fields
    public StockResponse(String symbol, String name, double close, double change, String volume,
                         double open, double high, double low, double previousClose, double percentChange) {
        this.symbol = symbol;
        this.name = name;
        this.close = close;
        this.change = change;
        this.volume = volume;
        this.open = open;
        this.high = high;
        this.low = low;
        this.previousClose = previousClose;
        this.percentChange = percentChange;
    }

    // Getter and Setter methods for each field
    public String getSymbol() { return symbol; }
    public void setSymbol(String symbol) { this.symbol = symbol; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getClose() { return close; }
    public void setClose(double close) { this.close = close; }

    public double getChange() { return change; }
    public void setChange(double change) { this.change = change; }

    public String getVolume() { return volume; }
    public void setVolume(String volume) { this.volume = volume; }

    public double getOpen() { return open; }
    public void setOpen(double open) { this.open = open; }

    public double getHigh() { return high; }
    public void setHigh(double high) { this.high = high; }

    public double getLow() { return low; }
    public void setLow(double low) { this.low = low; }

    public double getPreviousClose() { return previousClose; }
    public void setPreviousClose(double previousClose) { this.previousClose = previousClose; }

    public double getPercentChange() { return percentChange; }
    public void setPercentChange(double percentChange) { this.percentChange = percentChange; }
}
