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
let rndFlg=Math.floor(Math.random() * countries.length);



const mapContainer = document.getElementById("map-container");

let rndMap1=Math.floor(Math.random() * countries.length);
let rndMap2=Math.floor(Math.random() * countries.length);
let rndMap3=Math.floor(Math.random() * countries.length);
let rndMap4=Math.floor(Math.random() * countries.length);

for (let i = 1; i < 5; i++) {
    console.log(i);
    
    
}
// countries.forEach(country => {
//     const mapImg = document.createElement("img");
//     mapImg.src = country.map;
//     mapImg.alt = `Térkép: ${country.name}`;
//     mapContainer.appendChild(mapImg);
// });

// Az első ország zászlójának elhelyezése a flag-container-ben
const flagContainer = document.getElementById("flag-container");
const flagImg = document.createElement("img");
flagImg.src = countries[rndFlg].flag;
//flagImg.alt = `Zászló: ${countries[0].name}`;
flagContainer.appendChild(flagImg);