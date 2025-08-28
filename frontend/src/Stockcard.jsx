import React from "react";

const StockCard = ({ stock }) => {
    if (!stock) return null;

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", margin: "16px", borderRadius: "8px" }}>
            <h2>{stock.name} ({stock.symbol})</h2>
            <p>Close: {stock.close}</p>
            <p>Change: {stock.change} ({stock.percentChange}%)</p>
            <p>Open: {stock.open}</p>
            <p>High: {stock.high}</p>
            <p>Low: {stock.low}</p>
            <p>Previous Close: {stock.previousClose}</p>
            <p>Volume: {stock.volume}</p>
        </div>
    );
};

export default StockCard;
