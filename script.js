const rainfallDataset = {
  years: ["2014", "2016", "2018", "2020", "2022", "2024"],
  biomes: [
    {
      id: "desert",
      name: "Desert",
      type: "Biome",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Very low rainfall with short and irregular wet pulses.",
      description:
        "Deserts show extremely low annual rainfall and high rainfall variability. Small shifts in seasonal storms can strongly affect runoff, soil moisture, and drought stress.",
      facts: {
        "Average rainfall": "110 mm/year",
        "Wettest season": "Winter",
        "Variability index": "0.62",
        "Climate note": "Highly erratic precipitation"
      },
      monthlyRainfall: [8, 10, 12, 8, 6, 4, 5, 6, 8, 12, 15, 16]
    },
    {
      id: "forest",
      name: "Forest",
      type: "Biome",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Reliable rainfall with distinct wet and recovery periods.",
      description:
        "Forest systems benefit from sustained annual rainfall, but variability still matters for canopy productivity, evapotranspiration, and flood regulation.",
      facts: {
        "Average rainfall": "1,420 mm/year",
        "Wettest season": "Spring",
        "Variability index": "0.24",
        "Climate note": "Moist temperate regime"
      },
      monthlyRainfall: [95, 88, 110, 132, 145, 138, 126, 118, 112, 124, 116, 116]
    },
    {
      id: "tundra",
      name: "Tundra",
      type: "Biome",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Cold-climate rainfall remains low but seasonally concentrated.",
      description:
        "Tundra climates receive limited rainfall, yet small seasonal changes influence snowmelt timing, permafrost dynamics, and surface saturation.",
      facts: {
        "Average rainfall": "260 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.35",
        "Climate note": "Short wet growing season"
      },
      monthlyRainfall: [12, 12, 15, 18, 20, 28, 36, 40, 30, 21, 15, 13]
    },
    {
      id: "grassland",
      name: "Grassland",
      type: "Biome",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Moderate rainfall with strong seasonal dependence.",
      description:
        "Grasslands often show alternating wet and dry phases. Rainfall variability shapes forage productivity, soil recharge, and fire risk.",
      facts: {
        "Average rainfall": "640 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.31",
        "Climate note": "Sensitive to interannual swings"
      },
      monthlyRainfall: [24, 28, 36, 42, 55, 72, 98, 96, 70, 54, 38, 27]
    },
    {
      id: "tropical",
      name: "Tropical",
      type: "Biome",
      image:
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Very high rainfall with dominant monsoon or equatorial wet seasons.",
      description:
        "Tropical biomes are rainfall-rich but not uniform. Seasonal concentration, monsoon intensity, and storm clustering drive significant variability in flood and ecosystem response.",
      facts: {
        "Average rainfall": "3,150 mm/year",
        "Wettest season": "Monsoon",
        "Variability index": "0.28",
        "Climate note": "Heavy convective rainfall"
      },
      monthlyRainfall: [180, 160, 210, 250, 310, 390, 460, 440, 350, 240, 105, 55]
    }
  ],
  continents: [
    {
      id: "asia",
      name: "Asia",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Monsoonal variability with strong regional contrasts.",
      description:
        "Asian rainfall ranges from arid interiors to monsoon-dominated coastlines. Interannual shifts in circulation patterns strongly influence agriculture, water storage, and flood risk.",
      facts: {
        "Average rainfall": "1,180 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.38",
        "Climate note": "Monsoon-driven rainfall gradients"
      },
      monthlyRainfall: [42, 38, 46, 58, 76, 118, 164, 172, 136, 94, 55, 46]
    },
    {
      id: "africa",
      name: "Africa",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Strong north-south rainfall contrast from desert to equatorial belts.",
      description:
        "African rainfall is shaped by tropical convergence, regional highlands, and oceanic influences. Variability influences drought, food security, and ecosystem resilience.",
      facts: {
        "Average rainfall": "860 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.41",
        "Climate note": "Drought-sensitive climate transitions"
      },
      monthlyRainfall: [28, 32, 40, 56, 78, 96, 110, 102, 88, 64, 42, 34]
    },
    {
      id: "europe",
      name: "Europe",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Moderate rainfall with seasonal Atlantic influence.",
      description:
        "European rainfall is comparatively moderate but spatially diverse, with maritime west coasts and drier interiors responding differently to changing storm tracks.",
      facts: {
        "Average rainfall": "720 mm/year",
        "Wettest season": "Autumn",
        "Variability index": "0.22",
        "Climate note": "Maritime and continental mix"
      },
      monthlyRainfall: [52, 48, 54, 58, 63, 72, 68, 70, 74, 78, 76, 66]
    },
    {
      id: "north-america",
      name: "North America",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Wide variability from arid southwest to humid east.",
      description:
        "Rainfall patterns across North America reflect orography, tropical storm influence, and continentality. Variability is especially pronounced in drought-prone western regions.",
      facts: {
        "Average rainfall": "790 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.33",
        "Climate note": "Storm-track and tropical cyclone effects"
      },
      monthlyRainfall: [44, 48, 52, 66, 78, 92, 104, 98, 86, 72, 58, 50]
    },
    {
      id: "south-america",
      name: "South America",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Heavy tropical rainfall with strong basin-seasonality links.",
      description:
        "South American rainfall is dominated by Amazonian moisture transport, Atlantic influences, and Andean circulation barriers that shape sharp regional rainfall differences.",
      facts: {
        "Average rainfall": "1,480 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.29",
        "Climate note": "Amazon basin moisture recycling"
      },
      monthlyRainfall: [96, 92, 102, 118, 128, 122, 116, 108, 104, 112, 118, 124]
    },
    {
      id: "australia",
      name: "Australia",
      type: "Continent",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80",
      rainfallProfile: "Highly variable rainfall with strong ENSO sensitivity.",
      description:
        "Australian rainfall is marked by high variability, with tropical north, dry interior regions, and temperate fringes responding differently to ocean-atmosphere oscillations.",
      facts: {
        "Average rainfall": "530 mm/year",
        "Wettest season": "Summer",
        "Variability index": "0.46",
        "Climate note": "ENSO-linked dry and wet cycles"
      },
      monthlyRainfall: [40, 48, 46, 38, 34, 28, 26, 24, 28, 32, 40, 52]
    }
  ],
  countries: [
    {
      name: "India",
      continent: "Asia",
      averageRainfall: 1083,
      seasonalPattern: "Monsoonal rainfall with a strong summer peak.",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [15, 18, 25, 40, 75, 180, 290, 275, 190, 75, 28, 12]
    },
    {
      name: "China",
      continent: "Asia",
      averageRainfall: 645,
      seasonalPattern: "Eastern monsoon influence with wetter summers than winters.",
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [12, 18, 28, 42, 63, 98, 148, 136, 92, 54, 30, 18]
    },
    {
      name: "Japan",
      continent: "Asia",
      averageRainfall: 1668,
      seasonalPattern: "Humid climate with rainy season and typhoon-enhanced late summer rainfall.",
      image:
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [52, 60, 102, 115, 128, 165, 156, 168, 210, 165, 92, 74]
    },
    {
      name: "Kenya",
      continent: "Africa",
      averageRainfall: 630,
      seasonalPattern: "Bimodal rainfall with long rains and short rains.",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [25, 30, 46, 82, 118, 52, 28, 24, 32, 66, 78, 49]
    },
    {
      name: "Nigeria",
      continent: "Africa",
      averageRainfall: 1150,
      seasonalPattern: "Strong wet season from late spring into autumn.",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [10, 16, 36, 78, 118, 162, 198, 210, 184, 124, 56, 18]
    },
    {
      name: "South Africa",
      continent: "Africa",
      averageRainfall: 464,
      seasonalPattern: "Regional contrast with summer rainfall interior and Mediterranean southwest.",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [46, 44, 38, 26, 20, 16, 18, 20, 26, 40, 52, 58]
    },
    {
      name: "Germany",
      continent: "Europe",
      averageRainfall: 700,
      seasonalPattern: "Moderate year-round rainfall with slight summer enhancement.",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [52, 42, 48, 50, 62, 72, 74, 68, 60, 56, 58, 58]
    },
    {
      name: "United Kingdom",
      continent: "Europe",
      averageRainfall: 1220,
      seasonalPattern: "Frequent frontal rainfall distributed through the year.",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [92, 76, 82, 72, 74, 82, 88, 92, 98, 112, 116, 116]
    },
    {
      name: "Brazil",
      continent: "South America",
      averageRainfall: 1761,
      seasonalPattern: "High tropical rainfall with strong wet-season concentration.",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [168, 156, 172, 148, 120, 82, 64, 58, 86, 114, 142, 164]
    },
    {
      name: "Peru",
      continent: "South America",
      averageRainfall: 1738,
      seasonalPattern: "Andean and Amazonian rainfall contrasts create strong seasonal peaks.",
      image:
        "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [124, 118, 106, 72, 42, 20, 16, 18, 24, 54, 92, 126]
    },
    {
      name: "United States",
      continent: "North America",
      averageRainfall: 715,
      seasonalPattern: "Broad regional diversity from dry southwest to humid southeast.",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [52, 48, 60, 72, 84, 92, 102, 96, 88, 78, 62, 56]
    },
    {
      name: "Australia",
      continent: "Australia",
      averageRainfall: 534,
      seasonalPattern: "Highly variable rainfall with tropical wet summers and dry interior zones.",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=1200&q=80",
      monthlyRainfall: [42, 50, 48, 36, 30, 24, 22, 20, 24, 28, 34, 46]
    }
  ]
};

const appState = {
  selectedCategoryId: "tropical",
  selectedCategoryType: "Biome",
  selectedCountry: "India",
  filteredCountries: [...rainfallDataset.countries],
  charts: {}
};

const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const seasonLabels = ["Winter", "Spring", "Summer", "Autumn"];

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initTheme();
  initScrollReveal();
  initScrollTop();
  initRainTrigger();
  populateHeroStats();
  renderCategoryButtons();
  renderCategoryDetail(appState.selectedCategoryId, appState.selectedCategoryType);
  populateCountryControls();
  renderCountryList(rainfallDataset.countries);
  renderCountryDetail(appState.selectedCountry);
  initAnalysisCharts();
  bindCountryControls();
  bindWeatherControls();
  updateAnalysisCards();
  fetchWeatherByCity("New Delhi");
});

function initLoader() {
  window.addEventListener("load", () => {
    const loader = document.getElementById("pageLoader");
    setTimeout(() => loader.classList.add("is-hidden"), 600);
  });
}

function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("rainfall-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("rainfall-theme", document.body.classList.contains("light-mode") ? "light" : "dark");
    refreshCharts();
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  items.forEach((item) => observer.observe(item));
}

function initScrollTop() {
  const button = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    button.classList.toggle("is-visible", window.scrollY > 300);
  });

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initRainTrigger() {
  const trigger = document.getElementById("rainTriggerBtn");
  const overlay = document.getElementById("rainOverlay");
  let rainTimer = null;
  let spawnTimer = null;

  trigger.addEventListener("click", () => {
    if (spawnTimer) {
      clearInterval(spawnTimer);
    }
    if (rainTimer) {
      clearTimeout(rainTimer);
    }

    trigger.classList.add("is-active");
    overlay.innerHTML = "";

    spawnTimer = setInterval(() => {
      for (let index = 0; index < 12; index += 1) {
        createRainDrop(overlay);
      }
    }, 140);

    rainTimer = setTimeout(() => {
      clearInterval(spawnTimer);
      spawnTimer = null;
      trigger.classList.remove("is-active");
      setTimeout(() => {
        overlay.innerHTML = "";
      }, 1200);
    }, 5000);
  });
}

function createRainDrop(container) {
  const drop = document.createElement("span");
  drop.className = "rain-drop";
  drop.style.left = `${Math.random() * 100}%`;
  drop.style.height = `${50 + Math.random() * 55}px`;
  drop.style.opacity = `${0.35 + Math.random() * 0.5}`;
  drop.style.animationDuration = `${0.9 + Math.random() * 0.8}s`;
  drop.style.animationDelay = `${Math.random() * 0.15}s`;
  container.appendChild(drop);

  drop.addEventListener("animationend", () => {
    drop.remove();
  });
}

function populateHeroStats() {
  const cvValues = rainfallDataset.countries.map((country) => getCoefficientOfVariation(country.monthlyRainfall));
  const avgCv = average(cvValues);

  document.getElementById("heroCountries").textContent = String(rainfallDataset.countries.length);
  document.getElementById("heroBiomes").textContent = String(rainfallDataset.biomes.length);
  document.getElementById("heroCv").textContent = avgCv.toFixed(2);
}

function renderCategoryButtons() {
  const biomeContainer = document.getElementById("biomeButtons");
  const continentContainer = document.getElementById("continentButtons");

  biomeContainer.innerHTML = rainfallDataset.biomes
    .map((biome) => createCategoryButtonMarkup(biome, "Biome"))
    .join("");

  continentContainer.innerHTML = rainfallDataset.continents
    .map((continent) => createCategoryButtonMarkup(continent, "Continent"))
    .join("");

  document.querySelectorAll(".pill-button").forEach((button) => {
    button.addEventListener("click", () => {
      renderCategoryDetail(button.dataset.id, button.dataset.type);
    });
  });
}

function createCategoryButtonMarkup(item, type) {
  const isActive = item.id === appState.selectedCategoryId && type === appState.selectedCategoryType;
  return `
    <button
      class="pill-button ${isActive ? "is-active" : ""}"
      type="button"
      data-id="${item.id}"
      data-type="${type}"
    >${item.name}</button>
  `;
}

function renderCategoryDetail(id, type) {
  appState.selectedCategoryId = id;
  appState.selectedCategoryType = type;

  const source = type === "Biome" ? rainfallDataset.biomes : rainfallDataset.continents;
  const item = source.find((entry) => entry.id === id);
  if (!item) return;

  document.querySelectorAll(".pill-button").forEach((button) => {
    const isActive = button.dataset.id === id && button.dataset.type === type;
    button.classList.toggle("is-active", isActive);
  });

  document.getElementById("categoryType").textContent = type;
  document.getElementById("categoryHighlight").textContent = item.rainfallProfile;
  document.getElementById("categoryTitle").textContent = item.name;
  document.getElementById("categoryDescription").textContent = item.description;
  document.getElementById("categoryImage").src = item.image;
  document.getElementById("categoryImage").alt = `${item.name} rainfall climate visual`;
  document.getElementById("categoryFacts").innerHTML = Object.entries(item.facts)
    .map(
      ([label, value]) => `
        <article>
          <span>${label}</span>
          <strong>${value}</strong>
        </article>
      `
    )
    .join("");

  renderCategoryChart(item);
}

function populateCountryControls() {
  const countrySelect = document.getElementById("countrySelect");
  const sorted = [...rainfallDataset.countries].sort((a, b) => a.name.localeCompare(b.name));

  countrySelect.innerHTML = sorted
    .map((country) => `<option value="${country.name}">${country.name}</option>`)
    .join("");

  countrySelect.value = appState.selectedCountry;
}

function bindCountryControls() {
  const searchInput = document.getElementById("countrySearch");
  const countrySelect = document.getElementById("countrySelect");

  searchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = rainfallDataset.countries.filter((country) =>
      country.name.toLowerCase().includes(query) || country.continent.toLowerCase().includes(query)
    );

    renderCountryList(filtered);

    if (filtered.length > 0) {
      renderCountryDetail(filtered[0].name);
      countrySelect.value = filtered[0].name;
    }
  });

  countrySelect.addEventListener("change", (event) => {
    renderCountryDetail(event.target.value);
    highlightCountryCard(event.target.value);
  });
}

function renderCountryList(countries) {
  const countryList = document.getElementById("countryList");
  const countryCount = document.getElementById("countryCount");

  appState.filteredCountries = countries;
  countryCount.textContent = `${countries.length} result${countries.length === 1 ? "" : "s"}`;

  if (countries.length === 0) {
    countryList.innerHTML = `<div class="country-card"><strong>No countries found</strong><div class="country-card__meta">Try another search term.</div></div>`;
    return;
  }

  countryList.innerHTML = countries
    .map((country) => {
      const cv = getCoefficientOfVariation(country.monthlyRainfall).toFixed(2);
      return `
        <article class="country-card ${country.name === appState.selectedCountry ? "is-active" : ""}" data-country="${country.name}">
          <div class="country-card__top">
            <strong>${country.name}</strong>
            <span>${country.averageRainfall} mm</span>
          </div>
          <div class="country-card__meta">
            <span>${country.continent}</span>
            <span>CV ${cv}</span>
          </div>
        </article>
      `;
    })
    .join("");

  countryList.querySelectorAll(".country-card").forEach((card) => {
    card.addEventListener("click", () => {
      const { country } = card.dataset;
      appState.selectedCountry = country;
      document.getElementById("countrySelect").value = country;
      renderCountryDetail(country);
      highlightCountryCard(country);
    });
  });
}

function highlightCountryCard(countryName) {
  document.querySelectorAll(".country-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.country === countryName);
  });
}

function renderCountryDetail(countryName) {
  const country = rainfallDataset.countries.find((entry) => entry.name === countryName);
  if (!country) return;

  appState.selectedCountry = country.name;
  document.getElementById("countryTitle").textContent = country.name;
  document.getElementById("countryPattern").textContent = country.seasonalPattern;
  document.getElementById("countryBadge").textContent = country.continent;
  document.getElementById("countryRainfall").textContent = `${country.averageRainfall.toLocaleString()} mm`;
  document.getElementById("countrySeason").textContent = getDominantSeason(country.monthlyRainfall);
  document.getElementById("countryCv").textContent = getCoefficientOfVariation(country.monthlyRainfall).toFixed(2);
  document.getElementById("countryImage").src = country.image;
  document.getElementById("countryImage").alt = `${country.name} rainfall landscape`;

  renderCountryChart(country);
  updateAnalysisCharts(country);
  updateAnalysisCards(country);
  highlightCountryCard(country.name);
}

function initAnalysisCharts() {
  const country = rainfallDataset.countries.find((entry) => entry.name === appState.selectedCountry);
  updateAnalysisCharts(country);
}

function updateAnalysisCharts(country = rainfallDataset.countries[0]) {
  const yearlySeries = buildYearlySeries(country.averageRainfall);
  const monthlySeries = country.monthlyRainfall;
  const seasonalSeries = calculateSeasonTotals(monthlySeries);
  const variabilitySeries = rainfallDataset.countries.map((item) => getCoefficientOfVariation(item.monthlyRainfall));
  const variabilityLabels = rainfallDataset.countries.map((item) => item.name);

  renderOrUpdateChart("yearlyChart", {
    type: "line",
    data: {
      labels: rainfallDataset.years,
      datasets: [
        {
          label: `${country.name} yearly rainfall`,
          data: yearlySeries,
          borderColor: "#49dcb1",
          backgroundColor: "rgba(73, 220, 177, 0.18)",
          fill: true,
          tension: 0.35,
          pointRadius: 4
        }
      ]
    },
    options: createChartOptions("mm")
  });

  renderOrUpdateChart("monthlyChart", {
    type: "bar",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: `${country.name} monthly rainfall`,
          data: monthlySeries,
          borderRadius: 10,
          backgroundColor: monthLabels.map((_, index) =>
            index >= 5 && index <= 8 ? "rgba(24, 167, 217, 0.85)" : "rgba(73, 220, 177, 0.62)"
          )
        }
      ]
    },
    options: createChartOptions("mm")
  });

  renderOrUpdateChart("seasonalChart", {
    type: "radar",
    data: {
      labels: seasonLabels,
      datasets: [
        {
          label: `${country.name} seasonal rainfall`,
          data: seasonalSeries,
          borderColor: "#18a7d9",
          backgroundColor: "rgba(24, 167, 217, 0.2)",
          pointBackgroundColor: "#18a7d9",
          pointRadius: 4
        }
      ]
    },
    options: createChartOptions("mm", true)
  });

  renderOrUpdateChart("variabilityChart", {
    type: "bar",
    data: {
      labels: variabilityLabels,
      datasets: [
        {
          label: "Coefficient of variation",
          data: variabilitySeries,
          borderRadius: 10,
          backgroundColor: variabilitySeries.map((value) =>
            value > 0.5 ? "rgba(242, 193, 78, 0.85)" : "rgba(73, 220, 177, 0.72)"
          )
        }
      ]
    },
    options: createChartOptions("cv")
  });
}

function renderCategoryChart(item) {
  renderOrUpdateChart("categoryChart", {
    type: "line",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: `${item.name} rainfall`,
          data: item.monthlyRainfall,
          borderColor: "#49dcb1",
          backgroundColor: "rgba(73, 220, 177, 0.18)",
          fill: true,
          tension: 0.35,
          pointRadius: 3
        }
      ]
    },
    options: createChartOptions("mm")
  });
}

function renderCountryChart(country) {
  renderOrUpdateChart("countryChart", {
    type: "line",
    data: {
      labels: monthLabels,
      datasets: [
        {
          label: `${country.name} rainfall trend`,
          data: country.monthlyRainfall,
          borderColor: "#18a7d9",
          backgroundColor: "rgba(24, 167, 217, 0.18)",
          fill: true,
          tension: 0.3,
          pointRadius: 4
        }
      ]
    },
    options: createChartOptions("mm")
  });
}

function renderOrUpdateChart(canvasId, config) {
  if (appState.charts[canvasId]) {
    appState.charts[canvasId].destroy();
  }

  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  appState.charts[canvasId] = new Chart(canvas, config);
}

function createChartOptions(unit, isRadar = false) {
  const lightMode = document.body.classList.contains("light-mode");
  const tickColor = lightMode ? "#4f657d" : "#a9bdd2";
  const gridColor = lightMode ? "rgba(16, 36, 59, 0.08)" : "rgba(255, 255, 255, 0.08)";
  const showUnit = unit !== "cv";

  return {
    maintainAspectRatio: false,
    animation: {
      duration: 950,
      easing: "easeOutQuart"
    },
    plugins: {
      legend: {
        labels: {
          color: tickColor
        }
      },
      tooltip: {
        callbacks: {
          label(context) {
            const value = Number(context.raw).toFixed(unit === "cv" ? 2 : 0);
            return `${context.dataset.label}: ${value}${showUnit ? ` ${unit}` : ""}`;
          }
        }
      }
    },
    scales: isRadar
      ? {
          r: {
            angleLines: { color: gridColor },
            grid: { color: gridColor },
            pointLabels: { color: tickColor },
            ticks: { color: tickColor, backdropColor: "transparent" }
          }
        }
      : {
          x: {
            ticks: { color: tickColor },
            grid: { display: false }
          },
          y: {
            ticks: { color: tickColor },
            grid: { color: gridColor }
          }
        }
  };
}

function refreshCharts() {
  renderCategoryDetail(appState.selectedCategoryId, appState.selectedCategoryType);
  renderCountryDetail(appState.selectedCountry);
}

function updateAnalysisCards(country = rainfallDataset.countries.find((entry) => entry.name === appState.selectedCountry)) {
  const avgAnnual = average(rainfallDataset.countries.map((entry) => entry.averageRainfall));
  const globalCv = average(rainfallDataset.countries.map((entry) => getCoefficientOfVariation(entry.monthlyRainfall)));
  const dominantSeason = getDominantSeason(country.monthlyRainfall);

  document.getElementById("avgAnnualRainfall").textContent = `${Math.round(avgAnnual).toLocaleString()} mm`;
  document.getElementById("dominantSeason").textContent = dominantSeason;
  document.getElementById("globalCv").textContent = globalCv.toFixed(2);
  document.getElementById("heroWetSeason").textContent = dominantSeason;
  document.getElementById("heroWettest").textContent = `${Math.max(...rainfallDataset.biomes.map((biome) => sum(biome.monthlyRainfall))).toLocaleString()} mm`;
  document.getElementById("heroDriest").textContent = `${Math.min(...rainfallDataset.biomes.map((biome) => sum(biome.monthlyRainfall))).toLocaleString()} mm`;
}

function bindWeatherControls() {
  const weatherSearchInput = document.getElementById("weatherSearch");
  document.getElementById("weatherSearchBtn").addEventListener("click", () => {
    fetchWeatherByCity(weatherSearchInput.value.trim() || "New Delhi");
  });

  weatherSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      fetchWeatherByCity(weatherSearchInput.value.trim() || "New Delhi");
    }
  });

  document.getElementById("geoWeatherBtn").addEventListener("click", () => {
    if (!navigator.geolocation) {
      showWeatherError("Geolocation is not supported in this browser.");
      return;
    }

    setWeatherLoading(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          await fetchWeatherByCoordinates(coords.latitude, coords.longitude, "Your location");
        } catch (error) {
          showWeatherError(error.message);
        } finally {
          setWeatherLoading(false);
        }
      },
      () => {
        setWeatherLoading(false);
        showWeatherError("Location access was denied. Search a city instead.");
      }
    );
  });
}

async function fetchWeatherByCity(cityName) {
  if (!cityName) {
    showWeatherError("Please enter a city name.");
    return;
  }

  setWeatherLoading(true);
  clearWeatherError();

  try {
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1&language=en&format=json`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found. Try a more specific place name.");
    }

    const location = geoData.results[0];
    const label = [location.name, location.country].filter(Boolean).join(", ");
    await fetchWeatherByCoordinates(location.latitude, location.longitude, label);
  } catch (error) {
    showWeatherError(error.message);
  } finally {
    setWeatherLoading(false);
  }
}

async function fetchWeatherByCoordinates(latitude, longitude, locationLabel) {
  clearWeatherError();

  const forecastUrl =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
    "&current=temperature_2m,relative_humidity_2m,cloud_cover,precipitation,weather_code" +
    "&hourly=precipitation_probability" +
    "&forecast_days=1&timezone=auto";

  const response = await fetch(forecastUrl);
  if (!response.ok) {
    throw new Error("Unable to fetch live weather right now.");
  }

  const data = await response.json();
  const current = data.current;
  const rainProbability = findClosestHourlyRainProbability(data);
  const predictor = estimateRainChance(current.relative_humidity_2m, current.cloud_cover, rainProbability);

  document.getElementById("weatherLocation").textContent = locationLabel;
  document.getElementById("weatherCondition").textContent = describeWeatherCode(current.weather_code);
  document.getElementById("weatherStatus").textContent = current.precipitation > 0 ? "Raining" : "Live";
  document.getElementById("weatherTemp").textContent = `${Math.round(current.temperature_2m)} C`;
  document.getElementById("weatherHumidity").textContent = `${Math.round(current.relative_humidity_2m)}%`;
  document.getElementById("weatherClouds").textContent = `${Math.round(current.cloud_cover)}%`;
  document.getElementById("weatherRainProbability").textContent = `${Math.round(rainProbability)}%`;
  document.getElementById("predictorScore").textContent = `${predictor.score}%`;
  document.getElementById("predictorFill").style.width = `${predictor.score}%`;
  document.getElementById("predictorMessage").textContent = predictor.message;
}

function setWeatherLoading(isLoading) {
  document.getElementById("weatherLoading").hidden = !isLoading;
}

function showWeatherError(message) {
  const errorNode = document.getElementById("weatherError");
  errorNode.hidden = false;
  errorNode.textContent = message;
}

function clearWeatherError() {
  const errorNode = document.getElementById("weatherError");
  errorNode.hidden = true;
  errorNode.textContent = "";
}

function findClosestHourlyRainProbability(data) {
  const currentTime = data.current.time;
  const currentIndex = data.hourly.time.findIndex((time) => time === currentTime);
  if (currentIndex >= 0) {
    return data.hourly.precipitation_probability[currentIndex] ?? 0;
  }
  return data.hourly.precipitation_probability[0] ?? 0;
}

function estimateRainChance(humidity, cloudCover, precipitationProbability) {
  const score = Math.min(
    100,
    Math.round(humidity * 0.45 + cloudCover * 0.35 + precipitationProbability * 0.2)
  );

  let message = "Low short-term rainfall likelihood.";
  if (score >= 75) {
    message = "High confidence for rainfall-friendly atmospheric conditions.";
  } else if (score >= 50) {
    message = "Moderate rainfall chance driven by moisture and cloud coverage.";
  } else if (score >= 30) {
    message = "Some rainfall potential exists, but conditions remain mixed.";
  }

  return { score, message };
}

function describeWeatherCode(code) {
  const weatherCodes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    71: "Slight snowfall",
    80: "Rain showers",
    95: "Thunderstorm"
  };

  return weatherCodes[code] || "Variable weather conditions";
}

function buildYearlySeries(baseValue) {
  return rainfallDataset.years.map((_, index) => Math.round(baseValue * (0.88 + index * 0.035)));
}

function calculateSeasonTotals(monthlyRainfall) {
  return [
    monthlyRainfall[11] + monthlyRainfall[0] + monthlyRainfall[1],
    monthlyRainfall[2] + monthlyRainfall[3] + monthlyRainfall[4],
    monthlyRainfall[5] + monthlyRainfall[6] + monthlyRainfall[7],
    monthlyRainfall[8] + monthlyRainfall[9] + monthlyRainfall[10]
  ];
}

function getDominantSeason(monthlyRainfall) {
  const totals = calculateSeasonTotals(monthlyRainfall);
  const maxValue = Math.max(...totals);
  return seasonLabels[totals.indexOf(maxValue)];
}

function getCoefficientOfVariation(values) {
  const mean = average(values);
  const variance = average(values.map((value) => (value - mean) ** 2));
  const standardDeviation = Math.sqrt(variance);
  return standardDeviation / mean;
}

function average(values) {
  return sum(values) / values.length;
}

function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
