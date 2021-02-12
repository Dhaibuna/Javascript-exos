/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function () {


    // your code here

    document.getElementById("run").addEventListener("click", function () {

        let userChosenYear = document.getElementById("year").value;
        // console.log(userChosenYear); M'affiche bien la date choisie 
        let yearToInspect = new Date(userChosenYear);
        // console.log(yearToInspect); M'affiche bien la date de l'année choisie au 1er Janvier à 1h du mat
        // console.log(yearToInspect.getDay()); Rend le jour par laquelle l'année choisie a commencé
        let dayInWeek = yearToInspect.getDay();
        let dayInMonth = yearToInspect.getDate();
        let spookyDays = 0;
        let months = yearToInspect.getMonth();

        for (months = 0; months < 12; months++) {

            if (dayInWeek == 5 && dayInMonth == 13) {
                spookyDays++;
            };
        }
console.log(spookyDays);
    });



})();



/*

1. Qu'est-ce que j'ai ?

- ID run pour l'écoute
- ID year pour l'input

2. De quoi j'ai besoin ?

- D'une écoute sur le bouton "run"
- Aller rechercher l'input ( l'année ) rentrée par l'user
- Une boucle for qui va chercher tous les mois et tous les vendredi 13...
- display dans un document.write()
*/
