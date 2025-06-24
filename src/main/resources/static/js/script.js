// Funktion zum Umschalten des benutzerdefinierten Eingabefelds
function toggleCustomInput() {
    const symbolDropdown = document.getElementById('symbol');
    const customSymbolContainer = document.getElementById('custom-symbol-container');

    if (symbolDropdown.value === 'OTHER') {
        customSymbolContainer.style.display = 'block'; // Zeige das Eingabefeld
    } else {
        customSymbolContainer.style.display = 'none'; // Verstecke das Eingabefeld
    }
}

// Funktion zum Abrufen von Stock-Daten
async function fetchStockData() {
    let symbol = document.getElementById('symbol').value;

    // Wenn "Andere" gewählt wurde, hole das benutzerdefinierte Symbol aus dem Eingabefeld
    if (symbol === 'OTHER') {
        symbol = document.getElementById('custom-symbol').value.toUpperCase();
    }

    // Überprüfen, ob das benutzerdefinierte Symbol leer ist
    if (!symbol) {
        alert("Bitte geben Sie ein gültiges Aktien-Symbol ein.");
        return;
    }

    const url = `http://localhost:8080/api/stocks/${symbol}`;

    try {
        // API-Daten abfragen
        const response = await fetch(url);

        // Wenn die Antwort nicht erfolgreich ist
        if (!response.ok) {
            throw new Error('Aktien-Daten nicht gefunden');
        }

        // JSON-Antwort parsen
        const stockData = await response.json();

        // Stock-Daten im DOM anzeigen
        displayStockData(stockData);
    } catch (error) {
        console.error('Fehler beim Abrufen der Stock-Daten:', error);
        alert('Es gab einen Fehler beim Abrufen der Daten. Bitte versuchen Sie es später erneut.');
    }
}

// Funktion zum Anzeigen der Stock-Daten
function displayStockData(stockData) {
    const stockDetailsDiv = document.getElementById('stock-details');

    // Wenn keine Daten vorhanden sind, eine Fehlermeldung anzeigen
    if (!stockData) {
        stockDetailsDiv.style.display = 'none';
        alert("Daten nicht gefunden oder ungültige Antwort.");
        return;
    }

    const change = stockData.change !== undefined ? stockData.change : 'Nicht verfügbar';
    const volume = stockData.volume !== undefined ? stockData.volume : 'Nicht verfügbar';
    const closePrice = stockData.close !== undefined ? stockData.close : 'Nicht verfügbar';

    stockDetailsDiv.innerHTML = `
        <h2>Aktie: ${stockData.name} (${stockData.symbol})</h2>
        <p><strong>Preis:</strong> $${closePrice} <span class="tooltip">[<i class="info-icon">i</i><span class="tooltip-text">Der aktuelle Preis der Aktie basierend auf dem letzten Handel</span>]</span></p>
        <p><strong>Letzte Änderung:</strong> $${change} <span class="tooltip">[<i class="info-icon">i</i><span class="tooltip-text">Die Veränderung des Aktienpreises im Vergleich zum letzten Handelstag</span>]</span></p>
        <p><strong>Volumen:</strong> ${volume} <span class="tooltip">[<i class="info-icon">i</i><span class="tooltip-text">Anzahl der gehandelten Aktien im letzten Zeitraum</span>]</span></p>
    `;

    stockDetailsDiv.style.display = 'block';
}
