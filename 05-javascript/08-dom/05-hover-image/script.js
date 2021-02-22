/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    // Je vais rechercher Img
    let img = document.querySelector("img");

    // Je vais chercher les attributs correspondants à mes deux actions : 
    let notHoveredImg = img.getAttribute("src");
    let HoveredImg = img.getAttribute("data-hover");

    img.addEventListener("mouseover", () => {
        img.src = HoveredImg;
    }); // L'élément de départ est l'image de départ, sans avoir été hovered. Une fois la souris passée sur l'élément, l'iamge hovers apparait
    
    img.addEventListener("mouseout", () => {
        img.src = notHoveredImg // L'élément de départ revient une fois que le curseur de la souris quitte l'élément. 
    });

})();


