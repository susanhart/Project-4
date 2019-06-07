/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrase = new Phrase("THIS IS A VERY NEW PHRASE");
let game = new Game();
document.getElementById("btn__reset").addEventListener("click", startButton);
function startButton(){
  game = new Game();
  game.startGame();
}
const allKeys = document.getElementsByClassName("key");
console.log(allKeys);
//add an event listener for loop for each of the array of 26 letters, have to add an event lsitener to all the buttons, adding an event lsitener to each one, like the pagination

//console.log(phrase.phrase);
//
//console.log(game.getRandomPhrase());
//phrase.addPhraseToDisplay();

//for (let i = 0; i < game.phrases.length; i++){
  //  console.log(game.phrases[i].phrase)

//}

//console.log("Susan I started here") ;
//function printPhrase(phrase_object){
  //  console.log(phrase_object.phrase)
//}


//game.phrases.forEach(printPhrase);
//game.phrases.forEach(function(phrase_object){
  //  console.log(phrase_object.phrase);
//})

// Es6 'fat arrow' syntax
// game.phrases.forEach((phrase_object,index)=>{
//     console.log(`Phrase ${index} - phrase: ${phrase_object.phrase}`);
//     console.log(`Susan the phrase at index - ${index} is ${phrase_object.phrase}`)
// })

// crate a phrase object
//const phrase_object = new Phrase("Hi Susan, what is your name");
//console.log(phrase_object)

// class Car{
//     constructor(){
//         this.color = "red";
//         this.model = "Toyota";
//         this.year = 2019;
//         this.engine_type = "V6";
//         this.number_of_doors = 4;
//         this.size = "SUV";
//         this.automatic = false;
//     }
// }

// class ToyotaCar{
//     constructor(color, year,engine_type, size, automatic){
//         this.color = color;   // any color
//         this.year = year    // any year from 1900 till date
//         this.engine_type = engine_type; // V6 or  V8
//         this.number_of_doors = 4; 
//         this.size = size       // SUV or SEDAN
//         this.automatic = automatic; // boolean
//     }
//     // methods or behaviors
//      drive(){
//         console.log("I am now driving....Voom Voom Voom");
//     }

//     honk(){
//         console.log("HONK HONK HONK")
        
//     }
//     park() {
//         console.log("Car is parked.")
//     }

//     getLicenseNumber(){
//         return "AKJRJY21SHD";
//     }

//  }

 
  

//  const susan_car = new ToyotaCar("red",2019,"V6", "SUV",true );
//  susan_car.drive()
//  susan_car.honk()
//  susan_car.park()
//  //const license = susan_car.getLicenseNumber();
//  console.log(susan_car.getLicenseNumber() ) 
// const community_cars = [new ToyotaCar("red",2019,"V6", "SUV",true ), 
//                         new ToyotaCar("green",2018,"V8", "SEDAN",false ),
//                         new ToyotaCar("yellow",2016,"V6", "SUV",true ),
//                         new ToyotaCar("blue",2017,"V8", "SEDAN",false ),
//                         new ToyotaCar("white",2014,"V6", "SUV",true )];

//console.log("first car",susan_car);
//console.log("second car ",tobe_car);

// display only years 
//console.log('susan you car engine type is ',susan_car.engine_type)
//console.log('tobe your car engine type is', tobe_car.engine_type)

// display the cummunity car at position 2  
//const index = 2; 
//console.log (community_cars[ index])

// loop through the cars and concole.log them 
// for (let i = 0; i < community_cars.length; i++){
//     console.log("Susan the value of i is currently: ",i)
//     console.log(community_cars[i])
//     //console.log (community_cars [i])

// } 

// display all the colors of the community cars 
// for (let i =0; i < community_cars.length; i++){
//     console.log (community_cars[i].year)

    
//}
