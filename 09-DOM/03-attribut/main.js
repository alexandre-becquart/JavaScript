/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* ------------------------------ les attributs ----------------------------- */

var img = document.getElementById('myImg');
//document.getElementsByTagName('img')[0]
// je selectionne l'élément de mon index.html qui à l'ID myImg

/* ----------------------- Donner un titre à mon image ---------------------- */

//var titre = img.alt;
document.getElementById('demo').innerText = document.getElementById('myImg').alt;
// je selectionne l'élément qui à l'ID demon pour lui donner le contenude
// l'attribut alt de mon élément qui porte l'ID myImg

/* ------------------------------ setInterval() ----------------------------- */
/* ---------------- Appelle une fonction de manière répétée, ---------------- */
/* ------------- avec un certain délai fixé entre chaque appel. ------------- */

setInterval(function () { // je crée une fonction qui va être éxécuter tous les x temps
    var count = Math.floor(Math.random() * 1000) //je crée un chiffre aléatoire arrondi 

    document.getElementById('myImg').src = "https://picsum.photos/id/" + count + "/250/250";
    // j'ajoute l'attibut src à mon éléménet qui porte l'ID myImg

    document.getElementById('demo').innerText = "Photo au hasard " + count;
    // j'ajoute le texte "Photo au hasard " + count à mon élément qui porte l'ID demo

}, 1000) // toutes les secondes (1000 = 1sec)

/* ----------------------------- setAttribute() ----------------------------- */
/* -------------- Ajoute un nouvel attribut ou change la valeur ------------- */
/* ------------- d'un attribut existant pour l'élément spécifié ------------- */

// document.getElementsByTagName("input")[0].value = "Anissa"
// est égale à 
// document.getElementsByTagName('input')[0].setAttribute('value', 'Annissa')



document.getElementsByTagName('input')[0].setAttribute('value', 'Annissa');
document.getElementsByTagName('input')[0].setAttribute('name', 'nom');
document.getElementsByTagName('input')[0].setAttribute('id', 'myInput');

/* -------------------------------------------------------------------------- */


/* ----------------------------- getAttribute() ----------------------------- */
/* ------- renvoie la valeur d'un attribut donné de l'élément spécifié ------ */

console.log(document.getElementsByTagName('input')[0].getAttribute('id'));
// je demande d'afficher la valeur de l'ID de l'Input

/* -------------------------------------------------------------------------- */


/* ---------------------------- removeAttribute() --------------------------- */
/* --------------- supprime un attribut de l'élément spécifié --------------- */

document.getElementsByTagName('input')[0].removeAttribute('value')
// je lui demande de lui retirer l'élément value de mon input

/* -------------------------------------------------------------------------- */
