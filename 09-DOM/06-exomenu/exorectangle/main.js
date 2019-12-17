/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                             Exercice rectangel                             */
/* -------------------------------------------------------------------------- */

/* ---------------------- Faire apparaitre un rectange ---------------------- */

document.getElementsByClassName('btn')[0].addEventListener('click', addDiv);
// au clic sur l'élément btn exécute la fct addDiv


var div = document.getElementsByClassName('central')[0];
// je stocke ma selection dans une var pour simplifier l'écriture

function addDiv() {

    var w = parseInt(prompt("Donnez une longueur"));
    // je demande une longueur 
    var h = parseInt(prompt("Donnez une hauteur"));
    // je demande une largeur 
    alert("Surface = " + w * h);
    // affiche la BTD avec la calcul surface
    alert("périmetre = " + ((w * 2) + (h * 2)));
    // affiche la BTD avec la calcul périmettre


    /* ----------------- je construis le style de mon rectangle ----------------- */

    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.margin = "auto";
    div.innerHTML = '<p>Voici mon rectangle</p>';
    document.getElementsByTagName('p')[0].style.margin = "auto"
    div.style.textAlign = "center";
    div.style.fontWeight = "bold";
    div.style.textTransform = "uppercase";
    div.style.fontFamily = "Verdana";
    div.style.color = "white";
    //div.style.borderRadius = "50%";








}