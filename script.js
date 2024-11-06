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
    }
]

// A drag esemény kezelése
document.getElementById("draggable").addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", event.target.id);
});

// A drop zóna felett tartás engedélyezése
document.getElementById("dropzone").addEventListener("dragover", function(event) {
    event.preventDefault();
});

// Az elemek dobásának kezelése
document.getElementById("dropzone").addEventListener("drop", function(event) {
    event.preventDefault();
    // Az áthúzott elem ID-jének lekérése
    var data = event.dataTransfer.getData("text");
    var draggableElement = document.getElementById(data);
    // Az áthúzott elemet hozzáadjuk a drop zónához
    event.target.appendChild(draggableElement);
});
