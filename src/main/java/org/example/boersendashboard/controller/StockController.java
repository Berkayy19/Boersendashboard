package org.example.boersendashboard.controller;

import org.example.boersendashboard.model.StockResponse;
import org.example.boersendashboard.service.TwelveDataService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

    private final TwelveDataService twelveDataService;

    public StockController(TwelveDataService twelveDataService) {
        this.twelveDataService = twelveDataService;
    }

    @GetMapping("/{symbol}")
    public StockResponse getStock(@PathVariable String symbol) {
        return twelveDataService.getStockData(symbol.toUpperCase());
    }
}
