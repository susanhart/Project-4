/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// MAIN GLOBAL VARIABLES

const game = new Game(); 

 // GameOver function 
const gameOver = (game_status) =>{
  if ( game_status ===  Game.GAME_WON) { 
      // Task: get the overlay html element using the document.getElementById
      let overlay_html_div = document.getElementById("overlay");
      // Using this html element you've obtained, enable the overlay 
      overlay_html_div.style.visibility = "visible";
      // set the class to win 
      overlay_html_div.setAttribute("class", "win"); 
      // say Great Job !!!

      // get the element 
      let game_over_message = document.getElementById("game-over-message");
      game_over_message.innerText = "Great job! ";
      //console.log(game_over_message);

      //this.startGame()
  }else{
    let overlay_html_div = document.getElementById("overlay");
    // Using this html element you've obtained, enable the overlay 
    overlay_html_div.style.visibility = "visible";
    // set the class to win 
    overlay_html_div.setAttribute("class", "lose"); 
    // say Great Job !!!

    // get the element 
    let game_over_message = document.getElementById("game-over-message");
    game_over_message.innerText = "Sorry, better luck next time!";
    //console.log(game_over_message);
  }
  // reset game 
  resetGame();
}
 
// setEventLister: sets the event listeners for all the qwerty keys 
const setEventListeners = () =>{ 
  const allKeys = document.getElementsByClassName("key");
 

  const KeyEventListener = (event) =>{
    let letter = event.target.innerHTML; 
    game.handleInteraction(letter,event.target);
     
    //console.log(letter);
  }
  //add an event listener for loop for each of the array of 26 letters, have to add an event lsitener to all the buttons, adding an event lsitener to each one, like the pagination
  for ( let i = 0; i < allKeys.length; i++){
    const element = allKeys[i]; 
    element.addEventListener("click",KeyEventListener);
  }

}

// setStartButtonListener: sets the eventlistener for the start button  
const setStartButtonListener = () =>{ 
  const startGame = (event) =>{
    game.startGame();
  }
  // set startButton Listener 
  document.getElementById("btn__reset").addEventListener("click", startGame);
}

// refresh the game state 
const resetGame = () =>{
  // set the phrase div to empty ul 
  let phrase_html = document.getElementById("phrase");
  phrase_html.innerHTML = "<ul></ul>";

  // change the lives back to 'liveHeart.png'
  
  let alllives = document.getElementsByClassName("tries");
  for ( let i = 0; i < 5; i++){
    let element = alllives[i]; 
    element.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">';
  }

  // set the class attributes for the keys back to "key"

  // first get all keys
  const allKeys = document.getElementsByClassName("key");
  for (let i = 0; i < allKeys.length; i++){
    let element = allKeys[i]; 
    element.setAttribute("class","key");
  } 


 
 
}
 
//  calling the functions and the callback function
game.addEndGameCallback(gameOver);
setStartButtonListener();
setEventListeners();
 
 

 



 
