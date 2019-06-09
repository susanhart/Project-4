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
            if (character === " "){    
                
                 text = document.createTextNode(" ");      
                single_li.setAttribute("class","space");
                 
            }else{
 
                 text = document.createTextNode(character);         
                single_li.setAttribute("class",`hide letter ${character}`); 
            }
            single_li.appendChild(text);
            phrase_ul.appendChild(single_li);            
 
        }
        phrase_html_div.appendChild(phrase_ul);
    };
    checkLetter(letter) {
        console.log(" checkLetter:: checking ",letter); 

        if (this.phrase.includes(letter)) {
            return true;
        }else {
             return false;
        }
        
    }

    buildCharacterFrequencyMap(){ 
        let charfreq = {};
        for ( let i = 0; i < this.phrase.length; i++){
            let char = this.phrase[i]; 
            if ( char !== " "){
                charfreq[char] = true; 
            }
           
             
        }
        this.character_frequency = charfreq; 
        console.log(charfreq );

    }

    showMatchedLetter(letter) {
        let matchedLetters = document.getElementsByClassName(letter); 
        let i;
        for (i = 0; i < matchedLetters.length;i++) {
            matchedLetters[i].classList.remove("hide");
            matchedLetters[i].classList.add("show");
        }

    };

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
 

/*
 // retail therapy
<div id="phrase" class="section">
    <ul>
        <li class="hide letter h">h</li>
        <li class="hide letter o">o</li>
        <li class="hide letter w">w</li>
        <li class="space"> </li>
        <li class="hide letter a">a</li>
        <li class="hide letter r">r</li>
        <li class="hide letter e">e</li>
        <li class="space"> </li>
        <li class="hide letter y">y</li>
        <li class="hide letter o">o</li>
        <li class="hide letter u">u</li>
    </ul>
</div>
*/