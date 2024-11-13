let tada=document.getElementById("tada")
let err=document.getElementById("err")
tada.volume=0.2
err.volume=0.2

let cheer=document.getElementById("cheer")
cheer.volume=0.2

let tahiti=document.getElementById("tahiti")
cheer.volume=0.4

let joPontok=0
let rosszPontok=0
let dutchPontok=0

let valaszlohat=true


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
    },
    {
        "name":"Tahiti",
        "flag":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Tahiti.svg/375px-Flag_of_Tahiti.svg.png",
        "map":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Districts_de_Tahiti.png/375px-Districts_de_Tahiti.png"
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
        if (valaszlohat==true) {
            valaszlohat=false
            hejessegElem.textContent = `Helyes válasz! Ez ${countries[jovalasz].name}`;
            joPontok++
            document.getElementById("joPontok").textContent=`Jó pontok=${joPontok}`
            hejessegElem.style.color="green";
            tada.play();
            cheer.play();
            if (countries[jovalasz].name=="Tahiti") {
                tahiti.play()
                document.body.style.backgroundImage = "url('./dutch.jpg')";
                //document.body.style.backgroundSize = "cover";  // A kép kitöltéséhez
                //document.body.style.backgroundRepeat = "no-repeat";  // Nem ismétlődik
                dutchPontok++
                document.getElementById("dutchPontok").textContent=`Pontok=${dutchPontok}`
                document.getElementById("face").src="face.png"
            }
            uniqueValues.clear();
    
            setTimeout(() => {
            //    location.reload();
                ResetTable()
                document.body.style.backgroundImage="none"
                
            }, 3000);
        }



    } else {
        if (valaszlohat==true) {
            err.play();
            hejessegElem.textContent = "Rossz válasz! Próbáld újra.";
            hejessegElem.style.color="red";
            rosszPontok++
            document.getElementById("rosszPontok").textContent=`Rossz pontok=${rosszPontok}`
        }


    }
}







function ResetTable() {
    valaszlohat=true
    // Új helyes válasz és helyes válasz helyének kiválasztása
    jovalasz = Math.floor(Math.random() * countries.length); // Új helyes válasz ország indexe
    joValaszHelye = Math.floor(Math.random() * 4); // Új helyes válasz helye
    
    // Korábbi térképek és zászló eltávolítása
    mapContainer.innerHTML = ""; 
    flagContainer.innerHTML = ""; 
    hejessegElem.textContent = ""; // Tisztítja a helyes/rossz válasz üzenetet

    // Egyedi országindexek generálása az új térképekhez
    uniqueValues.clear(); // Reseteli az egyedi értékek tárolóját
    uniqueValues.add(jovalasz); // Az új helyes válasz hozzáadása az egyedi értékekhez

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

    // Új térképek hozzáadása a mapContainer-hez
    const mapImages = [rndMap1, rndMap2, rndMap3, rndMap4];
    mapImages.forEach((index, i) => {
        const mapImg = document.createElement("img");
        mapImg.src = countries[index].map;
        mapImg.dataset.countryIndex = index; 
        mapImg.draggable = true;
        mapImg.addEventListener("dragover", (e) => e.preventDefault());
        mapImg.addEventListener("drop", handleDrop);
        mapContainer.appendChild(mapImg);
    });

    // Új zászló hozzáadása a flagContainer-hez
    const flagImg = document.createElement("img");
    flagImg.src = countries[jovalasz].flag;
    flagImg.draggable = true;
    flagImg.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", jovalasz);
    });
    flagContainer.appendChild(flagImg);
}
