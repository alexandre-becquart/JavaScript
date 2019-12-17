// // alert("toto");
// // alert("tata");
// // alert("titi");

/* -------------------------------------------------------------------------- */
/*                       déclaration d'une variable                           */
/* -------------------------------------------------------------------------- */

// var maVariable;
// var prenom;
// var date;
// var x;
// var nomDeVariableTresLong; // CamelCase
// var snake_case;
// var SCREAMING_SNAKE_CASE;
// var PascalCase;
// //var mettre-des-tirets; // ERREUR A NE PAS FAIRE - utiliser les "-"


/* -------------------------------------------------------------------------- */
/*                           Définition des variables                          */
/* -------------------------------------------------------------------------- */

// prenom = "Alex"; //string
// date = 2019; //number
// x = true; // true or false BoOlean

// console.log(maVariable); //undifined = existe mais ne contient rien
// console.log("prenom"); //affiche la chaine de caractères "prenom"
// console.log(prenom); // affiche le contenu de la variable prénom

// maVariable = "test"; // je définie ma variable

// console.log(maVariable); // affiche le contenu de ma viriable maVariable

// // console.log(nom); // erreur is not defined - la var n'existe pas (non déclaré) 

// // console.log(x);
// // console.log(x);

// x = 10;
// console.log(x); //10
// X = 20; //auto déclarée en global -> déconseillé de na pas déclarer soi-mêmes ses var;
// console.log(x); //10
// console.log(X); //20

// console.log(typeof (x)); //number
// console.log(typeof (prenom)); //tring

// var isCold = true;
// console.log(typeof (isCold)); //boolean

/* -------------------------------------------------------------------------- */
/*                                Concaténation                               */
/* -------------------------------------------------------------------------- */

var mois = "juin";
var annee = 2019;

// var mois = "juin",
//     annee = 2019,
//     jour = "lundi";

console.log(mois + ' ' + annee);

mois = 6;
annee = 2020;

console.log(mois + annee); //2026 (a additioné les number)
console.log(mois + ' ' + annee); //6 2020 (a concaténé les nomber avec un ' ')

var prenom = "Alex";
console.log("Bonjour " + prenom); //bonjour Alex

// prenom = prompt("quel est ton prénom ?");
// console.log("Bonjour, " + prenom); //Bonjour, + le texte tapé dans le prompt

/* -------------------------------------------------------------------------- */
/*                                   Calculs                                  */
/* -------------------------------------------------------------------------- */

var chiffre1 = 100;
var chiffre2 = 2;

console.log(chiffre1 + chiffre2); //102
console.log(chiffre1 - chiffre2); //98
console.log(chiffre1 * chiffre2); //200
console.log(chiffre1 / chiffre2); //50
console.log(chiffre1 % chiffre2); // 0 // modulo = reste de la division des chiffre1 par chiffre2

/* -------------------------------------------------------------------------- */
/*                                  Exercises                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// lancer 2 prompts qui récupère 2 chiffres
//m'affichez la somme de ces 2 chiifre

/* --------------------------------- réponse -------------------------------- */

// chiffre1 = prompt("Quel est le chiffre1");
// chiffre2 = prompt("Quel est le chiffre2");

// console.log(parseInt(chiffre1) + parseInt(chiffre2));

// chiffre1 = parseInt(prompt("Quel est le chiffre1"));
// chiffre2 = parseInt(prompt("Quel est le chiffre2"));

// console.log(chiffre1 + chiffre2);

console.log("--------------------------------------");

var texte = "10.5 centimetres";
var str = "12.3"; //string
console.log(parseInt(texte)); //10
console.log(parseFloat(texte)); //10.5
console.log(Number(texte)); //NaN = Not a Number