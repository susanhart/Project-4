/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.character_frequency = null; 
        //
    };
    //console.log(phrase.phrase)
    
    /**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
        //let html_word = "<ul>"
        const temporary = this.phrase; 
        // get the html div element
        let phrase_html_div = document.getElementById("phrase");
        //phrase_html_div.removeChild(phrase_html_div.firstChild);
        let phrase_ul = document.createElement("UL")
  

        for (let i = 0; i < temporary.length; i++){
            const character = temporary[i]; 
 
            let single_li = document.createElement("LI");
            let text = null;
            //Putting a space where there is a space, and not a letter.
            if (character === " "){    
                
                 text = document.createTextNode(" ");      
                single_li.setAttribute("class","space");
                 
            }else{ 
                //If it is a character, set the class attribute to hide letter.
 
                 text = document.createTextNode(character);         
                single_li.setAttribute("class",`hide letter ${character}`); 
            }
            single_li.appendChild(text);
            phrase_ul.appendChild(single_li);            
 
        }
        phrase_html_div.appendChild(phrase_ul);
    };
    checkLetter(letter) {
        //console.log(" checkLetter:: checking ",letter); 

        return this.phrase.includes(letter); 
        
    }

    // buildCharacterFrequencyMap: builds an object that keeps one copy of each character in the phrase
    // e.g car wash => {c:true, a:true, w:true, h:true, s:true, r:true}
    buildCharacterFrequencyMap(){ 
        let charfreq = {};
        for ( let i = 0; i < this.phrase.length; i++){
            let char = this.phrase[i]; 
            if ( char !== " "){
                charfreq[char] = true; 
            }
           
             
        }
        this.character_frequency = charfreq; 
        //console.log(charfreq );

    }

    // Show the letters that match and hide the ones that don't.
    showMatchedLetter(letter) {
        let matchedLetters = document.getElementsByClassName(letter); 
        let i;
        for (i = 0; i < matchedLetters.length;i++) {
            matchedLetters[i].classList.remove("hide");
            matchedLetters[i].classList.add("show");
        }

    };

    // isCharacterFreqMapSame: compares the input(character_freq_map) with the object's character frequence
    // and returns true if they are the same and false otherwise 
    // e.g car wash => {c:true, a:true, w:true, h:true, s:true, r:true}
    // e.g input => {c:true, r:true, a:true}
    isCharacterFreqMapSame(character_freq_map){

        for ( let letter in this.character_frequency){
            if ( letter in character_freq_map){
                if ( this.character_frequency[letter] !== character_freq_map[letter]){
                    return false; 
                }
            }else{
                return false; 
            }
        }
        return true; 
    }
}
 

