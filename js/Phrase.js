/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
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