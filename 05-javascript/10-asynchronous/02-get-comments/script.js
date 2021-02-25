/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((err, articles) => {
            articles.forEach(comment => {
                window.lib.getComments(comment.id,((err, comments)=>{
                    console.log(comments)
                }));
            });
        });
    });
})();


/*
1. Qu'est ce qu'il me faut comme résulat ?

Pour CHAQUE article, je dois aller chercher SES commentaires.

2. Qu'est-ce que j'ai ?

Une fonction getPosts et une fonction getComments, que je dois appeler dans la fonction getPosts.

3. De quoi j'ai besoin pour avancer ?

- FOREACH sur les articles.
- Lancer la fonction getComments.
- console log de mes functions


*/