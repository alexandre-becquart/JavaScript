/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* ------------------------------- les Events ------------------------------- */


/* -------------------------------- .onclick -------------------------------- */
/* ---------------- une Fct qui se lance au clic d'un élément --------------- */

/* -------------------------------- Méthode 1 ------------------------------- */

// document.getElementById('btn').onclick = function () {
//     console.log("Hello");
// }

// Après avoir cliquer sur l'élément qui a l'ID btn lance la fct pour afficher "Hello"

/* -------------------------------- Methode 2 ------------------------------- */
/* ---------------------------- la plus courante ---------------------------- */

/* --------------------- .addEventListener("click", fct) -------------------- */
/* ------------------- met en place une fonction à appeler ------------------ */
/* -------- chaque fois que l'événement spécifié est remis à la cible ------- */

//document.getElementById('btn').addEventListener("click", hideBox) 
// je surveille si j'ai un élement, c'est de l'espionnage
// au clic sur le l'élément btn j'exécute la fct hideBox()

// function hideBox() {
//     document.getElementById('box').style.opacity = "none";
// // donne le style opacity = none à l'élémnt box

// }

/* --------------------------------- Exemple -------------------------------- */

document.getElementById('btn').addEventListener('click', fctBox);
// au clic sur le l'élément ID btn lance la fct fctBox()

var box = document.getElementById('box'); // on la stock dans une variable afin de simplifier l'écriture

function fctBox() {
    // if (box.style.display == "none") { // si l'attribut display de box est egale à none
    //     box.style.display = "block"; // change le en block
    // } else {
    //     box.style.display = "none"; // sinon display = block 
    // }


    /* -------------- de préférence utiliser les ADD et les REMOVE -------------- */

    if (box.classList.contains('hidden')) { // si box contient la classe hidden 
        box.classList.remove('hidden') // retire la classe hidden 
    } else {
        box.classList.add('hidden'); // si elle n'existe pas, ajoute là
    }

}

/* -------------------------------- onOver() -------------------------------- */
/* ------------------ au passage de la souris sur l'élément ----------------- */

function onOver(boite) {
    // console.log("mouse over sur une boite");
    // document.getElementsByClassName('boite')[i].innerHTML = "Touché !";


    boite.innerText = "Touché !";


}

/* --------------------------- /!!\ incomplet /!!\ -------------------------- */
/* -------------------------------------------------------------------------- */



/* ------------------------ Clic Gauche et Clic Droit ----------------------- */

var arrBoite = document.getElementsByClassName('boite');

for (var i = 0; i < arrBoite.length; i++) {
    // arrBoite[i].addEventListener('mouseover', mOver)
    // arrBoite[i].addEventListener('mouseout', mOut)
    arrBoite[i].addEventListener('click', mClick)

}

function mClick(e) {
    // console.log(e.offsetX);
    // console.log(e.target.offsetWith);
    if (e.offsetX < e.target.offsetWidth / 2) {
        // si l'endroit où je clique sur l'élément boite est plus petit que la taille total de l'él.
        this.innerText = "GAUCHE !" // ajoute le texte Gauche
    } else {
        this.innerText = "DROITE !" // sinon ajoute le texte Droite
    }
}

// function mOver(e) {
//     console.log(e);
//     this.innerText = "over";
//     //console.log("over");
// }

// function mOut(e) {
//     console.log(e);
//     this.innerText = "out";
//     // console.log("out");
// }

/* --------------------------- Cliquer sur un lien -------------------------- */

// document.getElementsByTagName('a')[0].addEventListener('click', clickSurLien);

// function clickSurLien(e) {
//     e.preventDefault(); 
//     // empêché l'élément de faire ce qu'il doit faire par défault // supprimer l'effet du 'a'
//     e.stopPropagation(); 
//     //j'empêche la propagation du click (qd je clique sur le a, je n'active pas le click qu'il y a sur ses parent)
//     console.log("J'ai cliqué sur le lien");
// }

// document.getElementsByTagName('ul')[0].addEventListener('click', clickSurUl)

// function clickSurUl() {
//     //e.stopPropagation();
//     console.log("Jai cliqué sur le Ul");
// }

/* ---------------------------- preventDefault() ---------------------------- */
/* --- https://developer.mozilla.org/fr/docs/Web/API/Event/preventDefault --- */


/* ---------------------------- stopPropagation() --------------------------- */
/* ---------- Évite que l'évènement courant ne se propage plus loin --------- */
/* -------------- dans les phases de capture et de déploiement. ------------- */

