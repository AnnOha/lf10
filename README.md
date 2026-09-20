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

## Projektstruktur

- `src/products.js`: Produktdaten mit zugehörigem Bild, Preis und Kategorie.
- `src/productUtils.js`: reine Filter- und Sortierlogik, die mit Jest getestet wird.
- `src/app.js`: DOM-Rendering, Events, Zustand der Filter und Theme-Umschalter.

Die Trennung verhindert, dass Produktdaten, Geschäftslogik und Benutzeroberfläche bei späteren Änderungen miteinander vermischt werden.

## Style Guide und Design Tokens

Die Anwendung nutzt CSS Custom Properties als zentralen Style Guide. Die Tokens sind in `src/style.css` in primitive und semantische Tokens gegliedert.

| Kategorie  | Primitive Tokens                                                | Semantische Verwendung                                                   |
| ---------- | --------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Farbe      | `--color-slate-900`, `--color-orange-600`, `--color-cream-50`   | `--color-text-primary`, `--color-action-primary`, `--color-surface-card` |
| Typografie | `--font-family-sans`, `--font-size-body`, `--font-size-display` | `--font-body`, `--font-text`, `--font-display`                           |
| Spacing    | `--space-2`, `--space-4`, `--space-5`, `--space-9`              | `--space-control-padding`, `--space-card-padding`                        |

Die Namen sind nach ihrem Zweck benannt, nicht nach einem konkreten Farbwert. Zum Beispiel beschreibt `--color-action-primary` die Hauptaktion der Oberfläche; die konkrete Farbe kann pro Theme ausgetauscht werden. Dadurch bleiben die Komponenten unabhängig vom aktuellen Corporate Design.

### Themes

Das helle Theme wird in `:root` definiert. Das dunkle Theme überschreibt ausschließlich semantische Token in `body.dark-mode`. Die Komponentenregeln werden nicht kopiert oder angepasst. Der Umschalter speichert die Auswahl im Browser.

### Reflexion

1. Ein primitiver Token enthält einen Rohwert, zum Beispiel `--color-slate-900: #1d2933`. Ein semantischer Token beschreibt dagegen seine Aufgabe im Interface, zum Beispiel `--color-text-primary: var(--color-slate-900)`. Semantische Tokens verweisen somit auf primitive Tokens.
2. Bei einem Rebranding müssen zentrale Token-Werte nur an einer Stelle geändert werden. Alle Komponenten, die diese semantischen Tokens verwenden, übernehmen das neue Design automatisch. Das sorgt für Konsistenz und weniger Pflegeaufwand.
