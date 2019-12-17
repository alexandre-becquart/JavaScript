var liste = {
    "stagiaires": [
        {
            "firstname": "Thomas",
            "lastname": "Esgain",
            "age": 26,
            "city": "Charleroi"
        },
        {
            "firstname": "Camille",
            "lastname": "Vandenbussche",
            "age": 24,
            "city": "Houthem"
        },
        {
            "firstname": "Julien",
            "lastname": "Flament",
            "age": 26,
            "city": "Cuesmes"
        },
        {
            "firstname": "Christian",
            "lastname": "Verde",
            "age": 26,
            "city": "Charleroi"
        },
        {
            "firstname": "Christian",
            "lastname": "Lagast",
            "age": 36,
            "city": "Mons"
        },
        {
            "firstname": "Danny",
            "lastname": "Wrincq",
            "age": 53,
            "city": "Quaregnon"
        },
        {
            "firstname": "Nicolas",
            "lastname": "Davin",
            "age": 30,
            "city": "Braine L'Alleud"
        },
        {
            "firstname": "Guillaume",
            "lastname": "Danzin",
            "age": 40,
            "city": "Saint-Symphorien"
        },
        {
            "firstname": "Anais",
            "lastname": "Delaunoy",
            "age": 20,
            "city": "Charleroi"
        },
        {
            "firstname": "Thomas",
            "lastname": "Barez",
            "age": 21,
            "city": "Braine le Comte"
        },
        {
            "firstname": "Benoit",
            "lastname": "Carreau",
            "age": 38,
            "city": "Tournai"
        },
        {
            "firstname": "Fabian",
            "lastname": "Potenza",
            "age": 23,
            "city": "Quaregnon"
        },
        {
            "firstname": "Jimmy",
            "lastname": "Quennery",
            "age": 22,
            "city": "Boussu-en-Fagnes"
        },
        {
            "firstname": "Arnaud",
            "lastname": "De Boeck",
            "age": 21,
            "city": "Mons"
        }
    ],
    "formateurs": [
        {
            "firstname": "Christophe",
            "lastname": "Estercq",
            "age": 26,
            "city": "Mons"
        },
        {
            "firstname": "Anissa",
            "lastname": "Belkheir",
            "age": 34,
            "city": "Ghlin"
        },
        {
            "firstname": "Gilles",
            "lastname": "Bertrand",
            "age": 35,
            "city": "Hyon"
        }
    ]
};

/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//1. afficher tous les prénoms et noms des stagaires

/* --------------------------------- Soltion -------------------------------- */

// var s = liste.stagiaires
// for (var i = 0; i < s.length; i++) {
//     console.log(s[i].lastname + " " + s[i].firstname);
// }

/* -------------------------------------------------------------------------- */


/* --------------------------------- Enoncé --------------------------------- */

// 2. afficher uniquement les prénoms des stagiaires qui commence par D A T

/* -------------------------------- Solution -------------------------------- */

var s = liste.stagiaires

// for (var i = 0; i < s.length; i++) {
//     if (s[i].firstname.charAt(0) == "A" || s[i].firstname.charAt(0) == "D" || s[i].firstname.charAt(0) == "T") {
//         console.log(s[i].lastname + " " + s[i].firstname);
//     }
// }

/* -------------------------------- charAt() -------------------------------- */
/* ----------- renvoie une nouvelle chaîne contenant le caractère ----------- */
/* ------------------- à la position indiquée en argument. ------------------ */

/* -------------------------------------------------------------------------- */


/* --------------------------------- Enonce --------------------------------- */

//3. afficher les prénom des stagiaires regroupés par ville 
//la ville de mons héberge ...

/* -------------------------------- Solution -------------------------------- */

var tempCity = []; // je crée un tableau vide pour les villes
var tempUser = []; // je crée un tableau vide pour les utilisateurs

for (var i = 0; i < s.length; i++) { // je boucle dans la liste des stagiaires
    var index = tempCity.indexOf(s[i].city);
    // je crée une variable qui contient index des villes des stagiaires
    //console.log(index);
    // Il renvoie soit un nbr entre 0 et 10+ ou -1

    /* -------------------------------- indexOf() ------------------------------- */
    /* ------------------ renvoie le premier indice pour lequel ----------------- */
    /* --------------- on trouve un élément donné dans un tableau --------------- */

    if (index == -1) { // si la ville n'existe pas 
        tempCity.push(s[i].city); // tu ajoutes la villes dans le tableau tempCity[]
        tempUser.push(s[i].firstname) // tu ajoutes le nom dans le tableau tempUser[]
    } else { // si la ville existe
        tempUser[index] += " " + s[i].firstname
    }
}
console.log(tempCity);
console.log(tempUser);

for (var j = 0; j < tempUser.length; j++) {
    console.log("La ville de " + tempCity[j] + " héberge : " + tempUser[j]);
}





