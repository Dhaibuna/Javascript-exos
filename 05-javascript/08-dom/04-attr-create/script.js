/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    // get the value
    let image = document.getElementById("source").getAttribute("data-image");
    //console.log(img);

    //Set value to create a new image element
    let newImg = document.createElement("img");
    newImg.setAttribute("src", image);  // Attribut - Value
    //console.log(newImg);
    document.getElementById("target").appendChild(newImg);
    //Remove attribute 
    document.getElementById("source").remove(); // Pas besoin de spécifier le remove dans attribute

})();

