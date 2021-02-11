/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let dateOfToday = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
// Arguments 

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    document.getElementById("target").innerHTML = (dateOfToday.toLocaleDateString('en-UK', options));

})();

/*
Qu'est ce que j'ai ?

-L'Id de mon content que je dois changer

De quoi est-ce que j'ai besoin ?

- D'aller chercher mon content pour le modifier avec InnerHTML
- Variable qui va stocker la date à afficher ( en anglais )

*/