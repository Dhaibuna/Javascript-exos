/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here

    const getImgDom = document.querySelector("img");
    let index = 0;

    document.getElementById("next").addEventListener("click", () => {
        getImgDom.setAttribute("src", gallery[index]);
        
        if (gallery.length > index) {
            index++;  // index = index+1
        }else{
            index=0;
        }
    });

})();


/*

- Aller chercher l'attribut avec Get et le stocker dans une variable
- Modifier l'attribut avec set 
- Condition if pour la longueur de mon tableau
*/