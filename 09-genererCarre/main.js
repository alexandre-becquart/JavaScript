/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  Exercices                                 */
/* -------------------------------------------------------------------------- */

/* --------------------------- Générer des carrés --------------------------- */

document.getElementById('ajouter').addEventListener('click', ajouterCarre);
// au clic sur le bouton ajouter exécuter la FCT ajouterCarre()

document.getElementById('generer').addEventListener('click', genererCarre);
// au clic sur le bouton generer exécuter la FCT genererCarre()

document.getElementById('supprimer').addEventListener('click', supprimer);
// au clic sur le bouton supprimer exécuter la FCT supprimer()

var couleur = [];
// je crée un tableau vide dans leque je vais ajouter les couleurs demandés dans les prompt
// il faut le mettre à l'extérieur pour le vider sinon il cumule les couleurs

function ajouterCarre() {
    var choixCouleur = prompt("Choisissez une couleur"); // je lui demande les couleurs
    console.log(couleur);
    if (choixCouleur) { // si choixCouleur existe 
        couleur.push(choixCouleur) // ajoute là dans le tableau couleur
        ajouterCarre() // relancer la FCT pour ajouter d'autres couleurs
    }
}

function genererCarre() {
    for (var i = 0; i < couleur.length; i++) {
        // je boucle pour générer autant de carré qu'il y a de couleur dans mon tableau 
        var div = document.createElement('div');
        // je crée des div
        div.style.backgroundColor = couleur[i];
        // je lui ajoute la couleur repris dans le tableau reprise avec la boucle
        div.innerHTML = couleur[i];
        // j'ajoute du texte au nom de la couleur
        document.getElementsByTagName('main')[0].appendChild(div)
        // je les ajoute dans au fur et à mesure dans mon main

    }
    couleur = []; // je vide le tableau pour éviter de cumuler les couleurs
}

function supprimer() {
    document.getElementsByTagName('main')[0].innerHTML = "";
    // je supprime tout ce qu'il y a dans le main 
}