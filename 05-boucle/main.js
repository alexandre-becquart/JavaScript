/* -------------------------------------------------------------------------- */
/*                                   théorie                                  */
/* -------------------------------------------------------------------------- */

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// var x = 1;

// x = x + 1; //2
// x += 1; //3
// x += 5 //8
// x++; //9
// ++x; //10

// console.log(x++); //10 mais incrémente juste après, donc 11
// console.log(x); //11
// console.log(++x); //12


/* -------------------------------------------------------------------------- */
/*                                  exercises                                 */
/* -------------------------------------------------------------------------- */

// boucle qui affiche nombre de 1 à 100
//me préciser  si le chiffre est pair ou impair
//"1 est impair"
// "2 est paire"

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 0) { 
//         console.log(i + " est pair");
//     } else {
//         console.log(i + " est impair");
//     }
// }

//mutiple de 4 
//mutiple de 7
//multiple de 4 et 7

// for (var i = 1; i <= 100; i++) {
//     if ((i % 4 == 0) && (i % 7 == 0)) {
//         console.log(i + " est multiple de 4");
//     } else if (i % 7 == 0) {
//         console.log(i + " est multiple de 7");
//     } else if (i % 4 == 0) {
//         console.log(i + " est pultiple de 4 et de 7");
//     } else {
//         console.log(i);
//     }
// }

// var count = 0;
// while (count <= 100) {
//     console.log(count);
//     count++;
// }

// var prenom = prompt("Quel est ton prénom?");
// while (prenom != "Alex") {
//     console.log(prenom);
//     prenom = prompt("choisi un autre prénom");
// }

// var min = 20;
// var max = 50;

// var reponse = parseInt(prompt("nombre?"));

// while (reponse < min || reponse > max) {
//     console.log(reponse);
//     reponse = parseInt(prompt("essaie encore"));
// }

// var min = 20;
// var max = 50;
// var reponse;
// var isTrue = true;
// while (isTrue) {
//     reponse = prompt("choisi un nombre");
//     if (reponse > min && reponse < max) {
//         isTrue = false;
//     }
// }

// var min = 20;
// var max = 50;
// var reponse;
// do {
//     reponse = prompt("Entrez un nomnre");
//     console.log(reponse);
// } while (reponse < min || reponse > max);

/* -------------------------------------------------------------------------- */
/*                                     exo                                    */
/* -------------------------------------------------------------------------- */

//boucle qui demande un prenom
//quand j'annule ou que je ne mets pas de prénom j'arrete la boucle
//afficher la liste de tous les prenoms entrés

/* -------------------------------------------------------------------------- */
/*                                 ma réponse                                 */
/* -------------------------------------------------------------------------- */

// var prenom = prompt("Entre un prénom");
// var liste = prenom + newPrenom;

// while (prenom != null) {
//     console.log(prenom);
//     // prenom = prompt("Essaie encore");
//     var newPrenom = prenom;
//     console.log(newPrenom);


// }
// if (prenom == null) {

//     console.log(liste);
// }

/* -------------------------------------------------------------------------- */
/*                                 correction                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------- Methode 1 ------------------------------- */

var prenom;
var liste = "";

// do {
//     prenom = prompt("Entrez un prénom")
//     console.log(prenom);
//     if (prenom) {
//         liste += prenom + " ";
//     }
// } while (prenom);

// console.log(liste.trim());


/* -------------------------------- Methode 2 ------------------------------- */

// var isTrue = true;
// while (isTrue) {
//     prenom = prompt("Entrez un prénom");
//     if (!prenom) {
//         isTrue = false;
//     } else {
//         liste += prenom + " ";
//     }
// }

// console.log(liste.trim());


/* -------------------------------- Méthode 3 ------------------------------- */

// prenom = prompt("Entrez un prénom");

// while (prenom) {
//     liste += prenom + " ";
//     prenom = prompt("Vous avez ajouté " + prenom + " ,entrez un nouveau prénom");
// }

// console.log(liste.trim());

//-------------------------------------------------

//exo

// var justePrix = Math.round(Math.random() * 1000);
// var prix;
// var tentative = 1;

// prix = prompt("Donnez un prix");

// do {
//     // console.log(prix);
//     if (prix > justePrix) {
//         console.log("le juste prix est plus petit que " + prix);
//         prix = prompt("Retentez votre chance");
//     } else if (prix < justePrix) {
//         console.log("le juste prix est plus grand que " + prix);
//         prix = prompt("Retentez votre chance");
//     } else if (prix == justePrix) {
//         console.log("Bravo vous avez gagné la Voiture !!!");
//     }
// } while (prix != justePrix && tentative++ < 10);

// if (prix != justePrix) {
//     console.log("Vous avez perdu !!!");

// } else {
//     console.log("Bravo le juste pris est bien " + justePrix + ", vous avez gagné la Voiture !!!");
// }

//résolution

// Méthode 1

// var justePrix = Math.round(Math.random() * 1000);
// var count = 5;
// console.log(justePrix);

// var prix = prompt("Devinez le juste prix");
// while (prix != justePrix) {
//     count--;
//     if (prix < justePrix) {
//         console.log("Plus cher");
//     } else {
//         console.log("Moins cher");
//     }
//     prix = prompt("proposez un autre prix ")
// }

// console.log("gagné !");

// var s = "abcdefghijklmnopqrstuvwxyz"

// console.log(s.substr(0, 2)); //ab
// console.log(s.substr(1, 2)); //bc
// console.log(s.substr(3, 5)); //defgh
// console.log("----------------------");
// console.log(s.substring(0, 2)); //ab
// console.log(s.substring(1, 2)); //b
// console.log(s.substring(3, 5)); //de
// console.log("---------------------");
// console.log(s.charAt(4)); //e


// //exercice
// //générer une chaine de caractère de chiffre de 0à500
// //boucler dans ce string et compter le nombre de fois qu'apparait le chiffre 2

// var liste = "";

// for (var i = 0; i <= 500; i++) {
//     liste += i;
// }

// console.log(liste);

// var count = 0;

// for (var i = 0; i <= liste.length; i++) {
//     if (liste.charAt(i) == 3) {
//         count++;
//     }
// }

// console.log(count);


// do {

//     if (nbr = 3) {
//         count++
//         console.log(count);
//     } else {
//         nbr++
//     }

// } while (nbr = null);

// Correction


var str = "";

for (var i = 0; i <= 500; i++) {
    str += i;
}
console.log(str);

var count = 0;

// for (var j = 0; j < str.length; j++) {
//     if (str.charAt(j) == 3) {
//         count++
//     }
// }
// console.log(count);