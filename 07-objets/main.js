
/* -------------------------------------------------------------------------- */
/*                                 Les objets                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------- Comment créer un objet ------------------------- */

/* -------------------------------- Méthode 1 ------------------------------- */

// var personnage1 = new Object(); 
var personnage1 = {};
personnage1.name = "Ned Stark";
personnage1.house = "Stark";
personnage1.city = "WinterFell";

// console.log(personnage1);
// affiche tout l'objet

/* -------------------------------- Méthode 2 ------------------------------- */
/* ----------------------------- la plus commune ---------------------------- */

var personnage2 = {
    name: "Joffrey Baratheon",
    house: "Baratheon",
    city: "King's Landing"
}

// console.log(personnage2);
// // afficher tout l'objet

// console.log(personnage2.name);
// // Afficher le nom du personnage // la plus commune

// console.log(personnage2["name"]);
// // Afficher le nom du personnage // Deuxième manière

/* -------------------------- boucler dans l'objet -------------------------- */

// for (var key in personnage2) {
//     console.log(personnage2[key]);
// }
// // je boucle pour afficher le nom, house et city du personnage 

/* ------------- Composer un phrase avec les différents éléments ------------ */

// console.log("Mon personnage, " + personnage1.name + ", fait partie de la maison des " + personnage1.house + " et habite " + personnage1.city);


/* --------------------- Crée un tableau avec les objets -------------------- */

// var personnages = [personnage1, personnage2];

// personnages[0].city 
// Afficher le City du personnege 1

// personnages[0].["city"]
// 2eme méthode

/* --------------------------- Composer un phrase --------------------------- */
/* ---------- avec les différents éléments d'un obj dans un tableau --------- */

// for (var i = 0; i < personnages.length; i++) {
//     for (var key in personnages[i]) {
//         console.log("Mon personnage, " + personnages[i].name + ", fait partie de la maison des " + personnages[i].house + " et habite " + personnages[i].city);

//     }
// }


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

var listeCourse = {
    "lundi": [
        "filet américain",
        "cornichons"
    ],
    "mardi": [],
    "mercredi": [
        "biscuits",
        "chocolat",
        "chips"
    ],
    "jeudi": [
        "chinois"
    ],
    "vendredi": [
        "choux de bruxelles",
        "fromage frais",
        "patates",
        "pates",
        "salade"
    ],
    "samedi": [
        "raclette"
    ],
    "dimanche": []
}

/* --------------------------------- Enoncé --------------------------------- */

// Pour lundi vous avez 3 éléments dans votre liste 

/* -------------------------------- Solution -------------------------------- */

for (var key in listeCourse) { // je boucke dans ma liste de course
    var lc = listeCourse[key]; // je crée une variable avec les élement de la boucle 

    if (lc.length > 0) { // Si ma key contient plus de 0 élément
        if (lc.length == 1) { // Si ma key contient 1 élément
            console.log("Pour " + key + " vous avez qu'un élément dans votre liste: ");
        } else {

            console.log("Pour " + key + " vous avez " + lc.length + " éléments dans votre liste: ");
        }
        for (var i = 0; i < lc.length; i++) {
            console.log("- " + lc[i]); // je boucle pour afficher la liste des éléments de la key

        }
    } else {
        console.log("On n'a rien pour " + key);

    }
}