/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function() {

        let operandOne = parseFloat(document.getElementById("op-one").value);
        let operandTwo = parseFloat(document.getElementById("op-two").value);

        alert(operandOne + operandTwo);

        // perform an addition
    });
    document.getElementById("substraction").addEventListener("click", function() {


        let operandOne = parseFloat(document.getElementById("op-one").value);
        let operandTwo = parseFloat(document.getElementById("op-two").value);

        alert(operandOne - operandTwo);

        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {


        let operandOne = parseFloat(document.getElementById("op-one").value);
        let operandTwo = parseFloat(document.getElementById("op-two").value);

        alert(operandOne * operandTwo);

        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {

        let operandOne = parseFloat(document.getElementById("op-one").value);
        let operandTwo = parseFloat(document.getElementById("op-two").value);

        alert(operandOne / operandTwo);

        // perform an division
    });
})();


// Correction : 

// J'aurais pu déclarer les variables au dessus et puis aller chercher les values.
// Click = fonction donc ca lit seulement ce qui a dans le SCOPE de la fonction 
// Mais ca ne reload pas la page. 

