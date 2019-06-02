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