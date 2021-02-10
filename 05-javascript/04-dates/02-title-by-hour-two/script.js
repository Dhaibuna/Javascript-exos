/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let dayTime = new Date();
//console.log(dayTime); Affiche l'heure dans la console.  

let eveningTime = new Date();
eveningTime.setHours(17.30); 

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

    if(dayTime < eveningTime){
        document.getElementById("target").innerHTML = "Hello"
        }
        else{
        document.getElementById("target").innerHTML = "Good Evening"
        }
    
})();


/*

Qu'est-ce que j'ai ? 

- l'ID du contenu du tag <p id=target>  qu'il faut changer. 

De quoi ai-je besoin ? 

D'une méthode allant chercher l'heure qu'il est. 
D'une condition indiquant qu'apd d'une telle heure, il faut changer le message. 

*/