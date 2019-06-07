/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [new Phrase("car wash"), 
                        new Phrase("retail therapy"), 
                        new Phrase("life is beautiful"), 
                        new Phrase("military intelligence"), 
                        new Phrase("stay vacation")]
        //this.phrases = [];
        this.activePhrase = null;
    } 

    // returns a random phrase from the phrases array
    getRandomPhrase(){
        // first select a random index between 0 and 4
        const random_index =  Math.floor(Math.random() * 5); // 3
        // get the object at 'random_index'
        const phrase_object =   this.phrases[random_index]
         return phrase_object
        
    }
    startGame(){
        // Task: get the overlay html element using the document.getElementById
        let overlay_html_div = document.getElementById("overlay");
        // Using this html element you've obtained, hide it. (hint. you might need to check google)
        overlay_html_div.style.display = "none";
        // Task3: get a random phrase, and store it in a variable called 'random_phrase'
        let randomphrase = this.getRandomPhrase();
        // Task4: on the random_phrase variable, call the method 'addPhraseToDisplay'
        randomphrase.addPhraseToDisplay();
        this.activePhrase = randomphrase

    }
    handleInteraction(letter) {
       phrase.checkLetter(letter)
       //check to see if its a win or remove a life, if else statement
       phrase.showMatchedLetter(letter) //if the letter is there, show the matched letter, otherwise remove a life
      
       
       
       //documents.getelementbyclassName(.key) 
       //const keyboard = documents.getelementsbyclassname. 
       //for (let i =0, i<keyboard.length, i++)
       //keyboard[i].addEventlistener('click',()=>
       
       //const newGame = new Game();
       //const phrase = new Phrase();
       //const keyboard = [...document.querySelectorAll('.key')]; //Array of keyboard keys
       //const startButton = document.querySelector('#btn__reset');
       //const overlay = document.querySelector('#overlay');//phrase hunter with the start button
       //Event Handlers
       // Mapping through the onscreen keys and having the event listener run through all the keys
       //keyboard.map(key =>
        //key.addEventListener('click', e=> {
        //    newGame.handleInteraction(e.target.textContent, e.target)
        //}));
        //Function that calls startGame when the start button is clicked.
        //startButton.addEventListener('click', () => {
          //  newGame.startGame(); // Start the Game
        //})
        
    }
}  

/*

Note: all methods are functions. 
    * methods are only defined in a class whereas functions are defined anywhere


*/

/*
a = [1,4,6,9]
index = 2
a[2]
()
*/