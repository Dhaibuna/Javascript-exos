/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    // Je crée la classe "Person" avec 2 propriétés : "firstname" & "lastname"
    class Person{
        constructor(firstname, lastname){
            this.firstname = firstname; 
            this.lastname = lastname;
        }
        get identity() {   // Avec get je vais rechercher.
            return `${this.firstname} ${this.lastname}`;
        };

        set identity(separated) {  // Set est un mutateur.
           let Newidentity = separated.split(' ');
            this.firstname = Newidentity[0];
            this.lastname = Newidentity[1];
        };
    }

    document.getElementById("run").addEventListener("click", ()=>{
        let person1 = new Person("Ulysse", "Lechat");
        console.log(person1.identity);
        person1.identity = ("Sushi Lechien"); // En une seule string, parce que la fonction "Setter" sépare d'elle même la string de par son contenu 
        console.log(person1.identity);
    });
})();
