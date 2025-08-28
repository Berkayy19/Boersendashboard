import React, { useState, useEffect } from "react";
import { fetchStock } from "./api";
import StockCard from "./Stockcard";

const App = () => {
    const [stock, setStock] = useState(null);
    const [symbol, setSymbol] = useState("AAPL");

    useEffect(() => {
        const getData = async () => {
            const data = await fetchStock(symbol);
            setStock(data);
        };
        getData();
    }, [symbol]);

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Boersen Dashboard</h1>
            <input
                type="text"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value.toUpperCase())}
                placeholder="Stock Symbol"
            />
            <StockCard stock={stock} />
        </div>
    );
};

export default App;
