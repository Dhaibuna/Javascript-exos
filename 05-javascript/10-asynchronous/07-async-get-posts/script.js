/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
   async function promise() {  // Je déclare ma fonction en asynchrone
        let prom = await window.lib.getPosts(); // Attends que ma promesse asynchrone se réalise pour retourner la variable 
        console.log(prom);
    };

    document.getElementById("run").addEventListener("click", () => {
        promise(); // J'appelle ma fonction
    });

})();
