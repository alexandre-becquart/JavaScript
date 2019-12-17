/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */


/* ------------------------------- les tagName ------------------------------ */


/* -------------- cibler un élémément avec getElementsByTagName ------------- */

var p = document.getElementsByTagName('p');

//  je vais cibler les balises 'p' de mon HTML 

console.log(p);

/* -------------------------------------------------------------------------- */

/* ------------------------- cibler avec les boucles ------------------------ */

for (var i = 0; i < p.length; i++) {
    console.log(p[i]);
    p[i].innerHTML = "paragraphe <mark>#" + (i + 1) + "</mark>";
}
// je boucle dans mes balise p pour leur ajouter le contenu "paragraphe <mark>#" + (i + 1) + "</mark>";

//document.getElementsByTagName('p')[2].innerHTML = "Moi je suis le 3eme ! ";

p[2].innerHTML = "Moi je suis le 3eme !";
// je change le contenu de la 2eme balise p

document.getElementsByTagName('body')[0];
// comme il y en a plusieurs, on peut indiquer l'index pour cibler précisement
// Faire ceci pour 'getElementsByTagName' et 'getElementsByClassName'

/* -------------------------------------------------------------------------- */

/* ------------- cibler un élémément avec getElementsByClassName ------------ */

var t = document.getElementsByClassName('text');
// je vais cibler les éléments qui ont la classe 'text'
console.log(t);

/* -------------------------------------------------------------------------- */

/* -------------------------- Construire une phrase ------------------------- */

console.log("il y a " + document.getElementsByTagName('p').length + " paragraphe dans mon document");

/* -------------------------------------------------------------------------- */
