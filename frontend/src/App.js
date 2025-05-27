import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stockOptions = ['AAPL', 'GOOG', 'MSFT', 'AMZN', 'TSLA'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:8080/api/stocks/${selectedStock}`);
        setStockData(response.data);
      } catch (err) {
        setError('Fehler beim Abrufen der Daten.');
        setStockData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedStock]);

  return (
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>📊 Börsen-Dashboard</h1>

        <div style={{ maxWidth: '400px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 0 12px rgba(0,0,0,0.1)' }}>
          <label htmlFor="stock-select" style={{ display: 'block', marginBottom: '8px' }}>Wähle eine Aktie:</label>
          <select
              id="stock-select"
              value={selectedStock}
              onChange={(e) => setSelectedStock(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '20px' }}
          >
            {stockOptions.map(symbol => (
                <option key={symbol} value={symbol}>{symbol}</option>
            ))}
          </select>

          {loading && <p>Lade Daten...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {stockData && !loading && (
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{stockData.name}</h2>
                <p style={{ fontSize: '1rem', color: '#666' }}>{stockData.symbol}</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', color: 'green' }}>${stockData.price.toFixed(2)}</p>
              </div>
          )}
        </div>
      </div>
  );
}

export default App;
