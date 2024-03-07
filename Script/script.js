// Create a JavaScript function that permits the creation of a hamburger object
// Consider that a hamburger has many options – that might include
/*
    different types of buns,
    vegetable garnishes, 
    assortments of cheeses, 
    specialty sauces, 
    different meat patties(beef, chicken, vegetarian), 
    single, double, or triple patty, 
    Pickles, hot peppers, olives etc.
*/
// add some extra if you want
// Make sure that the function allows for the output of a sentence that describes the hamburger, too


let output = document.querySelector(".output")

function Contructor(typeOfBun, vegetable, cheese, sauces, meat, numberOfPatty, Pickles){
    this.typeOfBun = typeOfBun;
    this.vegetable = vegetable;
    this.cheese = cheese;
    this.sauces = sauces;
    this.meat = meat;
    this.numberOfPatty=numberOfPatty;
    this.Pickles = Pickles;
}

let obj = new Contructor("Regular Bun", "Tomato", "Cheddar", "BBQ", "chicken", 1, "Pickles")

output.textContent =`You will get ${obj.typeOfBun} with ${obj.sauces}, ${obj.cheese}, ${obj.sauces} sauce,  ${obj.meat}, ${obj.numberOfPatty}, and with ${obj.Pickles}`;