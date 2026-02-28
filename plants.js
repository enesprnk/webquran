const monthNames = {
  1: "Januar",
  2: "Februar",
  3: "Maerz",
  4: "April",
  5: "Mai",
  6: "Juni",
  7: "Juli",
  8: "August",
  9: "September",
  10: "Oktober",
  11: "November",
  12: "Dezember",
};

const plants = [
  {
    id: "erdbeere",
    name: "Erdbeere",
    latinName: "Fragaria x ananassa",
    category: "obst",
    climate: "gemaessigt",
    origin: "Europa und Nordamerika (kultivierte Kreuzung)",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
    summary: "Mehrjaehrige Pflanze mit suessen Fruechten fuer Beet, Topf und Hochbeet.",
    growth: "Sonnig bis halbschattig, luftiger Standort.",
    soil: "Humos, locker, gut drainiert.",
    ph: "5.5 bis 6.8",
    light: "Vollsonnig bis halbschatten",
    hardiness: "Winterhart bis ca. -15 C (sortenabhaengig)",
    nutrient: "Mittel",
    spacing: "25 bis 35 cm",
    sowing: "Vorziehen ab Februar oder Jungpflanzen im Fruehjahr.",
    sowingMonths: [2, 3, 4],
    harvest: "Fruehsommer bis Sommer, bei immertragenden Sorten laenger.",
    harvestMonths: [5, 6, 7, 8],
    watering: "Regelmaessig, Staunaesse vermeiden.",
    companionsGood: ["Borretsch", "Knoblauch", "Salat"],
    companionsBad: ["Kohlarten"],
    pests: ["Grauschimmel", "Schnecken", "Erdbeermehltau"],
    propagation: "Auslaeufer, Teilung",
    difficulty: "Einfach",
    use: ["Frischverzehr", "Dessert", "Marmelade"],
  },
  {
    id: "lavendel",
    name: "Lavendel",
    latinName: "Lavandula angustifolia",
    category: "bluetenpflanzen",
    climate: "mediterran",
    origin: "Mittelmeerraum",
    image: "https://images.unsplash.com/photo-1593029490618-4fd6f73f3f89?auto=format&fit=crop&w=1200&q=80",
    summary: "Duftpflanze mit violetten Blueten, beliebt bei Bienen und Schmetterlingen.",
    growth: "Vollsonnig, warm, luftig.",
    soil: "Durchlaessig, eher mager und kalkhaltig.",
    ph: "6.5 bis 8.0",
    light: "Vollsonnig",
    hardiness: "Winterhart bis ca. -15 C",
    nutrient: "Niedrig",
    spacing: "30 bis 40 cm",
    sowing: "Aussaat im Fruehjahr oder Stecklinge im Sommer.",
    sowingMonths: [3, 4, 5],
    harvest: "Blueten schneiden zur Hauptbluete.",
    harvestMonths: [6, 7, 8],
    watering: "Sparsam giessen, Trockenheitstoleranz hoch.",
    companionsGood: ["Rosen", "Salbei"],
    companionsBad: ["Staunaesse liebende Pflanzen"],
    pests: ["Wurzelfaeule bei zu viel Wasser"],
    propagation: "Stecklinge, Aussaat",
    difficulty: "Einfach",
    use: ["Duft", "Tee", "Dekoration"],
  },
  {
    id: "tomate",
    name: "Tomate",
    latinName: "Solanum lycopersicum",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittel- und Suedamerika",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80",
    summary: "Waermeliebende Kulturpflanze mit vielen Sorten fuer Balkon, Beet und Gewaechshaus.",
    growth: "Sonnig, windgeschuetzt, naehrstoffreich.",
    soil: "Humos, tiefgruendig, durchlaessig.",
    ph: "6.0 bis 7.0",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Hoch",
    spacing: "50 bis 70 cm",
    sowing: "Vorziehen ab Maerz, auspflanzen nach den Eisheiligen.",
    sowingMonths: [3, 4],
    harvest: "Sommer bis Herbst.",
    harvestMonths: [7, 8, 9, 10],
    watering: "Regelmaessig an der Wurzel, Blaetter trocken halten.",
    companionsGood: ["Basilikum", "Karotte", "Petersilie"],
    companionsBad: ["Kartoffel"],
    pests: ["Braunfaeule", "Blattlaeuse"],
    propagation: "Samen",
    difficulty: "Mittel",
    use: ["Salat", "Sauce", "Suppen"],
  },
  {
    id: "basilikum",
    name: "Basilikum",
    latinName: "Ocimum basilicum",
    category: "kraeuter",
    climate: "tropisch",
    origin: "Tropisches Asien und Afrika",
    image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1200&q=80",
    summary: "Aromatisches Kuechenkraut fuer warme und helle Standorte.",
    growth: "Warm, hell, geschuetzt vor kaltem Wind.",
    soil: "Locker, naehrstoffreich, gleichmaessig feucht.",
    ph: "6.0 bis 7.5",
    light: "Viel Licht, keine starke Mittagshitze im Topf",
    hardiness: "Nicht winterhart",
    nutrient: "Mittel",
    spacing: "20 bis 25 cm",
    sowing: "Direkt oder vorgezogen im Fruehjahr bis Sommer.",
    sowingMonths: [4, 5, 6, 7],
    harvest: "Fortlaufend durch Triebspitzen-Ernte.",
    harvestMonths: [6, 7, 8, 9],
    watering: "Leicht feucht halten, nicht austrocknen lassen.",
    companionsGood: ["Tomate", "Paprika"],
    companionsBad: ["Rueckstaendige Staunaesse"],
    pests: ["Schnecken", "Mehltau"],
    propagation: "Samen, Stecklinge",
    difficulty: "Einfach",
    use: ["Pesto", "Pasta", "Salat"],
  },
  {
    id: "gurke",
    name: "Gurke",
    latinName: "Cucumis sativus",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Suedasien",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=1200&q=80",
    summary: "Schnellwachsende Sommerpflanze mit hohem Wasserbedarf.",
    growth: "Warm, sonnig, windgeschuetzt.",
    soil: "Humos, locker, naehrstoffreich.",
    ph: "6.0 bis 7.0",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Hoch",
    spacing: "50 bis 100 cm",
    sowing: "Vorziehen ab April oder Direktsaat ab Mai.",
    sowingMonths: [4, 5, 6],
    harvest: "Fruehe Sorten schon im Hochsommer.",
    harvestMonths: [7, 8, 9],
    watering: "Sehr regelmaessig und ausreichend.",
    companionsGood: ["Dill", "Bohnen", "Salat"],
    companionsBad: ["Kartoffel"],
    pests: ["Echter Mehltau", "Spinnmilben"],
    propagation: "Samen",
    difficulty: "Mittel",
    use: ["Salat", "Einlegen", "Smoothies"],
  },
  {
    id: "paprika",
    name: "Paprika",
    latinName: "Capsicum annuum",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittel- und Suedamerika",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1200&q=80",
    summary: "Waermeliebende Fruchtgemuese-Art fuer sonnige Standorte.",
    growth: "Warm, sonnig, geschuetzt.",
    soil: "Naehrstoffreich und locker.",
    ph: "6.0 bis 6.8",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Hoch",
    spacing: "40 bis 50 cm",
    sowing: "Frueh vorziehen ab Februar oder Maerz.",
    sowingMonths: [2, 3],
    harvest: "Ab Spaetsommer bis Herbst.",
    harvestMonths: [8, 9, 10],
    watering: "Konstant, aber ohne Staunaesse.",
    companionsGood: ["Basilikum", "Zwiebel"],
    companionsBad: ["Fenchel"],
    pests: ["Blattlaeuse", "Spinnmilben"],
    propagation: "Samen",
    difficulty: "Mittel",
    use: ["Rohkost", "Pfanne", "Grillen"],
  },
  {
    id: "zucchini",
    name: "Zucchini",
    latinName: "Cucurbita pepo",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittelamerika",
    image: "https://images.unsplash.com/photo-1598511720088-1b71a7f4c5a0?auto=format&fit=crop&w=1200&q=80",
    summary: "Ertragreiche Pflanze mit langer Erntezeit und grossem Platzbedarf.",
    growth: "Sonnig, warm, luftiger Standort.",
    soil: "Sehr naehrstoffreich, humos, feucht.",
    ph: "6.0 bis 7.5",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Hoch",
    spacing: "80 bis 120 cm",
    sowing: "Vorziehen ab April oder Direktsaat ab Mai.",
    sowingMonths: [4, 5, 6],
    harvest: "Junge Fruechte laufend ernten.",
    harvestMonths: [7, 8, 9, 10],
    watering: "Hoher Wasserbedarf, gleichmaessig giessen.",
    companionsGood: ["Bohnen", "Mais"],
    companionsBad: ["Kartoffel"],
    pests: ["Echter Mehltau", "Schnecken"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Pfanne", "Suppe", "Ofengemuese"],
  },
  {
    id: "karotte",
    name: "Karotte",
    latinName: "Daucus carota subsp. sativus",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Vorderasien",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=1200&q=80",
    summary: "Wurzelgemuese fuer lockere Boeden und direkte Aussaat.",
    growth: "Sonnig bis halbschattig.",
    soil: "Tiefgruendig, steinfrei, locker.",
    ph: "6.0 bis 7.0",
    light: "Vollsonnig bis halbschatten",
    hardiness: "Frosttolerant",
    nutrient: "Niedrig bis mittel",
    spacing: "3 bis 5 cm in der Reihe",
    sowing: "Direktsaat im Fruehjahr bis Sommer.",
    sowingMonths: [3, 4, 5, 6, 7],
    harvest: "Je nach Sorte frueh bis spaet.",
    harvestMonths: [6, 7, 8, 9, 10],
    watering: "Regelmaessig, gleichmaessige Bodenfeuchte.",
    companionsGood: ["Zwiebel", "Lauch", "Tomate"],
    companionsBad: ["Dill direkt daneben"],
    pests: ["Moehrenfliege"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Rohkost", "Saft", "Kochen"],
  },
  {
    id: "spinat",
    name: "Spinat",
    latinName: "Spinacia oleracea",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Westasien",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=1200&q=80",
    summary: "Schnell wachsendes Blattgemuese fuer Fruehjahr und Herbst.",
    growth: "Sonnig bis halbschattig, kuehl.",
    soil: "Humos, naehrstoffreich, feucht.",
    ph: "6.5 bis 7.5",
    light: "Halbschatten bis sonnig",
    hardiness: "Leicht frosthart",
    nutrient: "Mittel",
    spacing: "8 bis 12 cm",
    sowing: "Direktsaat im Fruehjahr und Spaetsommer.",
    sowingMonths: [3, 4, 8, 9],
    harvest: "Schnell nutzbar nach wenigen Wochen.",
    harvestMonths: [4, 5, 6, 9, 10, 11],
    watering: "Regelmaessig, nicht austrocknen lassen.",
    companionsGood: ["Radieschen", "Erdbeere"],
    companionsBad: ["Mangold"],
    pests: ["Falscher Mehltau"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Salat", "Smoothie", "Geduenstet"],
  },
  {
    id: "kopfsalat",
    name: "Kopfsalat",
    latinName: "Lactuca sativa",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittelmeerregion",
    image: "https://images.unsplash.com/photo-1622205313162-be1d5712a43c?auto=format&fit=crop&w=1200&q=80",
    summary: "Beliebtes Blattgemuese fuer frische Sommersalate.",
    growth: "Sonnig bis halbschattig, kuehl und luftig.",
    soil: "Humos, locker, gleichmaessig feucht.",
    ph: "6.0 bis 7.0",
    light: "Sonnig bis halbschatten",
    hardiness: "Leicht frosttolerant",
    nutrient: "Mittel",
    spacing: "25 bis 30 cm",
    sowing: "Fruehjahr bis Sommer in Saetzen.",
    sowingMonths: [3, 4, 5, 6, 7],
    harvest: "Je nach Sorte 6 bis 10 Wochen nach Aussaat.",
    harvestMonths: [5, 6, 7, 8, 9],
    watering: "Regelmaessig, bodennah giessen.",
    companionsGood: ["Radieschen", "Erdbeere", "Karotte"],
    companionsBad: ["Petersilie"],
    pests: ["Schnecken", "Blattlaeuse"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Salat", "Wraps"],
  },
  {
    id: "rosmarin",
    name: "Rosmarin",
    latinName: "Salvia rosmarinus",
    category: "kraeuter",
    climate: "mediterran",
    origin: "Mittelmeerraum",
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?auto=format&fit=crop&w=1200&q=80",
    summary: "Immergruenes Kuechenkraut mit intensivem Aroma.",
    growth: "Vollsonnig, warm, geschuetzt.",
    soil: "Mager, durchlaessig, kalkliebend.",
    ph: "6.5 bis 8.0",
    light: "Vollsonnig",
    hardiness: "Bedingt winterhart",
    nutrient: "Niedrig",
    spacing: "40 bis 60 cm",
    sowing: "Aussaat schwierig, besser Stecklinge.",
    sowingMonths: [4, 5],
    harvest: "Ganzjaehrig sparsam moeglich.",
    harvestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    watering: "Mittel, eher trocken halten.",
    companionsGood: ["Salbei", "Thymian"],
    companionsBad: ["Staunaesse liebende Arten"],
    pests: ["Wurzelfaeule bei Nasse"],
    propagation: "Stecklinge",
    difficulty: "Einfach",
    use: ["Kueche", "Aromaoel", "Tee"],
  },
  {
    id: "thymian",
    name: "Thymian",
    latinName: "Thymus vulgaris",
    category: "kraeuter",
    climate: "mediterran",
    origin: "Suedeuropa",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80",
    summary: "Aromatisches Gewuerzkraut mit hoher Trockenheitstoleranz.",
    growth: "Vollsonnig, warm.",
    soil: "Durchlaessig, sandig, mager.",
    ph: "6.0 bis 8.0",
    light: "Vollsonnig",
    hardiness: "Winterhart",
    nutrient: "Niedrig",
    spacing: "25 bis 30 cm",
    sowing: "Aussaat oder Stecklinge im Fruehjahr.",
    sowingMonths: [3, 4, 5],
    harvest: "Vor und waehrend Bluete besonders aromatisch.",
    harvestMonths: [5, 6, 7, 8, 9],
    watering: "Wenig, nur bei Trockenheit.",
    companionsGood: ["Rosmarin", "Lavendel"],
    companionsBad: ["Stark wasserliebende Pflanzen"],
    pests: ["Selten, bei Naesse Pilze"],
    propagation: "Samen, Stecklinge",
    difficulty: "Einfach",
    use: ["Kueche", "Tee", "Duftbeet"],
  },
  {
    id: "minze",
    name: "Minze",
    latinName: "Mentha",
    category: "kraeuter",
    climate: "gemaessigt",
    origin: "Europa und Asien",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=1200&q=80",
    summary: "Wuechsiges Kraut, ideal fuer Tee und Sommergetraenke.",
    growth: "Sonnig bis halbschattig, frisch.",
    soil: "Humos, feucht, naehrstoffreich.",
    ph: "6.0 bis 7.5",
    light: "Halbschatten bis sonnig",
    hardiness: "Winterhart",
    nutrient: "Mittel",
    spacing: "30 bis 40 cm",
    sowing: "Aussaat moeglich, einfacher ueber Teilung.",
    sowingMonths: [3, 4, 5],
    harvest: "Regelmaessig Triebspitzen schneiden.",
    harvestMonths: [5, 6, 7, 8, 9],
    watering: "Gleichmaessig feucht.",
    companionsGood: ["Kohl", "Tomate"],
    companionsBad: ["Andere zarte Kraeuter direkt daneben"],
    pests: ["Rost, Minzrost"],
    propagation: "Teilung, Auslaeufer",
    difficulty: "Einfach",
    use: ["Tee", "Dessert", "Getraenke"],
  },
  {
    id: "apfelbaum",
    name: "Apfelbaum",
    latinName: "Malus domestica",
    category: "obst",
    climate: "gemaessigt",
    origin: "Zentralasien",
    image: "https://images.unsplash.com/photo-1567306295427-9458f23e8b91?auto=format&fit=crop&w=1200&q=80",
    summary: "Beliebter Obstbaum mit vielen Sorten fuer Hausgaerten.",
    growth: "Sonnig bis halbschattig, luftiger Standort.",
    soil: "Tiefgruendig, humos, frisch.",
    ph: "6.0 bis 7.0",
    light: "Sonnig",
    hardiness: "Winterhart",
    nutrient: "Mittel",
    spacing: "2 bis 4 m",
    sowing: "In der Praxis als veredelte Jungpflanze setzen.",
    sowingMonths: [10, 11, 3, 4],
    harvest: "Sortenabhaengig von Spaetsommer bis Herbst.",
    harvestMonths: [8, 9, 10],
    watering: "Junge Baeume regelmaessig, spaeter bei Trockenheit.",
    companionsGood: ["Schnittlauch", "Kapuzinerkresse"],
    companionsBad: ["Starker Wurzeldruck nahebei"],
    pests: ["Apfelwickler", "Schorf"],
    propagation: "Veredelung",
    difficulty: "Mittel",
    use: ["Frisch", "Kuchen", "Saft"],
  },
  {
    id: "himbeere",
    name: "Himbeere",
    latinName: "Rubus idaeus",
    category: "obst",
    climate: "gemaessigt",
    origin: "Europa und Westasien",
    image: "https://images.unsplash.com/photo-1571680322279-a226e6a4cc2a?auto=format&fit=crop&w=1200&q=80",
    summary: "Beerenstrauch mit sommer- oder herbsttragenden Sorten.",
    growth: "Sonnig bis halbschattig, luftig.",
    soil: "Humos, locker, leicht sauer.",
    ph: "5.5 bis 6.8",
    light: "Sonnig bis halbschatten",
    hardiness: "Winterhart",
    nutrient: "Mittel",
    spacing: "40 bis 50 cm",
    sowing: "Meist als Pflanzware im Herbst oder Fruehjahr.",
    sowingMonths: [3, 4, 10, 11],
    harvest: "Je nach Sorte Sommer oder Spaetsommer/Herbst.",
    harvestMonths: [6, 7, 8, 9],
    watering: "Regelmaessig, besonders waehrend Fruchtbildung.",
    companionsGood: ["Borretsch", "Ringelblume"],
    companionsBad: ["Kartoffel"],
    pests: ["Rutenkrankheit", "Brombeergallmilbe"],
    propagation: "Auslaeufer",
    difficulty: "Einfach",
    use: ["Frisch", "Marmelade", "Dessert"],
  },
  {
    id: "blaubeere",
    name: "Blaubeere",
    latinName: "Vaccinium corymbosum",
    category: "obst",
    climate: "gemaessigt",
    origin: "Nordamerika",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&w=1200&q=80",
    summary: "Beliebte Beerenpflanze mit Bedarf an saurem Boden.",
    growth: "Sonnig bis halbschattig, windgeschuetzt.",
    soil: "Sauer, humos, kalkarm.",
    ph: "4.0 bis 5.5",
    light: "Sonnig bis halbschatten",
    hardiness: "Winterhart",
    nutrient: "Mittel",
    spacing: "100 bis 150 cm",
    sowing: "Am besten als Topfpflanze setzen.",
    sowingMonths: [3, 4, 9, 10],
    harvest: "Beeren je nach Sorte im Sommer.",
    harvestMonths: [7, 8, 9],
    watering: "Regelmaessig mit kalkarmem Wasser.",
    companionsGood: ["Rhododendron", "Preiselbeere"],
    companionsBad: ["Kalkliebende Pflanzen"],
    pests: ["Vogelfrass", "Wurzelfaeule"],
    propagation: "Stecklinge, Absenker",
    difficulty: "Mittel",
    use: ["Frisch", "Muesli", "Kuchen"],
  },
  {
    id: "sonnenblume",
    name: "Sonnenblume",
    latinName: "Helianthus annuus",
    category: "bluetenpflanzen",
    climate: "gemaessigt",
    origin: "Nordamerika",
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=1200&q=80",
    summary: "Hohe Sommerblume mit markanten Blueten und essbaren Kernen.",
    growth: "Sonnig, warm, windgeschuetzt.",
    soil: "Naehrstoffreich, durchlaessig.",
    ph: "6.0 bis 7.5",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Mittel bis hoch",
    spacing: "30 bis 50 cm",
    sowing: "Direktsaat nach dem letzten Frost.",
    sowingMonths: [4, 5, 6],
    harvest: "Kerne im Spaetsommer bis Herbst.",
    harvestMonths: [8, 9, 10],
    watering: "In Anwachsphase regelmaessig, spaeter maessig.",
    companionsGood: ["Mais", "Bohnen"],
    companionsBad: ["Kartoffel"],
    pests: ["Schnecken bei Jungpflanzen"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Zierpflanze", "Samen", "Bienenweide"],
  },
  {
    id: "ringelblume",
    name: "Ringelblume",
    latinName: "Calendula officinalis",
    category: "bluetenpflanzen",
    climate: "gemaessigt",
    origin: "Mittelmeerraum",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=1200&q=80",
    summary: "Robuste Bluetenpflanze, nuetzlich im Beet und als Heilpflanze.",
    growth: "Sonnig bis halbschattig.",
    soil: "Normaler Gartenboden, durchlaessig.",
    ph: "6.0 bis 7.5",
    light: "Sonnig bis halbschatten",
    hardiness: "Einjaehrig",
    nutrient: "Niedrig bis mittel",
    spacing: "20 bis 30 cm",
    sowing: "Direktsaat im Fruehjahr.",
    sowingMonths: [3, 4, 5, 6],
    harvest: "Blueten fortlaufend ernten.",
    harvestMonths: [6, 7, 8, 9, 10],
    watering: "Maessig, Trockenphasen toleriert.",
    companionsGood: ["Tomate", "Salat", "Karotte"],
    companionsBad: ["Keine stark bekannten"],
    pests: ["Wenig anfaellig"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Zierpflanze", "Tee", "Salbe"],
  },
  {
    id: "chili",
    name: "Chili",
    latinName: "Capsicum frutescens",
    category: "gemuese",
    climate: "tropisch",
    origin: "Mittelamerika",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd69?auto=format&fit=crop&w=1200&q=80",
    summary: "Scharfe Fruchtpflanze mit langer Reifezeit und hoher Waerme-Liebe.",
    growth: "Warm, sonnig, geschuetzt.",
    soil: "Locker, humos, naehrstoffreich.",
    ph: "6.0 bis 6.8",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Mittel bis hoch",
    spacing: "40 bis 50 cm",
    sowing: "Frueh vorziehen ab Januar oder Februar.",
    sowingMonths: [1, 2, 3],
    harvest: "Ab Spaetsommer, oft bis in den Herbst.",
    harvestMonths: [8, 9, 10],
    watering: "Gleichmaessig, keine Staunaesse.",
    companionsGood: ["Basilikum", "Zwiebel"],
    companionsBad: ["Fenchel"],
    pests: ["Spinnmilben", "Blattlaeuse"],
    propagation: "Samen",
    difficulty: "Mittel",
    use: ["Gewuerz", "Sauce", "Einlegen"],
  },
  {
    id: "aubergine",
    name: "Aubergine",
    latinName: "Solanum melongena",
    category: "gemuese",
    climate: "tropisch",
    origin: "Suedasien",
    image: "https://images.unsplash.com/photo-1659276430118-5fe1f4f4d76e?auto=format&fit=crop&w=1200&q=80",
    summary: "Waermeliebendes Fruchtgemuese, ideal im Gewaechshaus oder warmem Sommer.",
    growth: "Vollsonnig und sehr warm.",
    soil: "Naehrstoffreich, locker, humos.",
    ph: "6.0 bis 7.0",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Hoch",
    spacing: "50 bis 60 cm",
    sowing: "Frueh vorziehen ab Februar.",
    sowingMonths: [2, 3],
    harvest: "Reife Fruechte im Spaetsommer und Herbst.",
    harvestMonths: [8, 9, 10],
    watering: "Regelmaessig und warmes Wasser bevorzugt.",
    companionsGood: ["Basilikum", "Bohnen"],
    companionsBad: ["Kartoffel"],
    pests: ["Spinnmilben", "Grauschimmel"],
    propagation: "Samen",
    difficulty: "Anspruchsvoll",
    use: ["Ofengemuese", "Grillen", "Curry"],
  },
  {
    id: "radieschen",
    name: "Radieschen",
    latinName: "Raphanus sativus var. sativus",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittelmeerraum",
    image: "https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?auto=format&fit=crop&w=1200&q=80",
    summary: "Schnell wachsendes Wurzelgemuese mit kurzer Kulturzeit.",
    growth: "Sonnig bis halbschattig.",
    soil: "Locker, humos, gleichmaessig feucht.",
    ph: "6.0 bis 7.0",
    light: "Sonnig bis halbschatten",
    hardiness: "Leicht frosthart",
    nutrient: "Niedrig bis mittel",
    spacing: "3 bis 5 cm",
    sowing: "Direktsaat in mehreren Saetzen.",
    sowingMonths: [3, 4, 5, 6, 7, 8],
    harvest: "Bereits nach 4 bis 8 Wochen.",
    harvestMonths: [4, 5, 6, 7, 8, 9],
    watering: "Regelmaessig, sonst werden sie scharf.",
    companionsGood: ["Salat", "Karotte", "Spinat"],
    companionsBad: ["Gurken direkt daneben"],
    pests: ["Erdfluehe"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Salat", "Brotzeit"],
  },
  {
    id: "petersilie",
    name: "Petersilie",
    latinName: "Petroselinum crispum",
    category: "kraeuter",
    climate: "gemaessigt",
    origin: "Mittelmeerraum",
    image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?auto=format&fit=crop&w=1200&q=80",
    summary: "Vielseitiges Kuechenkraut fuer Beet und Topf.",
    growth: "Sonnig bis halbschattig.",
    soil: "Humos, feucht, naehrstoffreich.",
    ph: "6.0 bis 7.0",
    light: "Halbschatten bis sonnig",
    hardiness: "Zweijaehrig, leicht frosthart",
    nutrient: "Mittel",
    spacing: "15 bis 20 cm",
    sowing: "Direktsaat im Fruehjahr bis Sommer.",
    sowingMonths: [3, 4, 5, 6, 7],
    harvest: "Ab Fruehsommer fortlaufend.",
    harvestMonths: [6, 7, 8, 9, 10],
    watering: "Gleichmaessig feucht halten.",
    companionsGood: ["Tomate", "Lauch"],
    companionsBad: ["Kopfsalat"],
    pests: ["Moehrenfliege", "Pilzkrankheiten"],
    propagation: "Samen",
    difficulty: "Mittel",
    use: ["Kueche", "Suppen", "Saucen"],
  },
  {
    id: "bohne",
    name: "Buschbohne",
    latinName: "Phaseolus vulgaris",
    category: "gemuese",
    climate: "gemaessigt",
    origin: "Mittel- und Suedamerika",
    image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?auto=format&fit=crop&w=1200&q=80",
    summary: "Eiweissreiches Gemuese mit einfacher Kultur im Sommer.",
    growth: "Sonnig, warm, windgeschuetzt.",
    soil: "Locker, humos, nicht zu stickstoffreich.",
    ph: "6.0 bis 7.0",
    light: "Vollsonnig",
    hardiness: "Nicht winterhart",
    nutrient: "Mittel",
    spacing: "8 bis 12 cm",
    sowing: "Direktsaat nach den Eisheiligen.",
    sowingMonths: [5, 6, 7],
    harvest: "Ab Sommer kontinuierlich.",
    harvestMonths: [7, 8, 9],
    watering: "Waehrend Bluete und Huelsenbildung regelmaessig.",
    companionsGood: ["Mais", "Gurke", "Bohnenkraut"],
    companionsBad: ["Zwiebel", "Knoblauch"],
    pests: ["Bohnenrost", "Schnecken"],
    propagation: "Samen",
    difficulty: "Einfach",
    use: ["Kochen", "Eintopf", "Salat"],
  },
];

function titleCase(value) {
  if (!value) return "";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function monthsToText(months) {
  return months.map((month) => monthNames[month]).join(", ");
}

function createCard(plant) {
  return `
    <a class="card" href="plant.html?id=${plant.id}">
      <img src="${plant.image}" alt="${plant.name}" />
      <div class="card__content">
        <h3>${plant.name}</h3>
        <div class="meta">
          <span class="tag">${plant.latinName}</span>
          <span class="tag">${titleCase(plant.category)}</span>
          <span class="tag">${titleCase(plant.climate)}</span>
          <span class="tag">${plant.difficulty}</span>
        </div>
        <p>${plant.summary}</p>
      </div>
    </a>
  `;
}

function renderGrid() {
  const grid = document.getElementById("plantGrid");
  const resultCount = document.getElementById("resultCount");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const climateFilter = document.getElementById("climateFilter");
  const categoryFilter = document.getElementById("categoryFilter");
  const sowingMonthFilter = document.getElementById("sowingMonthFilter");

  function draw() {
    const term = searchInput.value.trim().toLowerCase();
    const climate = climateFilter.value;
    const category = categoryFilter.value;
    const month = sowingMonthFilter.value === "all" ? null : Number(sowingMonthFilter.value);

    const result = plants.filter((plant) => {
      const searchBlob = [plant.name, plant.latinName, plant.summary, plant.origin, plant.category, plant.climate, ...plant.use]
        .join(" ")
        .toLowerCase();

      const matchesTerm = searchBlob.includes(term);
      const matchesClimate = climate === "all" || plant.climate === climate;
      const matchesCategory = category === "all" || plant.category === category;
      const matchesMonth = !month || plant.sowingMonths.includes(month);

      return matchesTerm && matchesClimate && matchesCategory && matchesMonth;
    });

    if (!result.length) {
      if (resultCount) {
        resultCount.textContent = "0 Pflanzen gefunden";
      }
      grid.innerHTML = `<div class="empty">Keine Pflanze gefunden. Versuche einen anderen Suchbegriff oder Filter.</div>`;
      return;
    }

    if (resultCount) {
      resultCount.textContent = `${result.length} Pflanzen gefunden`;
    }
    grid.innerHTML = result.map(createCard).join("");
  }

  searchInput.addEventListener("input", draw);
  climateFilter.addEventListener("change", draw);
  categoryFilter.addEventListener("change", draw);
  sowingMonthFilter.addEventListener("change", draw);
  draw();
}

function renderMonthCalendar() {
  const calendar = document.getElementById("monthCalendar");
  if (!calendar) return;

  const cards = Array.from({ length: 12 }, (_, index) => {
    const month = index + 1;
    const sowingPlants = plants.filter((plant) => plant.sowingMonths.includes(month)).map((plant) => plant.name);
    const harvestPlants = plants.filter((plant) => plant.harvestMonths.includes(month)).map((plant) => plant.name);

    return `
      <article class="month-card">
        <h3>${monthNames[month]}</h3>
        <p>Aussaat</p>
        <ul>${(sowingPlants.length ? sowingPlants : ["-"]).map((item) => `<li>${item}</li>`).join("")}</ul>
        <p>Ernte</p>
        <ul>${(harvestPlants.length ? harvestPlants : ["-"]).map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>
    `;
  });

  calendar.innerHTML = cards.join("");
}

function renderDetail() {
  const container = document.getElementById("detailPage");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const plant = plants.find((entry) => entry.id === id);

  if (!plant) {
    container.innerHTML = `
      <a class="back-link" href="index.html">Zurueck zur Uebersicht</a>
      <div class="empty">Pflanze nicht gefunden.</div>
    `;
    return;
  }

  container.innerHTML = `
    <a class="back-link" href="index.html">Zurueck zur Uebersicht</a>
    <article class="detail-hero">
      <img src="${plant.image}" alt="${plant.name}" />
      <div class="detail-intro">
        <h1>${plant.name}</h1>
        <p><strong>${plant.latinName}</strong> - ${plant.summary}</p>
      </div>
    </article>

    <section class="info-grid">
      <article class="info-card"><h2>Ursprung</h2><p>${plant.origin}</p></article>
      <article class="info-card"><h2>Kategorie</h2><p>${titleCase(plant.category)}</p></article>
      <article class="info-card"><h2>Klima</h2><p>${titleCase(plant.climate)}</p></article>
      <article class="info-card"><h2>Standort und Wachstum</h2><p>${plant.growth}</p></article>
      <article class="info-card"><h2>Boden</h2><p>${plant.soil}</p></article>
      <article class="info-card"><h2>pH-Wert</h2><p>${plant.ph}</p></article>
      <article class="info-card"><h2>Lichtbedarf</h2><p>${plant.light}</p></article>
      <article class="info-card"><h2>Winterhaerte</h2><p>${plant.hardiness}</p></article>
      <article class="info-card"><h2>Naehrstoffbedarf</h2><p>${plant.nutrient}</p></article>
      <article class="info-card"><h2>Pflanzabstand</h2><p>${plant.spacing}</p></article>
      <article class="info-card"><h2>Aussaat</h2><p>${plant.sowing}</p><p>${monthsToText(plant.sowingMonths)}</p></article>
      <article class="info-card"><h2>Ernte</h2><p>${plant.harvest}</p><p>${monthsToText(plant.harvestMonths)}</p></article>
      <article class="info-card"><h2>Bewaesserung</h2><p>${plant.watering}</p></article>
      <article class="info-card"><h2>Gute Nachbarn</h2><ul>${plant.companionsGood.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      <article class="info-card"><h2>Schlechte Nachbarn</h2><ul>${plant.companionsBad.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      <article class="info-card"><h2>Krankheiten und Schaedlinge</h2><ul>${plant.pests.map((item) => `<li>${item}</li>`).join("")}</ul></article>
      <article class="info-card"><h2>Vermehrung</h2><p>${plant.propagation}</p></article>
      <article class="info-card"><h2>Schwierigkeitsgrad</h2><p>${plant.difficulty}</p></article>
      <article class="info-card"><h2>Verwendung</h2><ul>${plant.use.map((item) => `<li>${item}</li>`).join("")}</ul></article>
    </section>
  `;
}

renderGrid();
renderMonthCalendar();
renderDetail();
