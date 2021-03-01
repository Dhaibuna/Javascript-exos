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
            let countingArticles = 0; // Je me mets à 
            articles.forEach(comment => {
                window.lib.getComments(comment.id, ((err, comments) => {
                    //console.log(comments); Cette ligne seule ne va jamais rajouter les commentaires obtenus.
                    comment.comments = comments;
                    /* comments = [i] (faut imaginer) => Comme mon comment est un object, dans les variables comment, je lui
                    demande de mettre le paramètre comments */
                    if(++countingArticles === articles.length);{
                        console.log(articles); // Pas bon tout seul parce que console log est asynchrone. Donc je vais créer une variable pour compter mes post "counting articles"
                    }
                    
                }));
            });
            //console.log(articles); // Pas bon tout seul parce que console log est asynchrone. Donc je vais créer une variable pour compter mes post "counting articles"
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

/* Corrections 

getComments va avoir besoin d'un paramètre supplémentaire pour que je récupère les id de cette article unique. 
problème : Il y a plusieurs appels à faire, mais on veut être sur que tous les appels sont faits avant de passer à la suite. 
1) On appelle le getPost, on va recevoir une fonction qui recoit deux paramètres. 


*/