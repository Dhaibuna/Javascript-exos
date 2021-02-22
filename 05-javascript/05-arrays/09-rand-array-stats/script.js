/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.





(function () {

  // your code here
  const arrayOfTenRandomNumbers = []; // crée un tableau vide


  document.getElementById("run").addEventListener("click", function () {

    for (var x = 0; x < 10; x++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1;
      document.getElementById("n-" + (x + 1)).innerHTML = randomNumber; // Je demande que chacun des nombres pick pour la longueur du tableau soit aléatoire. 
      arrayOfTenRandomNumbers.push(randomNumber); // Je push mes random dans ma variable
    }
    let min = Math.min(...arrayOfTenRandomNumbers);
    document.getElementById("min").innerHTML = min;
    // Je vais rechercher le plus petit nombre ---> Mais ca foire 
    let max = Math.max(...arrayOfTenRandomNumbers);
    document.getElementById("max").innerHTML = max;
    // Je vais rechercher le plus grand nombre 
    let sum = arrayOfTenRandomNumbers.reduce((a, b) => { return a + b; });
    document.getElementById("sum").innerHTML = sum;
    // Je vais additionner la somme de tous mes nombres
    let average = sum / arrayOfTenRandomNumbers.length;
    document.getElementById("average").innerHTML = average;
    // Je vais rechercher la moyenne 

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