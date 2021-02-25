/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    async function promise() {  // Je déclare ma fonction en asynchrone
        let awaitPersons = await window.lib.getPersons(); // Attends que ma promesse asynchrone se réalise pour retourner la variable 
        console.log(awaitPersons);
    };

    document.getElementById("run").addEventListener("click", () => {
        try {
            promise(); // J'appelle ma fonction dans le try
        } catch (error) {
           console.error(); // Sinon j'affiche le message d'erreur qui est "Bad luck"
        }
    });
})();
