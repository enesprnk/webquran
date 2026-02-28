const plants = [
  {
    id: "erdbeere",
    name: "Erdbeere",
    latinName: "Fragaria x ananassa",
    climate: "gemaessigt",
    origin: "Europa und Nordamerika (Kreuzung in Europa etabliert)",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=1200&q=80",
    summary: "Mehrjaehrige Pflanze mit suessen Fruechten und guter Eignung fuer Garten, Balkon und Hochbeet.",
    growth: "Sonnig bis halbschattig, lockerer humusreicher Boden.",
    sowing: "Vorziehen von Februar bis April oder Jungpflanzen im Fruehjahr setzen.",
    harvest: "Je nach Sorte von Mai bis Juli, bei immertragenden Sorten laenger.",
    watering: "Regelmaessig giessen, Staunaesse vermeiden.",
    use: ["Frischverzehr", "Marmelade", "Desserts"],
  },
  {
    id: "lavendel",
    name: "Lavendel",
    latinName: "Lavandula angustifolia",
    climate: "mediterran",
    origin: "Mittelmeerraum",
    image:
      "https://images.unsplash.com/photo-1593029490618-4fd6f73f3f89?auto=format&fit=crop&w=1200&q=80",
    summary: "Aromatische Duftpflanze fuer Garten und Balkon, beliebt bei Bienen und Schmetterlingen.",
    growth: "Vollsonnig, durchlaessiger eher trockener Boden.",
    sowing: "Aussaat im Fruehjahr oder Vermehrung ueber Stecklinge.",
    harvest: "Blueten je nach Region von Juni bis August.",
    watering: "Sparsam giessen, Trockenheit wird besser vertragen als zu viel Wasser.",
    use: ["Duftsaeckchen", "Tee", "Dekoration", "Insektenfreundlich"],
  },
  {
    id: "tomate",
    name: "Tomate",
    latinName: "Solanum lycopersicum",
    climate: "gemaessigt",
    origin: "Mittel- und Suedamerika",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=80",
    summary: "Waermeliebende Kulturpflanze mit vielen Sorten fuer Freiland, Gewaechshaus und Balkon.",
    growth: "Sonniger, windgeschuetzter Standort mit naehrstoffreichem Boden.",
    sowing: "Vorziehen von Maerz bis April, nach Eisheiligen auspflanzen.",
    harvest: "Meist von Juli bis Oktober, je nach Sorte.",
    watering: "Gleichmaessig an der Wurzel giessen, Blaetter trocken halten.",
    use: ["Salat", "Sauce", "Kochen", "Rohkost"],
  },
  {
    id: "basilikum",
    name: "Basilikum",
    latinName: "Ocimum basilicum",
    climate: "tropisch",
    origin: "Tropisches Asien und Afrika",
    image:
      "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?auto=format&fit=crop&w=1200&q=80",
    summary: "Wuerzkraut mit intensivem Aroma, ideal fuer Kueche, Balkon und Fensterbank.",
    growth: "Hell und warm, keine kalten Zugluftzonen.",
    sowing: "Von April bis Juli auf feuchte Erde, Lichtkeimer.",
    harvest: "Kontinuierlich von Fruehsommer bis Herbst moeglich.",
    watering: "Erde leicht feucht halten, aber nicht nass.",
    use: ["Pesto", "Salat", "Pasta", "Tee"],
  },
];

function createCard(plant) {
  return `
    <a class="card" href="plant.html?id=${plant.id}">
      <img src="${plant.image}" alt="${plant.name}" />
      <div class="card__content">
        <h3>${plant.name}</h3>
        <div class="meta">
          <span class="tag">${plant.latinName}</span>
          <span class="tag">${plant.climate}</span>
        </div>
        <p>${plant.summary}</p>
      </div>
    </a>
  `;
}

function renderGrid() {
  const grid = document.getElementById("plantGrid");
  if (!grid) return;

  const searchInput = document.getElementById("searchInput");
  const climateFilter = document.getElementById("climateFilter");

  function draw() {
    const term = searchInput.value.trim().toLowerCase();
    const climate = climateFilter.value;

    const result = plants.filter((plant) => {
      const matchesTerm =
        plant.name.toLowerCase().includes(term) ||
        plant.latinName.toLowerCase().includes(term) ||
        plant.summary.toLowerCase().includes(term);

      const matchesClimate = climate === "all" || plant.climate === climate;
      return matchesTerm && matchesClimate;
    });

    if (!result.length) {
      grid.innerHTML = `<div class="empty">Keine Pflanze gefunden. Versuche einen anderen Suchbegriff oder Filter.</div>`;
      return;
    }

    grid.innerHTML = result.map(createCard).join("");
  }

  searchInput.addEventListener("input", draw);
  climateFilter.addEventListener("change", draw);
  draw();
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
      <article class="info-card"><h2>Standort und Wachstum</h2><p>${plant.growth}</p></article>
      <article class="info-card"><h2>Aussaat</h2><p>${plant.sowing}</p></article>
      <article class="info-card"><h2>Ernte</h2><p>${plant.harvest}</p></article>
      <article class="info-card"><h2>Bewaesserung</h2><p>${plant.watering}</p></article>
      <article class="info-card"><h2>Verwendung</h2><ul>${plant.use.map((item) => `<li>${item}</li>`).join("")}</ul></article>
    </section>
  `;
}

renderGrid();
renderDetail();
