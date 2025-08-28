import React, { useState, useEffect } from "react";
import { fetchStock } from "./api";
import StockInfo from "./StockInfo";

const popularStocks = [
    "AAPL", // Apple
    "GOOG", // Alphabet / Google
    "MSFT", // Microsoft
    "AMZN", // Amazon
    "TSLA", // Tesla
    "META", // Meta / Facebook
    "NFLX", // Netflix
    "NVDA"  // Nvidia
];

const App = () => {
    const [stock, setStock] = useState(null);
    const [symbol, setSymbol] = useState(popularStocks[0]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchStock(symbol);
            setStock(data);
        };
        getData();
    }, [symbol]);

    if (!stock) return <div>Lade Daten...</div>;

    return (
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "auto" }}>
            <h1>Boersen Dashboard</h1>

            {/* Dropdown für beliebte Aktien */}
            <select
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                style={{ padding: "8px", fontSize: "1em", marginBottom: "16px" }}
            >
                {popularStocks.map((s) => (
                    <option key={s} value={s}>{s}</option>
                ))}
            </select>

            {/* Alternativ: Eingabefeld für eigene Symbole */}
            <div style={{ marginTop: "8px", marginBottom: "16px" }}>
                <input
                    type="text"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                    placeholder="Oder eigenes Symbol eingeben"
                    style={{ padding: "8px", fontSize: "1em" }}
                />
            </div>

            <StockInfo
                label="Symbol"
                value={stock.symbol}
                description="Börsenkürzel der Aktie"
            />
            <StockInfo
                label="Name"
                value={stock.name}
                description="Vollständiger Firmenname"
            />
            <StockInfo
                label="Close"
                value={stock.close}
                description="Letzter verfügbarer Kurs der Aktie"
                metric="USD"
            />
            <StockInfo
                label="Change"
                value={stock.change}
                description="Differenz zwischen Close und Previous Close"
                metric="USD"
            />
            <StockInfo
                label="Percent Change"
                value={stock.percentChange}
                description="Prozentuale Änderung seit dem vorherigen Schlusskurs"
                metric="%"
            />
            <StockInfo
                label="Open"
                value={stock.open}
                description="Eröffnungskurs des Tages"
                metric="USD"
            />
            <StockInfo
                label="High"
                value={stock.high}
                description="Tageshöchstkurs"
                metric="USD"
            />
            <StockInfo
                label="Low"
                value={stock.low}
                description="Tagestiefstkurs"
                metric="USD"
            />
            <StockInfo
                label="Previous Close"
                value={stock.previousClose}
                description="Schlusskurs vom vorherigen Handelstag"
                metric="USD"
            />
            <StockInfo
                label="Volume"
                value={stock.volume}
                description="Handelsvolumen heute (Anzahl gehandelter Aktien)"
                metric="Stück"
            />
        </div>
    );
};

export default App;
