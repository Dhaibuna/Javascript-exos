/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */ 

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch('http://localhost:3000/heroes') // Appel à la méthode fetch 
    .then(response => response.json()) // Je formate la réponse que je vais recevoir au format JSON. Qui va lui même nous renvoyer une promesse. 
    .then(data => console.log(data)); // Cette promesse sert a récupérer les données renvoyées par la promesse précédente
})();
