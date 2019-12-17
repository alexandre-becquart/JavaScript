/* -------------------------------------------------------------------------- */
/*                                 Les Conditions                             */
/* -------------------------------------------------------------------------- */

// // if(condition est bonne){
// //     fait ceci
// // }

// if (1 > 2) { //si a condition est bonne 
//     console.log("c'est bon"); // <-- exécute ce code
// } else {
//     console.log("Ce n'est pas bon")
// }

// var age = prompt("Quel est ton âge?");

// // if (age >= 18) {
// //     console.log("tu es majeur");
// // } else {
// //     console.log("tu es mineur");
// // }

// if (age == 18) {
//     console.log("Tu as 18 ans ")
// }

// if (age === "18") {
//     console.log("Tu as 18 ans")
// } else {
//     console.log("tu n'as pas 18 ans");
// }


// if (age !== "18") { //age  différent de 18 et un number
//     console.log("blah");
// }

// if (age >= 50 && age <= 67) {
//     console.log("tu es senior, mais tu n'es pas encore retraité");
// }

// if (age > 18 || age < 5) {
//     console.log("tu dois payer l'entrée ado à pairidaiza");
// }

/* -------------------------------------------------------------------------- */
/*                                  exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// prompt combien de pomme avez vous ceuillies
//si plus de 35 c'est bon 
//sinon retourne bosser

/* -------------------------------- Solution -------------------------------- */

// var pommes = prompt("Combien as-tu ceuilli de pommes ?");

// if (parseInt(pommes) > 35) {
//     console.log("C'est bien");
// } else {
//     console.log("Retourne bosser");
// }

// var age = prompt("age ?");

// if (age > 18 && age < 50) {
//     console.log("tu es majeur mais pas senior");
// } else if (age >= 50) {
//     console.log("tu es senior");
// } else {
//     console.log("tu es mineur");
// }

/* -------------------------------------------------------------------------- */
/*                                  exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//vous avez un meuble qui contient 4 tiroirs
//1- ce tiroir contient des chausettes
//2- ce tiroir contient des cables usb
//3- ce tiroir est vide 
//4- ce tiroir est fermé à clé
//tapez un promt le numéro du tiroie que vous voulez ouvrir

/* -------------------------------- Solution -------------------------------- */

// var tiroir = prompt("Quel tiroir voulez-vous ouvrir");

/* -------------------------------------------------------------------------- */
/*                    Version avec IF - ELSE IF - ELSE                        */
/* -------------------------------------------------------------------------- */

// if (parseInt(tiroir) == 1) {
//     console.log("Ce tiroir contient des chausettes");
// } else if (parseInt(tiroir) == 2) {
//     console.log("Ce tiroir contient des cables USB");
// } else if (parseInt(tiroir) == 3) {
//     console.log("Ce tiroir est vide");
// } else if (parseInt(tiroir) == 4) {
//     console.log("Ce tiroir est fermé à clé");
// } else {
//     console.log("Il n'y a que 4 tiroirs");
// }

/* -------------------------------------------------------------------------- */
/*                             Version avec Switch                            */
/* -------------------------------------------------------------------------- */

// switch (parseInt(tiroir)) {
//     case 1:
//         console.log("Ce tiroir contient des chausettes");
//         break;
//     case 2:
//         console.log("Ce tiroir contient des cables USB");
//         break;
//     case 3:
//         console.log("Ce tiroir est vide");
//         break;
//     case 4:
//         console.log("Ce tiroir est fermé à clé");
//         break;

//     default:
//         console.log("Il n'y a que 4 tiroirs");
//         break;
// }

/* -------------------------------- Autre cas ------------------------------- */

// var age = "15";

/* -------------------------------------------------------------------------- */
/*                    Version avec IF - ELSE IF - ELSE                        */
/* -------------------------------------------------------------------------- */

// if (a > 8 && age < 18) { // a plus grand que 8 ET age plus petit que 18
//     console.log("oui");
// } else {
//     console.log("non");
// }

/* -------------------------------------------------------------------------- */
/*                             Version avec Switch                            */
/* -------------------------------------------------------------------------- */

// switch (true) {
//     case age > 8 && age < 18:
//         console.log("oui");
//         break;

//     default:
//         console.log("non");
//         break;
// }


/* -------------------------------------------------------------------------- */
/*                             Faire un aléatoire                             */
/* -------------------------------------------------------------------------- */

/* ------------------------------ Math.random() ----------------------------- */

// var aleatoire = Math.random() * 100; //génère un nombre entre 0 et 1 (non inclus)
// console.log(aleatoire);

/* ------------------------------ Math.round() ------------------------------ */

// console.log(Math.round(aleatoire)); // 25.6 -> 26, 25.4 -> 25 
// retourne la valeur d'un nombre arrondi à l'entier le plus proche

/* ------------------------------ Math.floor() ------------------------------ */

// console.log(Math.floor(aleatoire)); // 25.6 -> 26, 25.4 -> 25 
// renvoie le plus grand entier qui est inférieur ou égal à un nombre

/* ------------------------------- Math.ceil() ------------------------------ */

// console.log(Math.ceil(aleatoire)); // 25.4 -> 26, 25.6 -> 26 
// retourne le plus petit entier supérieur ou égal au nombre donné

/* ------------------------------ Math.trunc() ------------------------------ */

// console.log(Math.trunc(aleatoire)); 
// retire ce qu'il y a derrière la virgule

/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// //créer deux variables min max
// //dans un prompt demande de choisir un nombre
// // s'il se trouve entre min et max -> c'est du bon

/* -------------------------------- Solution -------------------------------- */

// var min = Math.round(Math.random() * 100);
// var max = min + Math.round(Math.random() * 100);
// // console.log(min + " " + max);
// var nombre = parseInt(prompt("Choisissez un nombre"));


// if (nombre >= min && nombre <= max) {
//     console.log("C'est bon !");
// } else {
//     console.log("Recommence");
// }


/* -------------------------------------------------------------------------- */
/*                             Condition ternaire                             */
/* -------------------------------------------------------------------------- */

// Les conditions ternaires permettent de simplifier les conditions mais peuvent parfois être illisibles

var age = prompt("Quel est ton age?");
var msg;

if (age >= 18) {
    msg = "+18";
} else {
    msg = "-18";
}

console.log("Tu fais fait partie de la catégorie: " + msg);

msg = age >= 18 ? "+18" : "-18";
console.log("Tu fais fait partie de la catégorie: " + msg);

msg = age >= 18 ? "+18" : "-18";
// msg = age >= 18 ? (age > 67 ? "retraité" : "+18" ) "+18") : "-18";
console.log("Tu fais fait partie de la catégorie: " + msg);