/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Bend the knee, Hooman";
    }

    class Dog extends Animal {
        constructor(name) {
            super();
            this.name = name;
        }
        static greeting = "Nice to meet you";
    }

    // Instances : 

    cat1 = new Cat("Ulysse");
    dog1 = new Dog("Sushi");
    document.getElementById("run").addEventListener("click", () => {
        console.log(`${cat1.sayHello()}\n${dog1.sayHello()}`);
    });

})();


// CORRECTIONS 

// Static = Signifie qu'on peut l'appeler en dehors de la classe. 