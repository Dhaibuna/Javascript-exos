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

    let operandOne = parseInt(document.getElementById("op-one").value);
    let operandTwo = parseInt(document.getElementById("op-two").value);
    let result;
    const performOperation = operation => {
        // perform the operation
    switch(operation){
    case 'addition': 
    alert(result = operandOne + operandTwo);
    break; 
    case 'substraction': 
    alert(result = operandOne - operandTwo);
    break; 
    case 'multiplication': 
    alert(result = operandOne * operandTwo);
    break; 
    case 'division': 
    alert(result = operandOne / operandTwo );
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

// This code might no work on Chrome navigator 