let list = [];
let setSpeed = 1000; 
let firstRound = true;
var y = 0;
let lastRound = false;
let c = 0;
let Correct= true;
let time = 30;
let score = 0;
let canPlay = false;
let highScore = 0;
let allowedplay = false;
let points = 0;
let bought4 = false;
let bought5 = false;
if(localStorage.getItem("bought4") !== null){
    bought4 = localStorage.getItem("bought4");
}
if(localStorage.getItem("bought5") !== null){
    bought5 = localStorage.getItem("bought5");
}
if(localStorage.getItem("shopPoints") !== null){
    points = parseInt(localStorage.getItem("shopPoints"));
}
if(localStorage.getItem("highScore") !== null){
highScore = parseInt(localStorage.getItem("highScore"));
}
if(bought4){
    document.getElementById("Color2Button").textContent = "Equip";
}
if(bought5){
    document.getElementById("Color3Button").textContent = "Equip";
}
document.getElementById("shoPoints").textContent = "Points: "+ points;
document.getElementById("bestScore").textContent = "High Score: "+ highScore;
function startGame(){
    if(firstRound){
        document.getElementById("bestScore").textContent = "High Score: "+ highScore;
        list = [];
        y = 0;
        firstRound = false;
        document.getElementById("result").textContent = "Watch the Flashing Colors!";
        canPlay = true;
        allowedplay = false;
    }
    if(canPlay){
        var x = Math.floor(Math.random()*4);
      if(x == 0){
        document.getElementById("buttonRed").style.opacity = 0.4;
        setTimeout( setOpacityRed , setSpeed);
        list[y] = "buttonRed";
        console.log("red");
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else
        {
          lastRound = true;
        }
      }
      if(x == 1){
        document.getElementById("buttonBlue").style.opacity = 0.4;
        setTimeout( setOpacityBlue, setSpeed);  
        list[y] = "buttonBlue";   
        console.log("blue"); 
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else
        {
          lastRound = true;
        }
      }
      if(x == 2){
        document.getElementById("buttonGreen").style.opacity = 0.4;
        setTimeout( setOpacityGreen, setSpeed);
        list[y] = "buttonGreen";
        console.log("green");
        if(y < (score + 3)){
          y+= 1;
          setTimeout( playGame , (setSpeed + 500));
        }
        else{
          lastRound = true;
        }
      }
      if(x == 3){
        document.getElementById("buttonYellow").style.opacity = 0.4;
        setTimeout( setOpacityYellow, setSpeed);
        list[y] = "buttonYellow";
        console.log("yellow");
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else{
          lastRound = true;
        }
      }  
      canPlay = false
    }
    else{
        document.getElementById("result").textContent = "Sorry You Already Started :/"
    }
  }

  function checkRed()
  {
    if(allowedplay && lastRound == false)
      {
        if(list[c] == "buttonRed")
          {
            Correct = true;
            c++;
            document.getElementById("result").textContent = "Correct, Keep Going!";
          }
          else{
            Correct = false;
            c = 0;
            score = 0;
            document.getElementById("result").textContent = "Incorrect, Play Again!";
            list = [];
            firstRound = true;
          }
          if(c == (list.length ) && Correct)
            {
              score = score + 1;
              document.getElementById("result").textContent = "Play Again to Increase your High Score! Score:"+ score;
              firstRound = true;
              if(setSpeed == 1000){
              points = points + 10;
              }
              else if(setSpeed == 2000){
                  points = points + 5;
              }
              else{
                  points = points + 15;
              }
              localStorage.setItem("shopPoints", (points.toString()));
              document.getElementById("shoPoints").textContent = "Points: "+ points;
              c = 0;
              if(score > highScore){
                  
                highScore = score;
                localStorage.setItem("highScore", highScore.toString());
                document.getElementById("bestScore").textContent = "High Score: "+ highScore;
              }
            }
            if(c == (list.length ) && Correct == false)
              {
                c = 0;
                document.getElementById("result").textContent = "Incorrect, Play Again!";
                list = [];
                score = 0;
              }
      }
  }
  function checkBlue()
  {
    if(allowedplay && lastRound == false)
      {
        if(list[c] == "buttonBlue")
          {
            Correct = true;
            document.getElementById("result").textContent = "Correct, Keep Going!";
            c++;
            
          }
          else{
            Correct = false;
            c = 0;
            document.getElementById("result").textContent = "Incorrect, Play Again!";
            list = [];
            firstRound = true;
          }
          if(c == (list.length ) && Correct)
            {
              score = score + 1;
              document.getElementById("result").textContent = "Play Again to Increase your High Score! Score:"+ score;
              firstRound = true;
              if(setSpeed == 1000){
              points = points + 10;
              }
              else if(setSpeed == 2000){
                  points = points + 5;
              }
              else{
                  points = points + 15;
              }
              localStorage.setItem("shopPoints", (points.toString()));
              document.getElementById("shoPoints").textContent = "Points: "+ points;
              
              c = 0;
              if(score > highScore){
                  
                highScore = score;
                localStorage.setItem("highScore", highScore.toString());
                document.getElementById("bestScore").textContent = "High Score: "+ highScore;
              }
            }
           if (c == (list.length) && Correct == false) {  
              c = 0;
              document.getElementById("result").textContent = "Incorrect, Play Again!";
              list = [];
              score = 0;
            }
      }
  }
  function checkGreen()
  {
    if(allowedplay && lastRound == false)
      {
        if(list[c] == "buttonGreen")
          {
            Correct = true;
            document.getElementById("result").textContent = "Correct, Keep Going!";
            c++;
          }
          else{
            Correct = false;
            c = 0;
            document.getElementById("result").textContent = "Incorrect, Play Again!";
            list = [];
            score = 0;
            firstRound = true;
          }
          if(c == (list.length ) && Correct)
            {
              score = score + 1;
              document.getElementById("result").textContent = "Play Again to Increase your High Score! Score:"+ score;
              firstRound = true;
              if(setSpeed == 1000){
                  points = points + 10;
              }
              else if(setSpeed == 2000){
                  points = points + 5;
              }
              else{
                  points = points + 15;
              }
              localStorage.setItem("shopPoints", (points.toString()));
              document.getElementById("shoPoints").textContent = "Points: "+ points;
              c = 0;
              if(score > highScore){
                  
                highScore = score;
                localStorage.setItem("highScore", highScore.toString());
                
                document.getElementById("bestScore").textContent = "High Score: "+ highScore;
              }
            }
            if(c == (list.length ) && Correct == false)
              {
                
                c = 0;
                document.getElementById("result").textContent = "Incorrect, Play Again!";
                list = [];
                score = 0;
              }
      }
  }
  function checkYellow()
  {
    if(allowedplay && lastRound == false)
      {
        if(list[c] == "buttonYellow")
          {
            Correct = true;
            document.getElementById("result").textContent = "Correct, Keep Going!";
            c++;
          }
          else{
            Correct = false;
            c = 0;
            document.getElementById("result").textContent = "Incorrect, Play Again!";
            list = [];
            score = 0;
            firstRound = true;
          }
          if(c == (list.length ) && Correct)
            {
              score = score + 1;
              document.getElementById("result").textContent = "Play Again to Increase your High Score! Score:"+ score;
              firstRound = true;
              c = 0;
              if(setSpeed == 1000){
                points = points + 10;
              }
              else if(setSpeed == 2000){
                points = points + 5;
              }
              else{
                points = points + 15;
              }
              localStorage.setItem("shopPoints", (points.toString()));
              document.getElementById("shoPoints").textContent = "Points: "+ points;
              if(score > highScore){
                  
                highScore = score;
                localStorage.setItem("highScore", highScore.toString());
                document.getElementById("bestScore").textContent = "High Score: "+ highScore;
              }
            }
            if(c == (list.length ) && Correct == false)
            {
              c = 0;
              document.getElementById("result").textContent = "Incorrect, Play Again!";
              list = [];
              score = 0;
            }
      }
  }
  
  function playGame(){
        var x = Math.floor(Math.random()*4);
      if(x == 0){
        document.getElementById("buttonRed").style.opacity = 0.4;
        setTimeout( setOpacityRed , setSpeed);
        list[y] = "buttonRed";
        console.log("red");
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else
        {
          lastRound = true;
        }

      }
      if(x == 1){
        document.getElementById("buttonBlue").style.opacity = 0.4;
        setTimeout( setOpacityBlue, setSpeed);  
        list[y] = "buttonBlue";   
        console.log("blue"); 
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else
        {
          lastRound = true;
        }
      }
      if(x == 2){
        document.getElementById("buttonGreen").style.opacity = 0.4;
        setTimeout( setOpacityGreen, setSpeed);
        list[y] = "buttonGreen";
        console.log("green");
        if(y < (score + 3)){
          y+= 1;
          setTimeout( playGame , (setSpeed + 500));
        }
        else{
          lastRound = true;
        }
      }
      if(x == 3){
        document.getElementById("buttonYellow").style.opacity = 0.4;
        setTimeout( setOpacityYellow, setSpeed);
        list[y] = "buttonYellow";
        console.log("yellow");
        if(y < (score + 3)){
          y+=1;
          
          setTimeout( playGame , (setSpeed + 500));
        }
        else{
          lastRound = true;
        }
      }
      if(lastRound)
        {
          allowedplay = true;
          console.log("end");
          lastRound = false;
          document.getElementById("result").textContent = "Now you Play!" + "<br>" + "Time Left: " + timer;
              timer();
        }

  }
  function setOpacityRed()
  {
    document.getElementById("buttonRed").style.opacity = 1;
  }
  function setOpacityBlue()
  {
    document.getElementById("buttonBlue").style.opacity = 1;
  }
  function setOpacityGreen()
  {
    document.getElementById("buttonGreen").style.opacity = 1;
  }
  function setOpacityYellow()
  {
    document.getElementById("buttonYellow").style.opacity = 1;
  }

  function setSpeedSlow(){
    setSpeed = 2000;
  }
  function setSpeedMed(){
    setSpeed = 1000;
  }
  function setSpeedFast(){
    setSpeed = 500;
  }
  function Rewind(){
    if(points >= 20){
    canPlay = true;
    firstRound = true;
    points = points -20;
    localStorage.setItem("shopPoints", (points.toString()));
    document.getElementById("shoPoints").textContent = "Points: "+ points;
    document.getElementById("result").textContent = "Click Play to Rewind";
  }
}
  function ScoreBoost(){
      if(points >= 35){
      score = score + 2;
      document.getElementById("result").textContent = "New Score:"+ score;
      points = points -35;
      localStorage.setItem("shopPoints", (points.toString()));
      document.getElementById("shoPoints").textContent = "Points: "+ points;
      if(score > highScore){
      
      highScore = score;
      localStorage.setItem("highScore", highScore.toString());
      document.getElementById("bestScore").textContent = "High Score: "+ highScore;
      }
  }
}
  function Color1(){
      document.body.style.backgroundColor = "white";
      document.getElementById("buttonRed").style.backgroundColor = "red";
      document.getElementById("buttonBlue").style.backgroundColor  = "blue";
      document.getElementById("buttonGreen").style.backgroundColor  = "green";
      document.getElementById("buttonYellow").style.backgroundColor = "yellow";
      document.getElementById("Color1Button").textContent = "Equipped";
      if(bought4){
        document.getElementById("Color2Button").textContent = "Equip";
      }
      if(bought5){
        document.getElementById("Color3Button").textContent = "Equip";
      }
      
  }
  function Color2(){
      if(bought4){
      document.body.style.backgroundColor = "gray";
      document.getElementById("buttonRed").style.backgroundColor  = "AliceBlue";
      document.getElementById("buttonBlue").style.backgroundColor  = "Aquamarine";
      document.getElementById("buttonGreen").style.backgroundColor  = "CornFlowerBlue";
      document.getElementById("buttonYellow").style.backgroundColor  ="DarkCyan";
      document.getElementById("Color2Button").textContent = "Equipped";
      document.getElementById("Color1Button").textContent = "Equip";
      if(bought5){
      document.getElementById("Color3Button").textContent = "Equip";
      }
      }
      else if(points >= 10){
      document.body.style.backgroundColor = "gray";
      document.getElementById("buttonRed").style.backgroundColor  = "AliceBlue";
      document.getElementById("buttonBlue").style.backgroundColor  = "Aquamarine";
      document.getElementById("buttonGreen").style.backgroundColor  = "CornFlowerBlue";
      document.getElementById("buttonYellow").style.backgroundColor  ="DarkCyan";
      points = points - 10;
      localStorage.setItem("shopPoints", (points.toString()));
      document.getElementById("shoPoints").textContent = "Points: "+ points;
      document.getElementById("Color2Button").textContent = "Equipped";
      document.getElementById("Color1Button").textContent = "Equip";
      if(bought5){
      document.getElementById("Color3Button").textContent = "Equip";
      }
      bought4 = true;
      localStorage.setItem("bought4", bought4);
  }
}
function Color3(){
      if(bought5){
      document.body.style.backgroundColor = "lightgray";
      document.getElementById("buttonRed").style.backgroundColor  = "Crimson";
      document.getElementById("buttonBlue").style.backgroundColor  = "Chocolate";
      document.getElementById("buttonGreen").style.backgroundColor  = "maroon";
      document.getElementById("buttonYellow").style.backgroundColor  ="firebrick";
      document.getElementById("Color3Button").textContent = "Equipped";
      document.getElementById("Color1Button").textContent = "Equip";
      if(bought4){
      document.getElementById("Color2Button").textContent = "Equip";
      }
      }
      else if(points >= 15){
      document.body.style.backgroundColor = "gray";
      document.getElementById("buttonRed").style.backgroundColor  = "Crimson";
      document.getElementById("buttonBlue").style.backgroundColor  = "Chocolate";
      document.getElementById("buttonGreen").style.backgroundColor  = "maroon";
      document.getElementById("buttonYellow").style.backgroundColor  ="firebrick";
      points = points - 15;
      localStorage.setItem("shopPoints", (points.toString()));
      document.getElementById("shoPoints").textContent = "Points: "+ points;
      document.getElementById("Color3Button").textContent = "Equipped";
      document.getElementById("Color1Button").textContent = "Equip";
      if(bought4){
      document.getElementById("Color2Button").textContent = "Equip";
      }
      bought5 = true;
      localStorage.setItem("bought5", bought5);
  }
}