const countries=[
    // {
    //     "name":"",
    //     "flag":"", //kép zászlóról
    //     "map":""  //kép a térképről
    // },
    {
        "name":"Magyarország",
        "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/188px-Flag_of_Hungary.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/1/12/Hungary_local_administration.png"

    },
    {
        "name":"Francia Ország",
        "flag":"https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/188px-Flag_of_France.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Population_density_in_France.png/1024px-Population_density_in_France.png"
    },
    {
        "name":"Dánia",
        "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/180px-Flag_of_Denmark.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Denmark_adm_location_map.svg/1836px-Denmark_adm_location_map.svg.png"
    },
    {
        "name":"Görögország",
        "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/188px-Flag_of_Greece.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Map_Greece_expansion_1832-1947-en.svg/800px-Map_Greece_expansion_1832-1947-en.svg.png"
    },
    {
        "name":"Anglia",
        "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/188px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/MODIS_-_Great_Britain_and_Northern_Ireland_-_2012-06-04_during_heat_wave_%28cropped%29.jpg/255px-MODIS_-_Great_Britain_and_Northern_Ireland_-_2012-06-04_during_heat_wave_%28cropped%29.jpg"
    }
]
let jovalasz=Math.floor(Math.random() * countries.length); //A zászló id-ja amir rá kell húzni az országra
let joValaszHelye=Math.floor(Math.random()*4);
console.log("Jó válasz értéke "+ jovalasz+"|| És helye " + joValaszHelye);



const mapContainer = document.getElementById("map-container");

let rndMap1, rndMap2, rndMap3, rndMap4;
let uniqueValues = new Set();
uniqueValues.add(joValaszHelye)

function getUniqueRandomValue() {
    let value;
    do {
        value = Math.floor(Math.random() * countries.length);
    } while (uniqueValues.has(value)); // Ha a szám már létezik, új számot generálunk
    uniqueValues.add(value); // Hozzáadjuk az új értéket a Set-hez
    return value;
}

if (joValaszHelye == 0) {
    rndMap1 = jovalasz;
} else {
    rndMap1 = getUniqueRandomValue();
}

if (joValaszHelye == 1) {
    rndMap2 = jovalasz;
} else {
    rndMap2 = getUniqueRandomValue();
}

if (joValaszHelye == 2) {
    rndMap3 = jovalasz;
} else {
    rndMap3 = getUniqueRandomValue();
}

if (joValaszHelye == 3) {
    rndMap4 = jovalasz;
} else {
    rndMap4 = getUniqueRandomValue();
}

console.log(rndMap1, rndMap2, rndMap3, rndMap4);




for (let index = 0; index < 4; index++) {

    
}


console.log(rndMap1);
console.log(rndMap2);
console.log(rndMap3);
console.log(rndMap4);

const mapImg1 = document.createElement("img");
mapImg1.src = countries[rndMap1].map;
mapContainer.appendChild(mapImg1);
const mapImg2 = document.createElement("img");
mapImg2.src = countries[rndMap2].map;
mapContainer.appendChild(mapImg2);
const mapImg3 = document.createElement("img");
mapImg3.src = countries[rndMap3].map;
mapContainer.appendChild(mapImg3);
const mapImg4 = document.createElement("img");
mapImg4.src = countries[rndMap4].map;
mapContainer.appendChild(mapImg4);
for (let i = 0; i < 4; i++) {    

}

// Az első ország zászlójának elhelyezése a flag-container-ben
const flagContainer = document.getElementById("flag-container");
const flagImg = document.createElement("img");
flagImg.src = countries[jovalasz].flag;
//flagImg.alt = `Zászló: ${countries[0].name}`;
flagContainer.appendChild(flagImg);