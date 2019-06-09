/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

class App  {
  constructor(){
    this.activeGame = null; 
     
  }

  getActiveGame(){
    return this.activeGame; 
  }

  //initializeApp

  startGame = () => {
    console.log("started game")
    const game = new Game();
    game.addEndGameCallback(this.gameOver);
    this.activeGame = game; 
    this.activeGame.startGame();
  }

  gameOver = (game_status) =>{
    if ( game_status ===  Game.GAME_WON) { 
        // Task: get the overlay html element using the document.getElementById
        let overlay_html_div = document.getElementById("overlay");
        // Using this html element you've obtained, enalbe the overlay 
        overlay_html_div.style.visibility = "visible";
        // set the class to win 
        overlay_html_div.setAttribute("class", "win"); 
        // say Great Job !!!

        // get the element 
        let game_over_message = document.getElementById("game-over-message");
        game_over_message.innerText = "Great job! ";
        console.log(game_over_message);

        //this.startGame()
    }else{
      let overlay_html_div = document.getElementById("overlay");
      // Using this html element you've obtained, enalbe the overlay 
      overlay_html_div.style.visibility = "visible";
      // set the class to win 
      overlay_html_div.setAttribute("class", "lose"); 
      // say Great Job !!!

      // get the element 
      let game_over_message = document.getElementById("game-over-message");
      game_over_message.innerText = "Sorry, better luck next time!";
      console.log(game_over_message);
    }
  }
 

}
 
const setEventListeners = (app) =>{ 
  const allKeys = document.getElementsByClassName("key");
 

  const KeyEventListener = (event) =>{
    let letter = event.target.innerHTML; 
    app.getActiveGame().handleInteraction(letter,event.target);
     
    console.log(letter);
  }
  //add an event listener for loop for each of the array of 26 letters, have to add an event lsitener to all the buttons, adding an event lsitener to each one, like the pagination
  for ( let i = 0; i < allKeys.length; i++){
    const element = allKeys[i]; 
    element.addEventListener("click",KeyEventListener);
  }

}

setAppStartButtonListener = (app) =>{ 
  // set startButton Listener 
  document.getElementById("btn__reset").addEventListener("click", app.startGame);
}

/////  MAIN GLOBAL FUNCTIONS 
const createApp = () =>{ 
  const app = new App();
  return app; 
}

const setupApp = (app) =>{  

  setAppStartButtonListener(app); 
  setEventListeners(app); 
}

/// RUN THE APP
const main_app = createApp(); 
setupApp(main_app);
 

 



 
