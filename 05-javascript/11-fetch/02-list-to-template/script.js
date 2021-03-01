/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const displayInTarget = document.querySelector("#target"); // Je vais chercher l'élément dans mon HTML 
    let heroesStructure = document.getElementById("tpl-hero");
    document.getElementById("run").addEventListener("click", () => {
        fetch("http://localhost:3000/heroes") // J appelle la méthode fetch 
            .then(response => response.json()) // Je formate la réponse que je vais recevoir au format JSON
            .then(data => {
                console.log(data);
                data.forEach(({ name, alterEgo, abilities }) => {
                    let iteratedNode = heroesStructure.cloneNode(true).content; // avec content, je prends le contenu de mon template, pas juste la balise 
                    iteratedNode.querySelector(".name").textContent = name;
                    iteratedNode.querySelector(".alter-ego").textContent = alterEgo;
                    iteratedNode.querySelector(".powers").textContent = abilities.join('/');
                    displayInTarget.appendChild(iteratedNode);
                });
            });

    });
})();
