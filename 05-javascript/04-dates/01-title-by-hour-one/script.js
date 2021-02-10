/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let dayTime = new Date();
//console.log(dayTime); Affiche l'heure dans la console.  

let eveningTime = new Date();
eveningTime.setHours(18); 

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
if(dayTime < eveningTime){
document.getElementById("target").innerHTML = "Hello"
}
else{
document.getElementById("target").innerHTML = "Good Evening"
}
    // your code here

})();


/*

Qu'est-ce que j'ai ? 

- l'ID du contenu du tag <p id=target>  qu'il faut changer. 

De quoi ai-je besoin ? 

D'une méthode allant chercher l'heure qu'il est. 
D'une condition indiquant qu'apd d'une telle heure, il faut changer le message. 

*/