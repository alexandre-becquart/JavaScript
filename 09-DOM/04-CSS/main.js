/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Modifier le CSS ---------------------------- */


document.getElementById('myText').style.color = "#de23f6";
// j'ajoute ou modifie l'attribut style à myText pour lui donner la couleur 

document.getElementById("myText").setAttribute("class", "orange");
// j'ajoute la classe orange

document.getElementById('myText').removeAttribute('style');
// je supprime l'attibut style


document.getElementById('myText').setAttribute("class", "big")
// j'ajoute l'attibut/la class big

document.getElementById('myText').classList.add('toto');
// j'ajoute la classe toto // si elle existe dans la liste

document.getElementById('myText').classList.remove('Orange');
// je supprime la classe Orange 

console.log(document.getElementById('myText').classList.contains('toto')); // vrai ou faux 
// est ce que mon élément avec l'id myText contient la class 'toto' ? // vrai ou faux

