/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    document.getElementById("run").addEventListener("click", () => {
        document.getElementById("run").addEventListener("click", () => {
            window.lib.getPosts()
                .then(function (article) {
                    console.log(article);
                })
                .catch(function (err) {
                    console.log(err);
                })
        });



    });
})();

/* Corrections 
Les promises évitent le callback hell. C'est un objet spécifique qui peut avoir trois états : Pending - fulfilled /resolved-rejected. Ce sont les 3 valeurs qu'une promesse renvoit quand elle est appelée 
*/