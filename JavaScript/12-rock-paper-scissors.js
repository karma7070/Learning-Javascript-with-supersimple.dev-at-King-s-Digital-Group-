

      const score = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0,
      }; //since local storage stored the values in the object as string, JSON.parse converts the string stored into the initial values {wins: , losses: , ties: } and if null default is printed

      console.log(score); //used to get score which was stored in local storage at the 'scissors option' if statement

      //convert back to values with JSON.parse

      let playerMove = '"value here"';
      let comMove = '"value here"';
      let result = '';

      //in order for this to work <p> neeeds a text to modify to this, I suffered bfr figuring this out, even AI couldn't help😭😭😭

      function updateScoreElement() {
        document.querySelector(".js-result").innerHTML = `${result}`;

        //since playermove and commove return strings containing either rock paper or scissors we can use them to select which image to display.
        document.querySelector(".js-moves").innerHTML =
          `You <img class="move-js" src="${playerMove.toLowerCase()}-emoji.png"> <img class="move-js" src="${comMove.toLowerCase()}-emoji.png"> Computer`;

          
        document.querySelector(".js-score").innerHTML =
          `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
      }

      updateScoreElement();

      function pickComMove() {
        const randNum = Math.random();

        comMove = "";

        if (randNum >= 0 && randNum < 1 / 3) {
          comMove = "Rock";
        } else if (randNum >= 1 / 3 && randNum < 2 / 3) {
          comMove = "Paper";
        } else if (randNum >= 2 / 3 && randNum < 1) {
          comMove = "Scissors";
        }

        return comMove;

        // return statements help us a get a value or variable out of a function

        //returning a variable is preferred to using global variables bcs it easily avoids naming conflicts
      }

      function playGame(pMove) {
        playerMove = pMove;

        comMove = pickComMove();

        //   console.log(comMove);

        result = "";

        //Scissors Selection section

        if (playerMove === "Scissors") {
          if (comMove === "Rock") {
            result = "Computer Wins";
          } else if (comMove === "Paper") {
            result = "User Wins";
          } else if (comMove === "Scissors") {
            result = "It is a Tie";
          }

          if (result === "User Wins") {
            score.wins++;
          } else if (result === "Computer Wins") {
            score.losses++;
          } else if (result === "It is a Tie") {
            score.ties++;
          }

          localStorage.setItem("score", JSON.stringify(score)); //'score' is the name of the variable stored and is used to get it back and JSON.stringify(score) converts the data into a string so it can be stored by local storage since it only stores strings
        }

        //Paper Selection section
        else if (playerMove === "Paper") {
          comMove = pickComMove();

          result = "";

          if (comMove === "Rock") {
            result = "User Wins";
          } else if (comMove === "Paper") {
            result = "It is a Tie";
          } else if (comMove === "Scissors") {
            result = "Computer Wins";
          }

          if (result === "User Wins") {
            score.wins++;
          } else if (result === "Computer Wins") {
            score.losses++;
          } else if (result === "It is a Tie") {
            score.ties++;
          }

          localStorage.setItem("score", JSON.stringify(score));
        }

        //Rock selection section
        else if (playerMove === "Rock") {
          comMove = pickComMove();

          result = "";

          if (comMove === "Rock") {
            result = "It is a Tie";
          } else if (comMove === "Paper") {
            result = "Computer Wins";
          } else if (comMove === "Scissors") {
            result = "User Wins";
          }

          if (result === "User Wins") {
            score.wins++;
          } else if (result === "Computer Wins") {
            score.losses++;
          } else if (result === "It is a Tie") {
            score.ties++;
          }

          localStorage.setItem("score", JSON.stringify(score));
        }

        updateScoreElement();

        console.log(`${playerMove}`);

        return playerMove;
      }

      function resetGame(score) {
     //   playerMove = '"value here"';
       // comMove = '"value here"';
        //result = '"value here"';

        function resetScore(score) {
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;

          return score;
        }

        let newScore = resetScore(score);

        localStorage.setItem("score", JSON.stringify(newScore));

        updateScoreElement();

        return (score = newScore);
      }

      let isPlaying = false;
      let intervalId;
      function Autoplay(){

        if(!isPlaying){
        intervalId = setInterval( function userMove(){
          let userM = Math.random();

          let resultUserM = "";

          if(userM >= 0 && userM < 1/3){
            resultUserM = "Rock";
          } else 
            if(userM >= 1/3 && userM < 2/3){
              resultUserM = "Paper";
            } else
              if(userM >= 2/3 && userM < 1){
               resultUserM = "Scissors";
              }

              playGame(resultUserM, 7000);
        }, 2000)

        isPlaying = true;
      } else{

        clearInterval(intervalId);

        isPlaying = false;
      }
    }