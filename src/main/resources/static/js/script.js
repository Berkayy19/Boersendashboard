async function fetchStockData() {
    const symbol = document.getElementById('symbol').value.toUpperCase();

    // Wenn das Symbol leer ist, zeige eine Warnung und gehe weiter
    if (!symbol) {
        alert("Bitte geben Sie ein Aktien-Symbol ein.");
        return;
    }

    const url = `http://localhost:8080/api/stocks/${symbol}`;

    try {
        // Holen der Daten von der API
        const response = await fetch(url);

        // Wenn die Antwort nicht erfolgreich ist, werfe einen Fehler
        if (!response.ok) {
            throw new Error('Stock data not found');
        }

        // Parsen der Antwort als JSON
        const stockData = await response.json();

        // Logge die gesamte Antwort zur Fehlerdiagnose
        console.log('API Response:', stockData);

        // Überprüfe, ob die benötigten Felder vorhanden sind
        if (stockData && stockData.symbol && stockData.name) {
            displayStockData(stockData);
        } else {
            alert("Daten sind nicht vollständig oder fehlen.");
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Stock-Daten:', error);
        alert('Es gab einen Fehler beim Abrufen der Daten. Bitte versuchen Sie es später erneut.');
    }
}

function displayStockData(stockData) {
    const stockDetailsDiv = document.getElementById('stock-details');

    // Stelle sicher, dass stockData nicht null oder undefined ist
    if (!stockData || !stockData.symbol || !stockData.name) {
        stockDetailsDiv.style.display = 'none';
        alert("Daten nicht gefunden oder ungültige Antwort.");
        return;
    }

    // Sicherstellen, dass alle Felder korrekt vorhanden sind und nicht undefined
    const change = stockData.change !== undefined ? stockData.change : 'Nicht verfügbar';
    const volume = stockData.volume !== undefined ? stockData.volume : 'Nicht verfügbar';
    const closePrice = stockData.close !== undefined ? stockData.close : 'Nicht verfügbar';

    stockDetailsDiv.innerHTML = `
        <h2>Aktie: ${stockData.name} (${stockData.symbol})</h2>
        <p><strong>Preis:</strong> $${closePrice}</p>
        <p><strong>Letzte Änderung:</strong> $${change}</p>
        <p><strong>Volumen:</strong> ${volume}</p>
    `;

    stockDetailsDiv.style.display = 'block';
}
