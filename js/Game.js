/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    static GAME_LOST = "GAME_LOST"; //static values do not change and stay the same throughout
    static  GAME_WON = "GAME_WON";

    constructor() { //constructor is called when you create a new instance of the class
        this.missed = 0; //this refers to the instance of the game, setting the internal property of missed to zero
        this.phrases = [new Phrase("car wash"), 
                        new Phrase("retail therapy"), 
                        new Phrase("life is beautiful"), 
                        new Phrase("military intelligence"), 
                        new Phrase("stay vacation")]
        //this.phrases = [];
        this.activePhrase = null;
        this.revealed_letters = {}; //empty object to avoid undefined errrors if you need to access a child
        this.lives_left = null; 
        this.game_over_callback = null; 
        this.wrong_letters = {};
    } 

    addEndGameCallback(callback){
        this.game_over_callback = callback; 
    }

    setActivePhrase(active_phrase){
        this.activePhrase = active_phrase; 
        this.activePhrase.buildCharacterFrequencyMap();
        this.revealed_letters = {}; 
        this.wrong_letters = {};
    }

    setLetterAsRevealed(letter){
        if (this.revealed_letters === null){
            this.revealed_letters = { } //sets the revealed letters to an empty object in case they are null
        }
        this.revealed_letters[letter] = true; //sets the value of true
 
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
        let overlay_html_div = document.getElementById("overlay"); //gets and hides the overlay of game over or game won
        // Using this html element you've obtained, hide it. (hint. you might need to check google)
        //overlay_html_div.style.display =   "none";
        overlay_html_div.style.visibility = "hidden"; //hides the game overlay
        // Task3: get a random phrase, and store it in a variable called 'random_phrase'
        let randomphrase = this.getRandomPhrase();
        // Task4: on the random_phrase variable, call the method 'addPhraseToDisplay'
        randomphrase.addPhraseToDisplay();
        //this.activePhrase = randomphrase
        this.setActivePhrase(randomphrase);

        // TODO: remove this when done 
        //console.log(randomphrase.phrase); 

    }
    handleInteraction(letter, key_html_element) {
       let isletter = this.activePhrase.checkLetter(letter);
       //console.log("THis exist ? ",isletter);
       //check to see if its a win or remove a life, if else statement
       //let iscomplete = this.checkForWin();
       if ( isletter === true){
            this.activePhrase.showMatchedLetter(letter ) //if the letter is there, show the matched letter, otherwise remove a life
            this.setLetterAsRevealed(letter);
            // change the character color to indicate right choice
            key_html_element.setAttribute("class","key chosen");
       }else{

           // change the characer color to indicate wrong choice 
           key_html_element.setAttribute("class","key wrong");

           if (  !(letter in this.wrong_letters) ){
              this.removeLife();
               // add this to the list of wrong letters
              this.wrong_letters[letter] = true;        
           }

           
       }
       // check to see if it is a loss due to zero lives left
       if ( this.countLives() <= 0 ){
           this.gameOver(Game.GAME_LOST);
       }
       // check to see if it is a win. 
       if ( this.checkForWin()){
            this.gameOver(Game.GAME_WON);
        }  
    }

    checkForWin(){
        // checks to see if the player has revealed all the letter in the phrase.
        //console.log("revealed letters ",this.revealed_letters);
        //console.log("active phrase =  ",this.activePhrase.phrase);
        let res = this.activePhrase.isCharacterFreqMapSame(this.revealed_letters); //revealed letters are the same as active phrase
        //console.log("comparing gives = ",res); 
        return res; 
    }

    gameOver(status){
        this.game_over_callback(status); 
    }

    countLives(){
        let alllives = document.getElementsByClassName("tries");
        let count_lives_left = 0;
        for (let i = 0; i < alllives.length; i++){
            let target = alllives[i]; 
            let innerhtml = target.innerHTML; 
            if ( innerhtml.indexOf("liveHeart.png") !== -1){ //indexOf tells you if something is in the string or not, and the position of it
                count_lives_left++;
 
            }
        }
        return count_lives_left;   
    }
    //Removing a heart when the person guesses the wrong letter.
    removeLife(){
        let alllives = document.getElementsByClassName("tries");

        let count_lives_left = this.countLives();

        // replace the last_life_index with the lostHEart.png
        if ( count_lives_left > 0){
            let index = -1; 
            for (let i = 0; i < alllives.length; i++){
                let target = alllives[i]; 
                let innerhtml = target.innerHTML; 
                if ( innerhtml.indexOf("liveHeart.png") !== -1){
                    let target_to_replace = alllives[i]; 
                    target_to_replace.innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">'
                    count_lives_left -= 1;
                    break;
                }
               
            }

        }

    }
}  

