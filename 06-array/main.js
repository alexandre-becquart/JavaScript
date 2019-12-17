/* -------------------------------------------------------------------------- */
/*                                  les Array                                 */
/* -------------------------------------------------------------------------- */

/* ------------------------ Comment créer un tableau ------------------------ */

// var prenoms = new Array();

// var prenoms = [];

// var prenoms = ['Anissa', "Gilles", "Stéphane"];
// console.log(prenoms);

// console.log(prenoms[0]); 
// afficher l'élément qui a l'index [0] donc "Anissa"

// prenoms[3] = "Sebastien";
// console.log(prenoms);

/* --------------------------------- push() --------------------------------- */
/* ------------------ Ajoute un élément à la fin de l'array ----------------- */

// prenoms.push("Geaffrey", "tom"); 

// console.log(prenoms);

/* ---------------------------------- Pop() --------------------------------- */
/* --------------------- Supprimer le dernier du tableau -------------------- */

// prenoms.pop(); 
// console.log(prenoms);

/* -------------------------------- unshift() ------------------------------- */
/* ----------------------- Ajouter au début de l'array ---------------------- */

// prenoms.unshift('gilles') 
// console.log(prenoms);

/* --------------------------------- shift() -------------------------------- */
/* --------------------- Supprimer le premier du tableau -------------------- */

// console.log(prenoms);
// prenoms.shift(); 

/* -------------------------------- splice() -------------------------------- */
/* --------- commencer à supp à l'index[i], et supp le nbr d'élément -------- */

// prenoms.splice(2, 1) // je supprime un seul élément
// console.log(prenoms);

/* --------------------------------- table() -------------------------------- */
/* --------------------------- Affiche en tableau --------------------------- */

// console.table(prenoms); 

/* --------------------------------- .length -------------------------------- */
/* ---------- Indique le nombre d'éléments présents dans le tableau --------- */

// Permet de boucler dans la grandeur du tableau

// for (var i = 0; i < prenoms.length; i++) {
//     console.log(prenoms[i]);
// }

/* --------------------------------- split() -------------------------------- */
/* --------------- Permet de diviser une chaîne de caractères --------------- */
/* ---- à partir d'un séparateur pour fournir un tableau de sous-chaînes. --- */

// var phrase = "Bonjour tout le monde !";
// var monArray = phrase.split(' ');
// console.log(monArray);

/* --------------------------------- join() --------------------------------- */
/* ------------ crée et renvoie une nouvelle chaîne de caractères ----------- */
/* -------------- en concaténant tous les éléments d'un tableau ------------- */

// var phraseReconstituee = monArray.join('-');
// console.log(phraseReconstituee);

// var nom = "Becquart Alexandre";
// var url = "https://monsite.com/"

// nom = nom.split(' ');
// console.log(nom);
// for (var i = 0; i < nom.length; i++) {
//     nom[i] = nom[i].toLowerCase();
// }

/* ----------------------------- .toLowerCase() ----------------------------- */
/* -------- retourne la chaîne de caractères courante en minuscules. -------- */

// console.log(nom);
// url = url + "user/" + nom.join("-");
// console.log(url);

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

// var classes = ["sorcier", "Fétichiste", "chasseur", "moine", "nécromencien"];

/* --------------------------------- Enoncé --------------------------------- */

// // faire une boucle pour afficher :
// // classe1 : sorcier
// // class 2 : fétichiste
// // ...

// // classes.unshift(" ");
// console.log(classes);

// for (var i = 0; i < classes.length; i++) {
//     console.log("classe " + (i + 1) + " : " + classes[i]);
// }

/* -------------------------------------------------------------------------- */
/*                                  Exercise                                  */
/* -------------------------------------------------------------------------- */

// var objet = ["Table", "Chaise", "Buffet", "Bureau"];
// var prix = [250, 100, 349.99, 1500];
// var existe = false;

// var choix = prompt("Choisissez un objet (" + objet + ")");
// // (" + objet + ") permet d'afficher tous les éléments du tableau 'objet' dans le prompt 

// for (var i = 0; i < objet.length; i++) {
//     if (objet[i].toLowerCase() == choix.toLowerCase()) {
//         // On utilise toLowerCase() pour faire une comparaison la plus proche
//         console.log("le prix de " + choix + " est de " + prix[i] + "€");
//         existe = true; // s'il remplit la condition 'existe' devient True
//     }
// }
// if (!existe) { // si l'objet n'existe pas 
//     console.log("Cet objet n'existe pas");
// }

// var o = choix.split("").splice(0, 1).join("").toUpperCase();
// var suite = choix.split("").splice(1).join("").toLowerCase();
// console.log(o + suite);

// var index = objet.indexOf(o + suite);
// console.log(index);

// if (objet.indexOf(o + suite) == -1) {
//     console.error("Cet objet n'existe pas");
// } else {
//     console.log("le prix de " + (o + suite) + " est de " + prix[objet.indexOf(o + suite)]);
//     console.log("le prix de " + choix + " est de " + prix[index]);

// }

/* -------------------------------------------------------------------------- */
/*                      Autre manière de créer un tableau                     */
/* -------------------------------------------------------------------------- */

var amis = []
amis.push("Anissa");
amis[1] = "Véro";
amis[2] = "Reb";
amis.push("Nada");

var pro = ["Gilles", "Seb", "Steph"];
console.log(amis);
console.log(pro);

var contacts = [amis, pro];
// On lie deux tableaux ensemble

console.log(contacts[0][0]);
// on cible le premier élément du premier tableau

console.log(contacts[0][1]);
// on cible le deuxième élément du premier tableau


for (var i = 0; i < contacts.length; i++) { // On boucle dans la var contacts = [amis, pro]
    for (var j = 0; j < contacts[i].length; j++) {
        // On boucle dans le second niveau du tableau 
        // contacts = [amis, ["Gilles", "Seb", "Steph"]]
        console.log(contacts[i][j]);
    }
}

