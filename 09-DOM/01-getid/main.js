/* -------------------------------------------------------------------------- */
/*                                     DOM                                    */
/* -------------------------------------------------------------------------- */


/* -------------------------------- les GETID ------------------------------- */

/* ----------------- cibler un élémément avec getElementById ---------------- */

//console.log(document.getElementById("demo")); 

// je vais selectionner l'élément dans mon HTML qui porte l'ID 'demo'

/* -------------------------------------------------------------------------- */


/* ------------------------------- .innerHTML ------------------------------- */
/* ------------------- récupère ou définit la syntaxe HTML ------------------ */
/* ----------------- décrivant les descendants de l'élément. ---------------- */

var htmlDemo = document.getElementById("demo").innerHTML;
// Afficher le contenu de l'élément avec les balises

/* -------------------------------- .innerText ------------------------------- */

var textDemo = document.getElementById("demo").innerText;
// afficher le texte de l'élément ID demo

console.log(htmlDemo);
console.log("---------------");
console.log(textDemo);

/* -------------------------------------------------------------------------- */


/* -------------------------- Remplacer le contenu -------------------------- */

//document.getElementById('demo').innerHTML = "Bonjour tout le monde"; 
// remplacer le contenu par le nouveau 

/* -------------------------------------------------------------------------- */


/* ------------------------------ .textContent ------------------------------ */
/* ----------------------- une alternative similaire, ----------------------- */
/* ------- bien qu’il y ait d’importantes différences entre les deux. ------- */


document.getElementById('demo').innerHTML = "Bonjour tout le monde";
document.getElementById('demo').textContent = document.getElementById("test").textContent;

//textcontent pareil que le innertext sauf que textcontent affiche aussi le texte invisible ( par exemple  à la suite d'un display none) alors que innertexte n'affiche que le texte visible.

/* -------------------------------------------------------------------------- */
