import React from "react";

// Info-Feld für ein einzelnes Aktienattribut
const StockInfo = ({ label, value, description, metric }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            margin: "8px",
            textAlign: "left",
            backgroundColor: "#f9f9f9"
        }}>
            <strong>{label}:</strong> {value} {metric && <span>({metric})</span>}
            <div style={{ fontSize: "0.85em", color: "#555" }}>{description}</div>
        </div>
    );
};

export default StockInfo;
