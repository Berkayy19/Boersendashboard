# 📈 Börsendashboard

Ein webbasiertes Dashboard zur Anzeige von aktuellen Aktienkursen, Finanznachrichten und Marktdaten – übersichtlich und benutzerfreundlich aufbereitet.

## 🔍 Projektbeschreibung

Das Börsendashboard ist eine Webanwendung, die Nutzer:innen eine zentrale Übersicht über relevante Finanzinformationen bietet. Die Anwendung kombiniert Kursdaten und Finanznachrichten über externe APIs und stellt diese in Echtzeit dar. Ziel ist es, interessierten Personen den Zugang zu aktuellen Börseninformationen zu erleichtern.

## 🖠️ Technologien

- **Frontend**: React (Vite)
- **Backend**: Spring Boot
- **APIs**: Yahoo Finance (inoffiziell), ggf. weitere frei verfügbare Finanzdatenquellen
- **Versionierung**: Git (GitHub)

## 📦 Features (in Entwicklung)

- ✅ Anzeige von Echtzeit-Aktienkursen
- ✅ Integration von Finanznachrichten
- 🕒 Suchfunktion für einzelne Aktien
- 🕒 Benutzerdefinierte Watchlist
- 🕒 Mobile-optimiertes Layout

## 📁 Projektstruktur

```plaintext
/boersendashboard
│
├── frontend/           # React-Anwendung
│   ├── src/
│   └── public/
│
├── backend/            # Spring Boot Backend
│   └── src/main/java/
│
└── README.md
```

## 🚀 Installation & Ausführen

### Voraussetzungen

- Node.js (empfohlen: ≥18)
- Java JDK (empfohlen: ≥17)
- Maven oder Gradle
- Git

### Lokale Installation

```bash
# Backend
cd backend
./mvnw spring-boot:run

# Frontend
cd frontend
npm install
npm run dev
```

## 👥 Team

Dieses Projekt wird im Rahmen eines Schulprojekts von einem Dreierteam entwickelt. Unsere wöchentlichen Sitzungen finden jeweils am Dienstag statt.

## 📅 Zeitplan (Auszug)

- **April 2025**: Projektstart, technische Planung, API-Tests, erste Prototypen
- **Mai 2025**: API-Integration, Frontend-Entwicklung, Datenvisualisierung

## 📄 Lizenz

Dieses Projekt ist rein zu Lernzwecken gedacht und unterliegt keiner kommerziellen Lizenz.

---

> Hinweis: Die verwendeten Datenquellen (z. B. Yahoo Finance API) sind nicht offiziell unterstützt. Für produktive Anwendungen sind offizielle und vertraglich abgesicherte APIs zu empfehlen.
