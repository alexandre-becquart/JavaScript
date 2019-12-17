/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* ------------------------------ CreateElement ----------------------------- */

var titre = document.createElement('h1');
// dans ma var titre je stocke la création d'un élement 'h1'

titre.innerHTML = "Ceci est un titre";
// je lui ajoute un texte

titre.style.textAlign = "center";
// je lui ajoute l'attribut textAlign = "center"

titre.style.color = "blue";
// je lui ajoute la couleur bleu

document.getElementById('demo').innerHTML = "";
//Permet de supprimer le contenu dejà existant

document.getElementById('demo').appendChild(titre);
//ajoute à la suite du contenu déjà existant
// /!!\ ne pas oublier cette ligne /!!\

/* ------------------------------ appendChild() ----------------------------- */
/* ----------------------- ajoute un élément à la fin ----------------------- */
/* ---------- de la liste des enfants d'un élément parent spécifié ---------- */


/* ----------------------------- Créer un image ----------------------------- */

var image = document.createElement('img');
// je crée un élement img

image.src = "https://picsum.photos/600/250";
image.alt = "image";
// je lui donne les attributs

document.getElementById('demo').appendChild(image);
// je l'ajoute dans à la fin de ma balise ID demo

/* --------------------------- créer un paragraphe -------------------------- */

var p = document.createElement('p');
p.innerText = "Ceci est un paragraphe";

document.getElementById('demo').appendChild(p);