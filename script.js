const countries = [
    {
        "name": "Magyarország",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/188px-Flag_of_Hungary.svg.png",
        "map": "https://upload.wikimedia.org/wikipedia/commons/1/12/Hungary_local_administration.png"
    },
    {
        "name": "Francia Ország",
        "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Population_density_in_France.png/1024px-Population_density_in_France.png"
    },
    {
        "name": "Dánia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/180px-Flag_of_Denmark.svg.png",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Denmark_adm_location_map.svg/1836px-Denmark_adm_location_map.svg.png"
    },
    {
        "name": "Görögország",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/188px-Flag_of_Greece.svg.png",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Map_Greece_expansion_1832-1947-en.svg/800px-Map_Greece_expansion_1832-1947-en.svg.png"
    },
    {
        "name": "Anglia",
        "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/188px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/MODIS_-_Great_Britain_and_Northern_Ireland_-_2012-06-04_during_heat_wave_%28cropped%29.jpg/255px-MODIS_-_Great_Britain_and_Northern_Ireland_-_2012-06-04_during_heat_wave_%28cropped%29.jpg"
    }
];

let jovalasz = Math.floor(Math.random() * countries.length); // A zászló indexe
let joValaszHelye = Math.floor(Math.random() * 4);

const mapContainer = document.getElementById("map-container");
const flagContainer = document.getElementById("flag-container");
const hejessegElem = document.querySelector(".hejesseg");

let rndMap1, rndMap2, rndMap3, rndMap4;
let uniqueValues = new Set([jovalasz]);

function getUniqueRandomValue() {
    let value;
    do {
        value = Math.floor(Math.random() * countries.length);
    } while (uniqueValues.has(value));
    uniqueValues.add(value);
    return value;
}

if (joValaszHelye === 0) {
    rndMap1 = jovalasz;
    rndMap2 = getUniqueRandomValue();
    rndMap3 = getUniqueRandomValue();
    rndMap4 = getUniqueRandomValue();
} else if (joValaszHelye === 1) {
    rndMap1 = getUniqueRandomValue();
    rndMap2 = jovalasz;
    rndMap3 = getUniqueRandomValue();
    rndMap4 = getUniqueRandomValue();
} else if (joValaszHelye === 2) {
    rndMap1 = getUniqueRandomValue();
    rndMap2 = getUniqueRandomValue();
    rndMap3 = jovalasz;
    rndMap4 = getUniqueRandomValue();
} else if (joValaszHelye === 3) {
    rndMap1 = getUniqueRandomValue();
    rndMap2 = getUniqueRandomValue();
    rndMap3 = getUniqueRandomValue();
    rndMap4 = jovalasz;
}
const mapImages = [rndMap1, rndMap2, rndMap3, rndMap4];
mapImages.forEach((index, i) => {
    const mapImg = document.createElement("img");
    mapImg.src = countries[index].map;
    mapImg.dataset.countryIndex = index; // Térképhez index hozzárendelése
    mapImg.draggable = true;
    mapImg.addEventListener("dragover", (e) => e.preventDefault()); // Engedélyezi a dobást
    mapImg.addEventListener("drop", handleDrop);
    mapContainer.appendChild(mapImg);
});

const flagImg = document.createElement("img");
flagImg.src = countries[jovalasz].flag;
flagImg.draggable = true;
flagImg.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", jovalasz);
});
flagContainer.appendChild(flagImg);

function handleDrop(event) {
    event.preventDefault();
    const draggedCountryIndex = event.dataTransfer.getData("text/plain");
    const targetCountryIndex = event.target.dataset.countryIndex;

    if (draggedCountryIndex === targetCountryIndex) {
        hejessegElem.textContent = `Helyes válasz! Ez ${countries[jovalasz].name}`;
    } else {
        hejessegElem.textContent = "Rossz válasz! Próbáld újra.";
    }
}
