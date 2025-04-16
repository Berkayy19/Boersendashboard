package org.example.boersendashboard;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/aktien")
public class AktieController {

    private final YahooFinanceService yahooFinanceService;

    public AktieController(YahooFinanceService yahooFinanceService) {
        this.yahooFinanceService = yahooFinanceService;
    }

    @GetMapping("/{symbol}")
    public ResponseEntity<YahooResponseDto> getAktienKurs(@PathVariable String symbol) {
        YahooResponseDto dto = yahooFinanceService.getAktienDaten(symbol.toUpperCase());
        return ResponseEntity.ok(dto);
    }
}


