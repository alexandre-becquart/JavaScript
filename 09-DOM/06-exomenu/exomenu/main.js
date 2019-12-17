/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Exercice Menu                               */
/* -------------------------------------------------------------------------- */

/* -------------------- Faire apparaitre un menu au clic -------------------- */


document.getElementsByClassName('menu')[0].addEventListener('click', clickMenu)
// lorsque je clique sur l'élément qui a la classe menu, exécute la fct clickMenu()

var btn = document.getElementsByClassName('sousMenu')[0]
// je stocke la selection de l'élément qui la classe 'sousmenu' 
// pour simplifier l'écriture

/* -------------------------------- Methode 1 ------------------------------- */

// function clickMenu() {
//     if (btn.style.display == "none") {
//         btn.style.display = "block";
//     } else {
//         btn.style.display = "none";

//     }
// }

/* -------------------------------- Methode 2 ------------------------------- */
/* --------------------------- la plus recommandée -------------------------- */

function clickMenu() {
    if (btn.classList.contains('hidden')) { // si btn à la classe  hidden
        btn.classList.remove('hidden') // supprime là 
    } else {
        btn.classList.add('hidden') // sinon ajoute là

    }
}

/* ---------------------------- Methode mouseout ---------------------------- */
/* ---------------------------- /!!!!!!!!!!!!!!!\ --------------------------- */
/* ------------------ à éviter car pas supporté sur mobile ----------------- */

// document.getElementsByClassName('menu')[0].addEventListener('mouseout', clickMenuOut)

// function clickMenuOut() {
//     if (btn.style.display == "block") {
//         btn.style.display = "none";
//     }else {

//     }
// }