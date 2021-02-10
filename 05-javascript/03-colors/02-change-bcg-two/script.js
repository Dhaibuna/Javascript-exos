/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.





(function () {

    // your code here

        document.getElementById("run").addEventListener("click", function() {
            let userColorChoice = document.getElementById("color").value;
            document.body.style.backgroundColor = userColorChoice;
    
        });
    
    })();
    

/*

Notes :

1. Qu'est ce que j'ai :

- Id que je dois aller chercher

2. De quoi j'ai besoin :

- Aller rechercher l'input de l'User via une Variable me permettant d'aller recherche mon Id
- D'une écoute sur le bouton correspondant à l'Id 
- D'une méthode pour afficher la fonction */