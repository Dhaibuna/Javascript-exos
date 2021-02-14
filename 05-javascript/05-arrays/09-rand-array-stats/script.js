/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const arrayOfTenRandomNumbers = []; //crée un tableau vide de longueur 
const random = Math.floor(Math.random() * 100) + 1;



(function () {

    // your code here
    function mathRandom(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomNumbers = mathRandom(1, 100);
    document.getElementById("run").addEventListener("click", function () {

        let x;
        for (x=0; x<10; x++){
            arrayOfTenRandomNumbers[x] = randomNumbers;
            document.getElementById('n-'+(x+1)).innerHTML= arrayOfTenRandomNumbers[x];
        }
        
    

    });




})();


/*

1. Qu'est -ce que j'ai

- Un id pour chacun des nombres
- Un id max - min - summ - average
- Un id run pour l'écoute

2. De quoi j'ai besoin ?

- Une écoute sur le bouton qui se déclenche au clic
- D'une génération de nombres avec Math.random
- D'une boucle for  dans l'array, implémenter un random number
- Méthode pour afficher les définitions Math.min & math max etc ?
*/