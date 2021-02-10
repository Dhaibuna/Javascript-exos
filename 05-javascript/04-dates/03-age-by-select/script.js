/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// let birthDay = document.getElementById("dob-day").value;
// let birthMonth = document.getElementById("dob-month").value;
let birthYear = document.getElementById("dob-year").value;
let todayDate = new Date(); // date actuelle

(function () {


    // your code here
    document.getElementById("run").addEventListener("click", function () {
        let userBirthDate = todayDate - birthYear;
        document.write(userBirthDate);
    });
})();


/*

1. Qu'est ce que j'ai ?

- L'ID run pour lancer l'écoute
- L'ID des jours / mois et des années dont il faut aller récupérer la valeur.

2. De quoi j'ai besoin ?

- D'aller récupérer les valeurs contenues dans les ID ( pour ca il faut des variables)
- D'une fonction d'écoute sur le bouton "Run the script"
- D'Aller rechercher la date que le visiteur sélectionne via les champs de valeur proposés
- Faire un calcul  : Date actuelle - la date entrée par l'utilisateur
- Afficher l'âge du visiteur en fonction de la sélection des champs par le visiteur

*/