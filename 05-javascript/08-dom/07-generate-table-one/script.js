/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    //Je prends l'ID target 
    let getElement = document.getElementById("target");
    // Je crée le squelette de la table HTML
    let table = document.createElement("table");
    // J'ajoute ma table à mon élément target 


    getElement.appendChild(table);

    for (let x = 0; x < 10; x++) {
        // Je crée mes colonnes 

        let tableRow = document.createElement("tr");
        // Je l'ajoute a ma table
        table.appendChild(tableRow);
        // let textRow = document.createTextNode("Ceci n'est pas un titre de colonne");
        // tableRow.appendChild(textRow);
        // Je crée mes Td 
        let tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        // Je crée le textnode
        let textCell = document.createTextNode("Ceci n'est pas une cellule");
        tableData.appendChild(textCell);
    };

})();
