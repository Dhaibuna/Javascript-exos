/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    const userAge = prompt ("What's your age ?");
    const userGender = prompt ("What's your gender ?");
    const userTwown = prompt ("Where do you live?");

(function() {

    const confirmUserData = confirm ("You are " + userAge + " years old " + "and you are a " + userGender + "." +
    " \rYour hometown is Liege" + ". " +
    "\r" +
    " \rAre those informations about you correct ?");

if(confirmUserData === true){
    alert("Welcome!");
}else{
    const userAge = prompt ("What's your age ?");
    const userGender = prompt ("What's your gender ?");
    const userTwown = prompt ("Where do you live?");
    
    const confirmUserData = confirm ("You are " + userAge + " years old " + "and you are a " + userGender + "." +
    " \rYour hometown is Liege" + ". " +
    "\r" +
    " \rAre those informations about you correct ?");
}


})();
