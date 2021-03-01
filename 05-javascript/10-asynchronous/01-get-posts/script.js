/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", ()=>{
        window.lib.getPosts((err, article)=>{
            console.log(err, article);
        })
    } )
})();



/* Corrections 

Callback = Quelque chose qu'on va appeler en retour. 
Ici : " Vas chercher les posts, et renvoie les quand tu as fini"
Privilégier les fonctions flèchées. 
Window.lib.getPosts recoit un callback en fonction, qui recoit deux paramètres : Une erreur si c'est faut et un tableau d'article si c'est vrai 

*/
