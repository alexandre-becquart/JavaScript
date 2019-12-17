/* -------------------------------------------------------------------------- */
/*                               Les fonctions                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Créer une foncion --------------------------- */

// var count = 0;
// function maFct() {
//     console.log("coucou");
//     if (count < 10) {
//         count++;
//         maFct();
//     }
// }
// console.log("toto");

/* ------------------- Appeler la fonction pour l'executer ------------------ */

// maFct()

/* -------------------------------------------------------------------------- */


/* -------------------------------- Arguments ------------------------------- */

// function sayHello(nom) { // il attend un argument 'nom' à utiliser dans la fct
//     console.log("Bonjour " + nom);
// }

/* -------------------------------- à éviter -------------------------------- */

// function sayHi() { // il n'y a pas d'argument dan les ()
//     console.log("hi " + prenom); //à éviter
// }

/* -------------------------------------------------------------------------- */

/* ---------------------- Appel de la FCT sayHello(nom) --------------------- */

//sayHello("Alex")
// console.log(nom);// cela n'existe pas

/* -------------------------------------------------------------------------- */

/* ----------------------------- Avec un prompt ----------------------------- */

// var prenom = prompt("entrez un prénom");
// sayHello(prenom);

/* -------------------------------------------------------------------------- */


/* --------------------------------- Exemple -------------------------------- */

// function l(msg, type) {
//     switch (type) {
//         case "error":
//             console.error(msg);
//             break;
//         case "warn":
//             console.warn(msg);
//             break;
//         default:
//             console.log(msg);
//     }
// }

// l("Bonjour tout le monde", "error");
// l("qqch")

// var username = prompt("quel est ton username?");
// l("ton username est " + username)

/* ----------------------------- console.error() ---------------------------- */
/* -------- Affiche un message d'erreur dans la console du navigateur ------- */

/* ----------------------------- console.warn() ----------------------------- */
/* --------- Affiche un message d'avertissement dans la console web --------- */

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// créer unr fonction qui calcule la surface d'un rectangle
// 2 prompt
// 2 argument dans la FCT

/* -------------------------------- Solution -------------------------------- */


// function calSurface(largeur, longueur) {
//     console.log(largeur * longueur);
// }

// var larg = parseInt(prompt("Donnez la mesure de la largeur"));
// var long = parseInt(prompt("Donnez la mesure de la longueur"));

// calSurface(larg, long)

/* -------------------------------- portée : -------------------------------- */

// var prenom = "Anissa"

// function monPrenom() {
//     var prenom = "Gilles";
//     console.log(prenom);
// }

// monPrenom(); // il affiche Gilles
// console.log(prenom); // il affiche Anissa

/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//fonction qui calcule la moyenne de 3 nombres
// afficher le plus petit des 3 nombres

/* -------------------------------- Solution -------------------------------- */

// function moyenne(chif1, chif2, chif3) {
//     console.log("La moyenne des chiffres est de " + (chif1 + chif2 + chif3) / 3);
//     if (chif1 < chif2 && chif1 < chif3) {
//         console.log("le chiffre le plus petit est " + chif1);
//     } else if (chif2 < chif1 && chif2 < chif3) {
//         console.log("le chiffre le plus petit est " + chif2);

//     } else if (chif3 < chif1 && chif3 < chif2) {
//         console.log("le chiffre le plus petit est " + chif3);
//     }
// }

// var nbr1 = parseInt(prompt("Donne le chiffre 1"));
// //on fait un parseInt car c'est un string que l'on reçoit

// var nbr2 = parseInt(prompt("Donne le chiffre 2"));
// var nbr3 = parseInt(prompt("Donne le chiffre 3"));

// moyenne(nbr1, nbr2, nbr3)

/* -------------------------------------------------------------------------- */


/* ------------------------------- Correction ------------------------------- */

// function calculMoyenne(nbr1, nbr2, nbr3) {
//     var minimum = nbr1;
//     if (nbr2 < minimum) {
//         minimum = nbr2;
//     }
//     if (nbr3 < minimum) {
//         minimum = nbr3;
//     }

//     var moyenne = (nbr1 + nbr2 + nbr3) / 3;
//     //console.log("La moyenne des 3 est " + moyenne + " et le plus petit est " + minimum);

//     //return [moyenne, minimum]
//     return { moyenne, minimum }

// }

// var resultat = calculMoyenne(nbr1, nbr2, nbr3);

// //console.log(resultat);
// //console.log(resultat[0]);
// console.log(resultat.moyenne);

/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

// au moins 2 fonctions 
//getNums() -> 3 prompts qui demande 2 nbr et 1 opérateur, tant que les deux nombre ne sont pas des chiffres relancer getNums
//calculate() -> reçoit les 3 infos, fait le calcul, renvoit le result

/* -------------------------------- Solution -------------------------------- */

// function getNums() {
//     var nbr1 = parseInt(prompt("Donne le chiffre 1"));
//     if (isNaN(nbr1)) {
//         getNums(alert("Ceci n'est pas un nombre, recommencez"));
//     }
//     var ope = prompt("Donne l'opération");
//     var nbr2 = parseInt(prompt("Donne le chiffre 2"));
//     if (isNaN(nbr2)) {
//         getNums(alerte("Ceci n'est pas un nombre, recommencez"))
//     }


//     return calculate(nbr1, ope, nbr2)
// }



// function calculate(nbr1, ope, nbr2) {
//     var resultat;
//     switch (ope) {
//         case "+":
//             resultat = nbr1 + nbr2;
//             break;
//         case "-":
//             resultat = nbr1 - nbr2;
//             break;
//         case "/":
//             resultat = nbr1 / nbr2;
//             break;
//         case "*":
//             resultat = nbr1 * nbr2;
//             break;
//         case "%":
//             resultat = nbr1 % nbr2;
//             break;

//         default:
//             break;
//     }
//     return resultat;
// }

// console.log(getNums());

/* -------------------------------------------------------------------------- */


/* ------------------------------- Correction ------------------------------- */

// function getNums() {
//     var nbr1 = parseInt(prompt("Entrez un premier nombre"));
//     var op = prompt("Entrez un opérateur");
//     var nbr2 = parseInt(prompt("Entrez un second nombre"));

//     if (isNaN(nbr1) || isNaN(nbr2)) {
//         getNums(alert("Ceci n'est pas un nombre, recommencez"));
//     } else {
//         return calculate(nbr1, nbr2, op);
//     }
// }

// function calculate(n1, n2, o) {
//     var resultat;
//     switch (o) {
//         case "+":
//             resultat = n1 + n2;
//             break;
//         case "-":
//             resultat = n1 - n2;
//             break;
//         case "/":
//             resultat = n1 / n2;
//             break;
//         case "*":
//             resultat = n1 * n2;
//             break;
//         case "%":
//             resultat = n1 % n2;
//             break;
//         default:
//             getNums(alert("Erreur de calcul"));
//             break;
//     }
//     return resultat;
// }

// console.log(getNums());

/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* -------------------- /!!!\ QUESTION D'ENTRETIEN /!!!\ -------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//fonction qui calcule la factoriel d'un nombre
// 5*4*3*2*1

/* -------------------------------- Solution -------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                 AVEC UN FOR                                */
/* -------------------------------------------------------------------------- */

function fact(n) {
    var r = 1;
    for (var i = n; i > 0; i--) {
        r = r * i;
        console.log(r);
    }
    return r;
}

console.log(fact(5));

/* -------------------------------------------------------------------------- */
/*                                 AVEC UN IF                                 */
/* -------------------------------------------------------------------------- */

// function fact(n) {
//     if (n <= 0) {
//         return 1; 0
//     } else {
//         return n * fact(n - 1);
//     }
// }

// console.log(fact(5));

/* -------------------------------------------------------------------------- */
/*                              AVEC UN TERNAIRE                              */
/* -------------------------------------------------------------------------- */

// return n <= 0? 1 : n*fact(n-1);

/* -------------------------------------------------------------------------- */



/* -------------------------------------------------------------------------- */
/*                                  Exercice                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- Enoncé --------------------------------- */

//convertir les chiffres en texte.
//exemple : 236 devient deux cent trente six 

/* -------------------------------- Solution -------------------------------- */

function nbrVersTexte() {

    var arrUnites = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
    var arrDizaines = ["", "dix", "vingt", "trente", "quarante", "cinquante", "soixante", "septante", "quatre-vingt", "nonante"];

    nbr = parseInt(prompt("Donnez un nombre à convertir")); // je demande un nombre que je convertie en Integer

    var centaine = Math.floor(nbr / 100); // récupérer la centaine
    var dizaine = Math.floor((nbr - (centaine * 100)) / 10); // récupérer la dizaine
    var unite = Math.floor(nbr - (centaine * 100) - (dizaine * 10)); // récuper l'unité
    var textCent = "cent";
    var textCents = "cents";
    var textvingts = "vingts";
    var textQuatreVingts = "quatre-vingts";

    var textCentaine;

    if (centaine == 1 || (dizaine == 1 && unite == 0)) {
        // si la centaine est = à 1 ou que la dizaine est = 1 et = à 0
        textCentaine = textCent + " "; // var textCent = "cent";
    } else if (centaine == 0) { // si centaine est = à 0
        textCentaine = arrUnites[centaine] + " "; // il va chercher l'élément du tableau qui est = à l'index[] = à centaine
    } else {
        textCentaine = arrUnites[centaine] + " " + textCents + " ";
        // sinon textCentaine reprend l'élément du tableau qui est = à l'index[] = à centaine + tetextCents
        // tout sauf 1 et 0
    }

    var textDizaine;

    if (dizaine > 1 && dizaine != 2 && dizaine != 8) {
        textDizaine = arrDizaines[dizaine] + "-" + arrUnites[unite];
    } else if (dizaine == 1) {
        var dizExcep = (dizaine * 10) + unite;

        textDizaine = arrUnites[dizExcep]
    } else if (dizaine == 2) {
        if (unite > 1) {
            textDizaine = textvingts
        } else {
            textDizaine = arrDizaines[dizaine]
        }
    } else if (dizaine == 8) {
        if (unite > 1) {
            textDizaine = textQuatreVingts
        } else if (unite == 0) {
            textDizaine = textQuatreVingts
        }
        else {
            textDizaine = arrDizaines[dizaine]
        }
    } else {
        textDizaine = arrUnites[unite]
    }

    var textUnite = " " + arrUnites[unite];

    return resultat = textCentaine + textDizaine + textUnite;

}

console.log(nbrVersTexte());

/* -------------------------------------------------------------------------- */






