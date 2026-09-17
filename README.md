# Interaktive Produktliste

JavaScript-ES6+-Aufgabe aus LF10a: Produkte werden ohne Reload über DOM-Events gefiltert und sortiert.

## Starten

```bash
npm install
npm start
```

Danach die angezeigte lokale URL im Browser öffnen.

## Prüfen

```bash
npm test
npm run lint
npm run format:check
```

Die Jest-Konfiguration erzeugt zusätzlich eine Coverage-Auswertung. Die Filter- und Sortierlogik liegt unabhängig von der DOM-Anzeige in `src/productUtils.js` und ist dadurch direkt testbar.
