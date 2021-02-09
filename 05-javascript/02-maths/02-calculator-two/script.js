/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(() => {
    // to get the value of an input: document.getElementById("element-id").value


    const performOperation = operation => {

        let operandOne = parseFloat(document.getElementById("op-one").value);
        let operandTwo = parseFloat(document.getElementById("op-two").value);
        // perform the operation
        switch (operation) {
            case 'addition':
                alert(operandOne + operandTwo);
                break;
            case 'substraction':
                alert(operandOne - operandTwo);
                break;
            case 'multiplication':
                alert(operandOne * operandTwo);
                break;
            case 'division':
                alert(operandOne / operandTwo);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false), 
        ),
    );
})();

// Correction 

// Selectionne dans les DOM tous les boutons pour en faire un array. Dans l'array on fait un FOREACH : 
// Sur chaque bouton, crée l'event click et on appelle la fonction " performOperation " 
// avec son argument qui là est "Opération" pour aller chercher la valeur de l'id du bouton