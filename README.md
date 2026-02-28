# webquran (Projektname)

Dieses Repository enthaelt aktuell eine moderne Pflanzen-Website als MVP.

## Was ist enthalten
- Kachel-Startseite mit Suche
- Filter nach Klima, Kategorie und Aussaatmonat
- Ergebniszaehler der aktuellen Treffer
- Monatskalender fuer Aussaat und Ernte (Januar bis Dezember)
- Detailseite pro Pflanze mit:
  - Name + botanischer Name
  - Ursprung
  - Kategorie und Klima
  - Standort, Boden, pH, Licht, Winterhaerte
  - Naehrstoffbedarf und Pflanzabstand
  - Aussaat/Ernte inkl. Monatsangaben
  - Bewaesserung
  - Gute und schlechte Nachbarpflanzen
  - Krankheiten/Schaedlinge
  - Vermehrung, Schwierigkeitsgrad, Verwendung

## Datenstatus
- 23 Pflanzenprofile fuer Obst, Gemuese, Kraeuter und Bluetenpflanzen

## Start lokal
1. Im Projektordner ausfuehren:
   `python3 -m http.server 8080`
2. Im Browser oeffnen:
   `http://localhost:8080/index.html`

## Naechste sinnvolle Ausbaustufen
- Fotos lokal verwalten statt externe URLs
- Favoritenliste pro Nutzer
- Saison-Planer mit persoenlichem Gartenkalender
- Import/Export der Pflanzdaten als JSON
