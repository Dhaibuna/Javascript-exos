/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here

    const birdsNamesGrabbing = birds.map(function (birds) {
        return birds.name;
    });
    //console.log(birdsNamesGrabbing);

    // const birdsNamesFem = birds.map(function (birds) {
    //     return birds.fem;
    // });
    //console.log(birdsNamesFem);

    const birdsAdjectives = Array.from(adjectives); // Avec Array.from, je crée un tableau apd de mon set 
    //console.log(birdsAdjectives); 


    document.getElementById("run").addEventListener("click", function () {
        const randomBird = Math.floor(Math.random() * birdsNamesGrabbing.length);
        //console.log(birdsNamesGrabbing [randomBird]);
        const randombirdsAdjectives = Math.floor(Math.random() * birdsAdjectives.length);
        //console.log( birdsAdjectives[randombirdsAdjectives]);
        if (birds.fem == true) {
            console.log("salut");
            document.getElementById("target").innerHTML = `${birdsNamesGrabbing[randomBird]} ${birdsAdjectives[randombirdsAdjectives]}e`;
        } else {
            document.getElementById("target").innerHTML = `${birdsNamesGrabbing[randomBird]} ${birdsAdjectives[randombirdsAdjectives]}`;

        };

    });
})();

// Ne prends pas en compte la condition ....et donc n'accorde pas l'adj



/*

1. Qu'est ce que j'ai ?

- Deux arrays : Noms + adjectifs à accorder
- Un id run pour l'écoute
- Un id target pour la phrase à changer

2. De quoi j'ai besoin ?

- D'une écoute sur le bouton run
- Une manip du HTML inner.HTML pour modifier aléatoirement le text au click.
- D'une méthode pour aller chercher de manière aléatoire un élément de chaques tableaux
- Le problème qui se pose est d'aller chercher des clés dans les objets du premier tableau.
- Une concaténation d'un des éléments du tableau noms et d'un des élément du tableau adjectif
- D'un condition if pour savoir si la clé "fem=true"

*/