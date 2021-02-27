/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // // your code here
    // const promises = [window.lib.getPosts(), window.lib.getComments()];
    // /* I create an array so I can use promise.all() method further */

    // document.getElementById("run").addEventListener("click", () => {
    //     Promise.all(promises)
    //     .then((promises)=>{
    //     });
    //     console.log(promises);
    // }); Ne marche pas :'(

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts()
            .then((articles) => {
                articles.forEach(commentItem => { // 
                    // console.log(commentItem) Me donne les commentaires correspondants aux articles récupérés
                    /* Pour chaque article récupéré, je vais aller chercher ses commentaires. Mais d'abord je dois aller 
                    chercher les commentaires ( les appeler ) de la fonction getComments*/
                    window.lib.getComments()
                        .then((id) => {
                            // console.log(id); Va chercher tous les objets contenus dans les articles
                            commentItem.comments = id
                            console.log(commentItem)
                        });
                });
            })
    });
})();
