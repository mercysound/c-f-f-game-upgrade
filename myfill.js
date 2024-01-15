//   // $('#modalStart').on('hidden.bs.model', function (e) {
//   //   console.log('modal is about to show');
//   // })
//   alert("gen");
// });


// to clear all my radio button
function clearRadioButtons() {
  // Get all radio buttons in the form
  var radioButtons = document.querySelectorAll('input[type="radio"]');
  // Loop through each radio button and set checked to false
  radioButtons.forEach(function(radioButton) {
    radioButton.checked = false;
  });
}

// method for for feedback
const textarea = document.getElementById("textarea-view");
const subjectInput = document.getElementById("subject");

textarea.addEventListener("input", () => {
  subjectInput.value = textarea.value.trim(); // Trim leading/trailing spaces
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  subjectInput.value = subjectInput.value.replace(/\s/g, ' '); // Encode spaces with "+"
  event.preventDefault(); // Prevent default form submission
  window.location.href = `mailto:adewoleadekunlemercy@gmail.com,fajinmijoel11@gmail.com?subject=${subjectInput.value}`;
});

// Function to check device orientation
function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    // Landscape orientation
    document.body.classList.remove('portrait-alert');
  } else {
    // Portrait orientation
    document.body.classList.add('portrait-alert');
  }
}
// Check orientation on page load
checkOrientation();
// Check orientation when orientation changes
window.addEventListener('orientationchange', checkOrientation);
window.addEventListener('resize', checkOrientation);
//check orientation ends here

//here is the var using to get the user identity
var firstPersonPlaying = "";
var secondPersonPlaying = "";
// This section is use to focus back on hole when reload
// Get the select element and result message element
var playerSelect = document.getElementById('playerSelect');
var resultMessage = document.getElementById('resultMessage');

// // Add an event listener to the select element
// playerSelect.addEventListener('change', function() {
//   // Get the selected value
//   var selectedValue = playerSelect.value;
//   // Display a message based on the selected value
//   if (selectedValue === '1') {
//     // resultMessage.textContent = 'You selected One Player mode.';
//     window.location = "onePlayer.html"
//   } else if (selectedValue === '2') {
//     // resultMessage.textContent = 'You selected Two Players mode.';
//     var firstPName = prompt("First player name")
//     var secondPName = prompt("Second player name")

//     if(firstPName === null){
//       firstPersonPlaying = "PLAYER ONE"
//     }else if(firstPName === ""){
//       firstPersonPlaying = "PLAYER ONE"
//     }else if(firstPName !== ""){
//       if(!firstPName){
//         firstPersonPlaying = "PLAYER ONE"
//       }else{
//         firstPersonPlaying = firstPName.toUpperCase()
//       }
//     };

//     if(secondPName === null){
//       secondPersonPlaying = "PLAYER TWO"
//     }else if(secondPName === ""){
//       secondPersonPlaying = "PLAYER TWO"
//     }else if(secondPName !== ""){
//       if(!secondPName){
//         secondPersonPlaying = "PLAYER TWO"
//       }else{
//         secondPersonPlaying = secondPName.toUpperCase()
//       }
//     };
//     document.getElementById("playerOneName").innerText = (`"${firstPersonPlaying}"`);
//     firstPersonPlaying = (`"${firstPersonPlaying}"`);

//     document.getElementById("playerTwoName").innerText = (`"${secondPersonPlaying}"`);
//     secondPersonPlaying = (`"${secondPersonPlaying}"`);
//     document.getElementById("btn-disp").classList.remove('d-none')
//   } else {
//     resultMessage.textContent = 'Invalid selection.';
//   }
// });

function startGame() {
  // Your code to start the game goes here
  // alert('Game starting...');
  document.getElementById("dashboard").style.display = "none"
  document.getElementById("gameContent").classList.remove('d-none')
  gameBoardLoad()
}


console.log(secondPersonPlaying, firstPersonPlaying);
let dispDiceHole = $(".editable");

window.addEventListener("DOMContentLoaded", () => {
});

const gameBoardLoad = () =>{
  dispDiceHole.focus();
  playerSigner()

}

// document.getElementById("playerTwoName").innerText = secondPersonPlaying
// document.getElementById("playerOneName").innerText = firstPersonPlaying

// to get the session figure
// variable to set and get session stor
var setComputerStoVar; // for computer
var getBackComputerStoVar;
var setMyStoVar; //for self
var getBackMyStoVar;
//here is the var setting the new number
// here is the var of the number saving to session stor
var computerTurnToSaveSessi = 0;
var myTurnToSaveSessi = 0;

// player turn to play turn
var myTurn = false;
var computerTurn = true;

// var globeChangNum = 17;

var currentColorIndex = 0;
var restart = false;

// Here is Computer session stor setter and getter func
const setComputerSessStorFunc = () => {
  setComputerStoVar = sessionStorage.setItem(
    "computerNum",
    JSON.stringify(computerTurnToSaveSessi)
  );
};

const retriveComputerSessStorFunc = () => {
  getBackComputerStoVar = JSON.parse(sessionStorage.getItem("computerNum"));
};
// Here is My session stor setter and getter func
const setMySessStorFunc = () => {
  setMyStoVar = sessionStorage.setItem(
    "MyNum",
    JSON.stringify(myTurnToSaveSessi)
  );
};
const retriveMySessStorFunc = () => {
  getBackMyStoVar = JSON.parse(sessionStorage.getItem("MyNum"));
};

// here is the var used to get all modal trigger id
var allModalComputer = {
  feedBack: bootstrap.Modal.getOrCreateInstance("#feedbackModal"),
  myModalStart: bootstrap.Modal.getOrCreateInstance("#modalStart"),
  myModal1: bootstrap.Modal.getOrCreateInstance("#modal1"),
  myModal2: bootstrap.Modal.getOrCreateInstance("#modal2"),
  myModal3: bootstrap.Modal.getOrCreateInstance("#modal3"),
  myModal4: bootstrap.Modal.getOrCreateInstance("#modal4"),
  myModal5: bootstrap.Modal.getOrCreateInstance("#modal5"),
  myModal6: bootstrap.Modal.getOrCreateInstance("#modal6"),
  myModal7: bootstrap.Modal.getOrCreateInstance("#modal7"),
  myModal8: bootstrap.Modal.getOrCreateInstance("#modal8"),
  myModal9: bootstrap.Modal.getOrCreateInstance("#modal9"),
  myModal10: bootstrap.Modal.getOrCreateInstance("#modal10"),
  myModal11: bootstrap.Modal.getOrCreateInstance("#modal11"),
  myModal12: bootstrap.Modal.getOrCreateInstance("#modal12"),
  myModal13: bootstrap.Modal.getOrCreateInstance("#modal13"),
  myModal14: bootstrap.Modal.getOrCreateInstance("#modal14"),
  myModal15: bootstrap.Modal.getOrCreateInstance("#modal15"),
  myModal16: bootstrap.Modal.getOrCreateInstance("#modal16"),
  myModal17: bootstrap.Modal.getOrCreateInstance("#modal17"),
  myModal18: bootstrap.Modal.getOrCreateInstance("#modal18"),
  myModal19: bootstrap.Modal.getOrCreateInstance("#modal19"),
  myModal20: bootstrap.Modal.getOrCreateInstance("#modal20"),
  myModal21: bootstrap.Modal.getOrCreateInstance("#modal21"),
  myModal22: bootstrap.Modal.getOrCreateInstance("#modal22"),
  myModal23: bootstrap.Modal.getOrCreateInstance("#modal23"),
  myModal24: bootstrap.Modal.getOrCreateInstance("#modal24"),
  myModal25: bootstrap.Modal.getOrCreateInstance("#modal25"),
  myModal26: bootstrap.Modal.getOrCreateInstance("#modal26"),
  myModal27: bootstrap.Modal.getOrCreateInstance("#modal27"),
  myModal28: bootstrap.Modal.getOrCreateInstance("#modal28"),
  myModal29: bootstrap.Modal.getOrCreateInstance("#modal29"),
  myModal30: bootstrap.Modal.getOrCreateInstance("#modal30"),
  myModal31: bootstrap.Modal.getOrCreateInstance("#modal31"),
  myModal32: bootstrap.Modal.getOrCreateInstance("#modal32"),
  myModal33: bootstrap.Modal.getOrCreateInstance("#modal33"),
  myModal34: bootstrap.Modal.getOrCreateInstance("#modal34"),
  myModal35: bootstrap.Modal.getOrCreateInstance("#modal35"),
  myModal36: bootstrap.Modal.getOrCreateInstance("#modal36"),
  myModal37: bootstrap.Modal.getOrCreateInstance("#modal37"),
  myModal38: bootstrap.Modal.getOrCreateInstance("#modal38"),
  myModal39: bootstrap.Modal.getOrCreateInstance("#modal39"),
  myModal40: bootstrap.Modal.getOrCreateInstance("#modal40"),
  myModal41: bootstrap.Modal.getOrCreateInstance("#modal41"),
  myModal42: bootstrap.Modal.getOrCreateInstance("#modal42"),
  myModal43: bootstrap.Modal.getOrCreateInstance("#modal43"),
  myModal44: bootstrap.Modal.getOrCreateInstance("#modal44"),
  myModal45: bootstrap.Modal.getOrCreateInstance("#modal45"),
  myModal46: bootstrap.Modal.getOrCreateInstance("#modal46"),
  myModal47: bootstrap.Modal.getOrCreateInstance("#modal47"),
  myModal48: bootstrap.Modal.getOrCreateInstance("#modal48"),
  myModal49: bootstrap.Modal.getOrCreateInstance("#modal49"),
  myModal50: bootstrap.Modal.getOrCreateInstance("#modal50"),
};

var confirmAnsObj = {
  feedBack: false,
  modalshowStart: false,
  modalshow1: false,
  modalshow2: false,
  modalshow3: false,
  modalshow4: false,
  modalshow5: false,
  modalshow6: false,
  modalshow7: false,
  modalshow8: false,
  modalshow9: false,
  modalshow10: false,
  modalshow11: false,
  modalshow12: false,
  modalshow13: false,
  modalshow14: false,
  modalshow15: false,
  modalshow16: false,
  modalshow17: false,
  modalshow18: false,
  modalshow19: false,
  modalshow20: false,
  modalshow21: false,
  modalshow22: false,
  modalshow23: false,
  modalshow24: false,
  modalshow25: false,
  modalshow26: false,
  modalshow27: false,
  modalshow28: false,
  modalshow29: false,
  modalshow30: false,
  modalshow31: false,
  modalshow32: false,
  modalshow33: false,
  modalshow34: false,
  modalshow35: false,
  modalshow36: false,
  modalshow37: false,
  modalshow38: false,
  modalshow39: false,
  modalshow40: false,
  modalshow41: false,
  modalshow42: false,
  modalshow43: false,
  modalshow44: false,
  modalshow45: false,
  modalshow46: false,
  modalshow47: false,
  modalshow48: false,
  modalshow49: false,
  modalshow50: false,
  modalshow51: false,
  modalshow52: false,
  modalshow53: false,
  modalshow54: false,
  modalshow55: false,
  modalshow56: false,
};

const ifSixLuck = () => {
  if (myTurn == true) {
    if (getBackMyStoVar == 6) {
      blinkBackground() // const blinkingInterval = setInterval(blinkBackground, 800);
      // setTimeout(() => {
      //   clearInterval(blinkingInterval);
      // }, 8000);
    } else if (getBackMyStoVar >= 6) {
      blinkBackground() // const blinkingInterval = setInterval(blinkBackground, 800);
      // setTimeout(() => {
      //   clearInterval(blinkingInterval);
      // }, 8000);
    } else {
      // setTimeout(() => {
        myTurn = false;
        computerTurn = true;
        playerSigner()
        alert(
          "Aww! " +
            firstPersonPlaying +
            " Need 6 to start the game! It's " +
            secondPersonPlaying +
            " Turn"
        );
        // this timeout func ment for computer turn auto play
            // setTimeout(()=>{
            //   rolDicePlayerOne()
            // }, 300)
      // }, 300);
    }
  } else if (computerTurn == true) {
    if (getBackComputerStoVar == 6) {
      blinkBackground() // const blinkingInterval = setInterval(blinkBackground, 800);
      // setTimeout(() => {
      //   clearInterval(blinkingInterval);
      // }, 8000);
    } else if (getBackComputerStoVar >= 6) {
      blinkBackground() // const blinkingInterval = setInterval(blinkBackground, 800);
      // setTimeout(() => {
      //   clearInterval(blinkingInterval);
      // }, 8000);
    } else {
      // setTimeout(() => {
        computerTurn = false;
        myTurn = true;
        playerSigner()
        alert(
          "Aww! " +
            secondPersonPlaying +
            " Need 6 to start the game! It's " +
            firstPersonPlaying +
            " Turn"
        );  
      // }, 300);
    }
  }
  // backgroundToBlink.style.backgroundColor = colors[currentColorIndex]

  blinkBackground()
};

const timeOutIfSIxLuck = () => {
  setTimeout(() => {
    ifSixLuck();
  }, 200);
};
//  table object before
const dispLuck = () => {
  if (diceRandNoPlayerOne == 1) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-one.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
  } else if (diceRandNoPlayerOne == 2) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-two.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
  } else if (diceRandNoPlayerOne == 3) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-three.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
    // ifSixLuck();
    // dispDiceHole.focus()
    // myModal2.show()
    // trigClose()
  } else if (diceRandNoPlayerOne == 4) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-four.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
  } else if (diceRandNoPlayerOne == 5) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-five.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
  } else if (diceRandNoPlayerOne == 6) {
    dispDiceRolOne.innerHTML = `<img src='./cf/dice_ass/perspective-dice-six-faces-six.png' style="width: 100%; height:15vh;">`;
    timeOutIfSIxLuck();
  }
};

// below fuction help me to focus on continue btn
// of triggered modal
const trigClose = () => {
  setTimeout(function () {
    $(".contine-focus").focus();
  }, 700);
};

// here is the table blinking background
const colors = ["0.5", "0.5", "0.5", "0.5"];
var diceSound = new Audio("./cf/dice_ass/Rolling-Dice-Sound-effect1.mp3");
var bonus = new Audio("./cf/dice_ass/bonus_s.mp3");
var winnerClap = new Audio("./cf/dice_ass/bonus_sound.mp3");
var lose = new Audio("./cf/dice_ass/loser_sound.mp3");
var firstToWinClap = new Audio("./cf/dice_ass/winning clapp.mp3");

const beforeBlinkBackground = () => {
    if (getBackMyStoVar == 6) {
      let recentImgStart = document.getElementById("forImgStart");
      recentImgStart.style.display = "none";
      tableObjec.forStart.style.background = `
    url("cf/start.JPG")`;
      tableObjec.forStart.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.backgroundRepeat = `no-repeat`;
      tableObjec.forStart.style.justifyContent = `center`;
      // tableObjec.for1.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 7) {
      let recentImg1 = document.getElementById("forImgOne");
      recentImg1.style.display = "none";
      tableObjec.for1.style.background = `
    url("cf/1.JPG")`;
      tableObjec.for1.style.backgroundRepeat = `no-repeat`;
      tableObjec.for1.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 8) {
      let recentImg2 = document.getElementById("forImgTwo");
      recentImg2.style.display = "none";
      tableObjec.for2.style.background = `
    url("cf/2.JPG")`;
      tableObjec.for2.style.backgroundRepeat = `no-repeat`;
      tableObjec.for2.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 9) {
      let recentImg3 = document.getElementById("forImgThree");
      recentImg3.style.display = "none";
      tableObjec.for3.style.background = `
    url("cf/3.JPG")`;
      tableObjec.for3.style.backgroundRepeat = `no-repeat`;
      tableObjec.for3.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`;  
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 10) {
      let recentImg4 = document.getElementById("forImgFour");
      recentImg4.style.display = "none";
      tableObjec.for4.style.background = `
    url("cf/4.JPG")`;
      tableObjec.for4.style.backgroundRepeat = `no-repeat`;
      tableObjec.for4.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 11) {
      let recentImg5 = document.getElementById("forImgFive");
      recentImg5.style.display = "none";
      tableObjec.for5.style.background = `
    url("cf/5.JPG")`;
      tableObjec.for5.style.backgroundRepeat = `no-repeat`;
      tableObjec.for5.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 12) {
      let recentImg6 = document.getElementById("forImgSix");
      recentImg6.style.display = "none";
      tableObjec.for6.style.background = `
    url("cf/6.JPG")`;
      tableObjec.for6.style.backgroundRepeat = `no-repeat`;
      tableObjec.for6.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 13) {
      let recentImg7 = document.getElementById("forImgSeven");
      recentImg7.style.display = "none";
      tableObjec.for7.style.background = `
    url("cf/7.JPG")`;
      tableObjec.for7.style.backgroundRepeat = `no-repeat`;
      tableObjec.for7.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 14) {
      let recentImg8 = document.getElementById("forImgEight");
      recentImg8.style.display = "none";
      tableObjec.for8.style.background = `
    url("cf/8.JPG")`;
      tableObjec.for8.style.backgroundRepeat = `no-repeat`;
      tableObjec.for8.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 15) {
      let recentImg9 = document.getElementById("forImgNine");
      recentImg9.style.display = "none";
      tableObjec.for9.style.background = `
    url("cf/9.JPG")`;
      tableObjec.for9.style.backgroundRepeat = `no-repeat`;
      tableObjec.for9.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 16) {
      let recentImg10 = document.getElementById("forImgTen");
      recentImg10.style.display = "none";
      tableObjec.for10.style.background = `
    url("cf/10.JPG")`;
      tableObjec.for10.style.backgroundRepeat = `no-repeat`;
      tableObjec.for10.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 17) {
      let recentImg11 = document.getElementById("forImgEleven");
      recentImg11.style.display = "none";
      tableObjec.for11.style.background = `
    url("cf/11.JPG")`;
      tableObjec.for11.style.backgroundRepeat = `no-repeat`;
      tableObjec.for11.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 18) {
      let recentImg12 = document.getElementById("forImgTwelve");
      recentImg12.style.display = "none";
      tableObjec.for12.style.background = `
    url("cf/12.JPG")`;
      tableObjec.for12.style.backgroundRepeat = `no-repeat`;
      tableObjec.for12.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 19) {
      let recentImg13 = document.getElementById("forImgThirteen");
      recentImg13.style.display = "none";
      tableObjec.for13.style.background = `
    url("cf/13.JPG")`;
      tableObjec.for13.style.backgroundRepeat = `no-repeat`;
      tableObjec.for13.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 20) {
      let recentImg14 = document.getElementById("forImgFourteen");
      recentImg14.style.display = "none";
      tableObjec.for14.style.background = `
    url("cf/14.JPG")`;
      tableObjec.for14.style.backgroundRepeat = `no-repeat`;
      tableObjec.for14.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 21) {
      let recentImg15 = document.getElementById("forImgFiften");
      recentImg15.style.display = "none";
      tableObjec.for15.style.background = `
    url("cf/15.JPG")`;
      tableObjec.for15.style.backgroundRepeat = `no-repeat`;
      tableObjec.for15.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 22) {
      let recentImg16 = document.getElementById("forImgSixteen");
      recentImg16.style.display = "none";
      tableObjec.for16.style.background = `
    url("cf/16.JPG")`;
      tableObjec.for16.style.backgroundRepeat = `no-repeat`;
      tableObjec.for16.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 23) {
      let recentImg17 = document.getElementById("forImgSeventeen");
      recentImg17.style.display = "none";
      tableObjec.for17.style.background = `
    url("cf/17.JPG")`;
      tableObjec.for17.style.backgroundRepeat = `no-repeat`;
      tableObjec.for17.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 24) {
      let recentImg18 = document.getElementById("forImgEighteen");
      recentImg18.style.display = "none";
      tableObjec.for18.style.background = `
    url("cf/18.JPG")`;
      tableObjec.for18.style.backgroundRepeat = `no-repeat`;
      tableObjec.for18.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 25) {
      let recentImg19 = document.getElementById("forImgNineteen");
      recentImg19.style.display = "none";
      tableObjec.for19.style.background = `
    url("cf/19.JPG")`;
      tableObjec.for19.style.backgroundRepeat = `no-repeat`;
      tableObjec.for19.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 26) {
      let recentImg20 = document.getElementById("forImgTwenty");
      recentImg20.style.display = "none";
      tableObjec.for20.style.background = `
    url("cf/20.JPG")`;
      tableObjec.for20.style.backgroundRepeat = `no-repeat`;
      tableObjec.for20.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 27) {
      let recentImg21 = document.getElementById("forImgTwentyOne");
      recentImg21.style.display = "none";
      tableObjec.for21.style.background = `
    url("cf/21.JPG")`;
      tableObjec.for21.style.backgroundRepeat = `no-repeat`;
      tableObjec.for21.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 28) {
      let recentImg22 = document.getElementById("forImgTwentyTwo");
      recentImg22.style.display = "none";
      tableObjec.for22.style.background = `
    url("cf/22.JPG")`;
      tableObjec.for22.style.backgroundRepeat = `no-repeat`;
      tableObjec.for22.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 29) {
      let recentImg23 = document.getElementById("forImgTwentyThree");
      recentImg23.style.display = "none";
      tableObjec.for23.style.background = `
    url("cf/23.JPG")`;
      tableObjec.for23.style.backgroundRepeat = `no-repeat`;
      tableObjec.for23.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 30) {
      let recentImg24 = document.getElementById("forImgTwentyFour");
      recentImg24.style.display = "none";
      tableObjec.for24.style.background = `
    url("cf/24.JPG")`;
      tableObjec.for24.style.backgroundRepeat = `no-repeat`;
      tableObjec.for24.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 31) {
      let recentImg25 = document.getElementById("forImgTwentyFive");
      recentImg25.style.display = "none";
      tableObjec.for25.style.background = `
    url("cf/25.JPG")`;
      tableObjec.for25.style.backgroundRepeat = `no-repeat`;
      tableObjec.for25.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 32) {
      let recentImg26 = document.getElementById("forImgTwentySix");
      recentImg26.style.display = "none";
      tableObjec.for26.style.background = `
    url("cf/26.JPG")`;
      tableObjec.for26.style.backgroundRepeat = `no-repeat`;
      tableObjec.for26.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 33) {
      let recentImg27 = document.getElementById("forImgTwentySeven");
      recentImg27.style.display = "none";
      tableObjec.for27.style.background = `
    url("cf/27.JPG")`;
      tableObjec.for27.style.backgroundRepeat = `no-repeat`;
      tableObjec.for27.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 34) {
      let recentImg28 = document.getElementById("forImgTwentyEight");
      recentImg28.style.display = "none";
      tableObjec.for28.style.background = `
    url("cf/28.JPG")`;
      tableObjec.for28.style.backgroundRepeat = `no-repeat`;
      tableObjec.for28.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 35) {
      let recentImg29 = document.getElementById("forImgTwentyNine");
      recentImg29.style.display = "none";
      tableObjec.for29.style.background = `
    url("cf/29.JPG")`;
      tableObjec.for29.style.backgroundRepeat = `no-repeat`;
      tableObjec.for29.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 36) {
      let recentImg30 = document.getElementById("forImgThirty");
      recentImg30.style.display = "none";
      tableObjec.for30.style.background = `
    url("cf/30.JPG")`;
      tableObjec.for30.style.backgroundRepeat = `no-repeat`;
      tableObjec.for30.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 37) {
      let recentImg31 = document.getElementById("forImgThirtyOne");
      recentImg31.style.display = "none";
      tableObjec.for31.style.background = `
    url("cf/31.JPG")`;
      tableObjec.for31.style.backgroundRepeat = `no-repeat`;
      tableObjec.for31.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 38) {
      let recentImg32 = document.getElementById("forImgThirtyTwo");
      recentImg32.style.display = "none";
      tableObjec.for32.style.background = `
    url("cf/32.JPG")`;
      tableObjec.for32.style.backgroundRepeat = `no-repeat`;
      tableObjec.for32.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 39) {
      let recentImg33 = document.getElementById("forImgThirtyThree");
      recentImg33.style.display = "none";
      tableObjec.for33.style.background = `
    url("cf/33.JPG")`;
      tableObjec.for33.style.backgroundRepeat = `no-repeat`;
      tableObjec.for33.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 40) {
      let recentImg34 = document.getElementById("forImgThirtyFour");
      recentImg34.style.display = "none";
      tableObjec.for34.style.background = `
    url("cf/34.JPG")`;
      tableObjec.for34.style.backgroundRepeat = `no-repeat`;
      tableObjec.for34.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 41) {
      let recentImg35 = document.getElementById("forImgThirtyFive");
      recentImg35.style.display = "none";
      tableObjec.for35.style.background = `
    url("cf/35.JPG")`;
      tableObjec.for35.style.backgroundRepeat = `no-repeat`;
      tableObjec.for35.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 42) {
      let recentImg36 = document.getElementById("forImgThirtySix");
      recentImg36.style.display = "none";
      tableObjec.for36.style.background = `
    url("cf/36.JPG")`;
      tableObjec.for36.style.backgroundRepeat = `no-repeat`;
      tableObjec.for36.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 43) {
      let recentImg37 = document.getElementById("forImgThirtySeven");
      recentImg37.style.display = "none";
      tableObjec.for37.style.background = `
    url("cf/37.JPG")`;
      tableObjec.for37.style.backgroundRepeat = `no-repeat`;
      tableObjec.for37.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 44) {
      let recentImg38 = document.getElementById("forImgThirtyEight");
      recentImg38.style.display = "none";
      tableObjec.for38.style.background = `
    url("cf/38.JPG")`;
      tableObjec.for38.style.backgroundRepeat = `no-repeat`;
      tableObjec.for38.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 45) {
      let recentImg39 = document.getElementById("forImgThirtyNine");
      recentImg39.style.display = "none";
      tableObjec.for39.style.background = `
    url("cf/39.JPG")`;
      tableObjec.for39.style.backgroundRepeat = `no-repeat`;
      tableObjec.for39.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 46) {
      let recentImg40 = document.getElementById("forImgFourty");
      recentImg40.style.display = "none";
      tableObjec.for40.style.background = `
    url("cf/40.JPG")`;
      tableObjec.for40.style.backgroundRepeat = `no-repeat`;
      tableObjec.for40.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 47) {
      let recentImg41 = document.getElementById("forImgFourtyOne");
      recentImg41.style.display = "none";
      tableObjec.for41.style.background = `
    url("cf/41.JPG")`;
      tableObjec.for41.style.backgroundRepeat = `no-repeat`;
      tableObjec.for41.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 48) {
      let recentImg42 = document.getElementById("forImgFourtyTwo");
      recentImg42.style.display = "none";
      tableObjec.for42.style.background = `
    url("cf/42.JPG")`;
      tableObjec.for42.style.backgroundRepeat = `no-repeat`;
      tableObjec.for42.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 49) {
      let recentImg43 = document.getElementById("forImgFourtyThree");
      recentImg43.style.display = "none";
      tableObjec.for43.style.background = `
    url("cf/43.JPG")`;
      tableObjec.for43.style.backgroundRepeat = `no-repeat`;
      tableObjec.for43.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 50) {
      let recentImg44 = document.getElementById("forImgFourtyFour");
      recentImg44.style.display = "none";
      tableObjec.for44.style.background = `
    url("cf/44.JPG")`;
      tableObjec.for44.style.backgroundRepeat = `no-repeat`;
      tableObjec.for44.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 51) {
      let recentImg45 = document.getElementById("forImgFourtyFive");
      recentImg45.style.display = "none";
      tableObjec.for45.style.background = `
    url("cf/45.JPG")`;
      tableObjec.for45.style.backgroundRepeat = `no-repeat`;
      tableObjec.for45.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 52) {
      let recentImg46 = document.getElementById("forImgFourtySix");
      recentImg46.style.display = "none";
      tableObjec.for46.style.background = `
    url("cf/46.JPG")`;
      tableObjec.for46.style.backgroundRepeat = `no-repeat`;
      tableObjec.for46.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 53) {
      let recentImg47 = document.getElementById("forImgFourtySeven");
      recentImg47.style.display = "none";
      tableObjec.for47.style.background = `
    url("cf/47.JPG")`;
      tableObjec.for47.style.backgroundRepeat = `no-repeat`;
      tableObjec.for47.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 54) {
      let recentImg48 = document.getElementById("forImgFourtyEight");
      recentImg48.style.display = "none";
      tableObjec.for48.style.background = `
    url("cf/48.JPG")`;
      tableObjec.for48.style.backgroundRepeat = `no-repeat`;
      tableObjec.for48.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 55) {
      let recentImg49 = document.getElementById("forImgFourtyNine");
      recentImg49.style.display = "none";
      tableObjec.for49.style.background = `
    url("cf/49.JPG")`;
      tableObjec.for49.style.backgroundRepeat = `no-repeat`;
      tableObjec.for49.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 56) {
      let recentImg50 = document.getElementById("forImgFifty");
      recentImg50.style.display = "none";
      tableObjec.for50.style.background = `
    url("cf/50.JPG")`;
      tableObjec.for50.style.backgroundRepeat = `no-repeat`;
      tableObjec.for50.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    }
    // document.getElementsByTagName("td").style.backgroundColor = `red`
 
    if (getBackComputerStoVar == 6) {
      let recentImgStart = document.getElementById("forImgStart");
      recentImgStart.style.display = "none";
      tableObjec.forStart.style.background = `
    url("cf/start.JPG")`;
      tableObjec.forStart.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.backgroundRepeat = `no-repeat`;
      // tableObjec.for1.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 7) {
      let recentImg1 = document.getElementById("forImgOne");
      recentImg1.style.display = "none";
      tableObjec.for1.style.background = `
    url("cf/1.JPG")`;
      tableObjec.for1.style.backgroundRepeat = `no-repeat`;
      tableObjec.for1.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 8) {
      let recentImg2 = document.getElementById("forImgTwo");
      recentImg2.style.display = "none";
      tableObjec.for2.style.background = `
    url("cf/2.JPG")`;
      tableObjec.for2.style.backgroundRepeat = `no-repeat`;
      tableObjec.for2.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 9) {
      let recentImg3 = document.getElementById("forImgThree");
      recentImg3.style.display = "none";
      tableObjec.for3.style.background = `
    url("cf/3.JPG")`;
      tableObjec.for3.style.backgroundRepeat = `no-repeat`;
      tableObjec.for3.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 10) {
      let recentImg4 = document.getElementById("forImgFour");
      recentImg4.style.display = "none";
      tableObjec.for4.style.background = `
    url("cf/4.JPG")`;
      tableObjec.for4.style.backgroundRepeat = `no-repeat`;
      tableObjec.for4.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 11) {
      let recentImg5 = document.getElementById("forImgFive");
      recentImg5.style.display = "none";
      tableObjec.for5.style.background = `
    url("cf/5.JPG")`;
      tableObjec.for5.style.backgroundRepeat = `no-repeat`;
      tableObjec.for5.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 12) {
      let recentImg6 = document.getElementById("forImgSix");
      recentImg6.style.display = "none";
      tableObjec.for6.style.background = `
    url("cf/6.JPG")`;
      tableObjec.for6.style.backgroundRepeat = `no-repeat`;
      tableObjec.for6.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 13) {
      let recentImg7 = document.getElementById("forImgSeven");
      recentImg7.style.display = "none";
      tableObjec.for7.style.background = `
    url("cf/7.JPG")`;
      tableObjec.for7.style.backgroundRepeat = `no-repeat`;
      tableObjec.for7.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 14) {
      let recentImg8 = document.getElementById("forImgEight");
      recentImg8.style.display = "none";
      tableObjec.for8.style.background = `
    url("cf/8.JPG")`;
      tableObjec.for8.style.backgroundRepeat = `no-repeat`;
      tableObjec.for8.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 15) {
      let recentImg9 = document.getElementById("forImgNine");
      recentImg9.style.display = "none";
      tableObjec.for9.style.background = `
    url("cf/9.JPG")`;
      tableObjec.for9.style.backgroundRepeat = `no-repeat`;
      tableObjec.for9.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 16) {
      let recentImg10 = document.getElementById("forImgTen");
      recentImg10.style.display = "none";
      tableObjec.for10.style.background = `
    url("cf/10.JPG")`;
      tableObjec.for10.style.backgroundRepeat = `no-repeat`;
      tableObjec.for10.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 17) {
      let recentImg11 = document.getElementById("forImgEleven");
      recentImg11.style.display = "none";
      tableObjec.for11.style.background = `
    url("cf/11.JPG")`;
      tableObjec.for11.style.backgroundRepeat = `no-repeat`;
      tableObjec.for11.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 18) {
      let recentImg12 = document.getElementById("forImgTwelve");
      recentImg12.style.display = "none";
      tableObjec.for12.style.background = `
    url("cf/12.JPG")`;
      tableObjec.for12.style.backgroundRepeat = `no-repeat`;
      tableObjec.for12.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 19) {
      let recentImg13 = document.getElementById("forImgThirteen");
      recentImg13.style.display = "none";
      tableObjec.for13.style.background = `
    url("cf/13.JPG")`;
      tableObjec.for13.style.backgroundRepeat = `no-repeat`;
      tableObjec.for13.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 20) {
      let recentImg14 = document.getElementById("forImgFourteen");
      recentImg14.style.display = "none";
      tableObjec.for14.style.background = `
    url("cf/14.JPG")`;
      tableObjec.for14.style.backgroundRepeat = `no-repeat`;
      tableObjec.for14.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 21) {
      let recentImg15 = document.getElementById("forImgFiften");
      recentImg15.style.display = "none";
      tableObjec.for15.style.background = `
    url("cf/15.JPG")`;
      tableObjec.for15.style.backgroundRepeat = `no-repeat`;
      tableObjec.for15.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 22) {
      let recentImg16 = document.getElementById("forImgSixteen");
      recentImg16.style.display = "none";
      tableObjec.for16.style.background = `
    url("cf/16.JPG")`;
      tableObjec.for16.style.backgroundRepeat = `no-repeat`;
      tableObjec.for16.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 23) {
      let recentImg17 = document.getElementById("forImgSeventeen");
      recentImg17.style.display = "none";
      tableObjec.for17.style.background = `
    url("cf/17.JPG")`;
      tableObjec.for17.style.backgroundRepeat = `no-repeat`;
      tableObjec.for17.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 24) {
      let recentImg18 = document.getElementById("forImgEighteen");
      recentImg18.style.display = "none";
      tableObjec.for18.style.background = `
    url("cf/18.JPG")`;
      tableObjec.for18.style.backgroundRepeat = `no-repeat`;
      tableObjec.for18.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 25) {
      let recentImg19 = document.getElementById("forImgNineteen");
      recentImg19.style.display = "none";
      tableObjec.for19.style.background = `
    url("cf/19.JPG")`;
      tableObjec.for19.style.backgroundRepeat = `no-repeat`;
      tableObjec.for19.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 26) {
      let recentImg20 = document.getElementById("forImgTwenty");
      recentImg20.style.display = "none";
      tableObjec.for20.style.background = `
    url("cf/20.JPG")`;
      tableObjec.for20.style.backgroundRepeat = `no-repeat`;
      tableObjec.for20.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 27) {
      let recentImg21 = document.getElementById("forImgTwentyOne");
      recentImg21.style.display = "none";
      tableObjec.for21.style.background = `
    url("cf/21.JPG")`;
      tableObjec.for21.style.backgroundRepeat = `no-repeat`;
      tableObjec.for21.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 28) {
      let recentImg22 = document.getElementById("forImgTwentyTwo");
      recentImg22.style.display = "none";
      tableObjec.for22.style.background = `
    url("cf/22.JPG")`;
      tableObjec.for22.style.backgroundRepeat = `no-repeat`;
      tableObjec.for22.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 29) {
      let recentImg23 = document.getElementById("forImgTwentyThree");
      recentImg23.style.display = "none";
      tableObjec.for23.style.background = `
    url("cf/23.JPG")`;
      tableObjec.for23.style.backgroundRepeat = `no-repeat`;
      tableObjec.for23.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 30) {
      let recentImg24 = document.getElementById("forImgTwentyFour");
      recentImg24.style.display = "none";
      tableObjec.for24.style.background = `
    url("cf/24.JPG")`;
      tableObjec.for24.style.backgroundRepeat = `no-repeat`;
      tableObjec.for24.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 31) {
      let recentImg25 = document.getElementById("forImgTwentyFive");
      recentImg25.style.display = "none";
      tableObjec.for25.style.background = `
    url("cf/25.JPG")`;
      tableObjec.for25.style.backgroundRepeat = `no-repeat`;
      tableObjec.for25.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 32) {
      let recentImg26 = document.getElementById("forImgTwentySix");
      recentImg26.style.display = "none";
      tableObjec.for26.style.background = `
    url("cf/26.JPG")`;
      tableObjec.for26.style.backgroundRepeat = `no-repeat`;
      tableObjec.for26.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 33) {
      let recentImg27 = document.getElementById("forImgTwentySeven");
      recentImg27.style.display = "none";
      tableObjec.for27.style.background = `
    url("cf/27.JPG")`;
      tableObjec.for27.style.backgroundRepeat = `no-repeat`;
      tableObjec.for27.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 34) {
      let recentImg28 = document.getElementById("forImgTwentyEight");
      recentImg28.style.display = "none";
      tableObjec.for28.style.background = `
    url("cf/28.JPG")`;
      tableObjec.for28.style.backgroundRepeat = `no-repeat`;
      tableObjec.for28.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 35) {
      let recentImg29 = document.getElementById("forImgTwentyNine");
      recentImg29.style.display = "none";
      tableObjec.for29.style.background = `
    url("cf/29.JPG")`;
      tableObjec.for29.style.backgroundRepeat = `no-repeat`;
      tableObjec.for29.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 36) {
      let recentImg30 = document.getElementById("forImgThirty");
      recentImg30.style.display = "none";
      tableObjec.for30.style.background = `
    url("cf/30.JPG")`;
      tableObjec.for30.style.backgroundRepeat = `no-repeat`;
      tableObjec.for30.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 37) {
      let recentImg31 = document.getElementById("forImgThirtyOne");
      recentImg31.style.display = "none";
      tableObjec.for31.style.background = `
    url("cf/31.JPG")`;
      tableObjec.for31.style.backgroundRepeat = `no-repeat`;
      tableObjec.for31.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 38) {
      let recentImg32 = document.getElementById("forImgThirtyTwo");
      recentImg32.style.display = "none";
      tableObjec.for32.style.background = `
    url("cf/32.JPG")`;
      tableObjec.for32.style.backgroundRepeat = `no-repeat`;
      tableObjec.for32.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 39) {
      let recentImg33 = document.getElementById("forImgThirtyThree");
      recentImg33.style.display = "none";
      tableObjec.for33.style.background = `
    url("cf/33.JPG")`;
      tableObjec.for33.style.backgroundRepeat = `no-repeat`;
      tableObjec.for33.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 40) {
      let recentImg34 = document.getElementById("forImgThirtyFour");
      recentImg34.style.display = "none";
      tableObjec.for34.style.background = `
    url("cf/34.JPG")`;
      tableObjec.for34.style.backgroundRepeat = `no-repeat`;
      tableObjec.for34.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 41) {
      let recentImg35 = document.getElementById("forImgThirtyFive");
      recentImg35.style.display = "none";
      tableObjec.for35.style.background = `
    url("cf/35.JPG")`;
      tableObjec.for35.style.backgroundRepeat = `no-repeat`;
      tableObjec.for35.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 42) {
      let recentImg36 = document.getElementById("forImgThirtySix");
      recentImg36.style.display = "none";
      tableObjec.for36.style.background = `
    url("cf/36.JPG")`;
      tableObjec.for36.style.backgroundRepeat = `no-repeat`;
      tableObjec.for36.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 43) {
      let recentImg37 = document.getElementById("forImgThirtySeven");
      recentImg37.style.display = "none";
      tableObjec.for37.style.background = `
    url("cf/37.JPG")`;
      tableObjec.for37.style.backgroundRepeat = `no-repeat`;
      tableObjec.for37.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 44) {
      let recentImg38 = document.getElementById("forImgThirtyEight");
      recentImg38.style.display = "none";
      tableObjec.for38.style.background = `
    url("cf/38.JPG")`;
      tableObjec.for38.style.backgroundRepeat = `no-repeat`;
      tableObjec.for38.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 45) {
      let recentImg39 = document.getElementById("forImgThirtyNine");
      recentImg39.style.display = "none";
      tableObjec.for39.style.background = `
    url("cf/39.JPG")`;
      tableObjec.for39.style.backgroundRepeat = `no-repeat`;
      tableObjec.for39.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 46) {
      let recentImg40 = document.getElementById("forImgFourty");
      recentImg40.style.display = "none";
      tableObjec.for40.style.background = `
    url("cf/40.JPG")`;
      tableObjec.for40.style.backgroundRepeat = `no-repeat`;
      tableObjec.for40.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 47) {
      let recentImg41 = document.getElementById("forImgFourtyOne");
      recentImg41.style.display = "none";
      tableObjec.for41.style.background = `
    url("cf/41.JPG")`;
      tableObjec.for41.style.backgroundRepeat = `no-repeat`;
      tableObjec.for41.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 48) {
      let recentImg42 = document.getElementById("forImgFourtyTwo");
      recentImg42.style.display = "none";
      tableObjec.for42.style.background = `
    url("cf/42.JPG")`;
      tableObjec.for42.style.backgroundRepeat = `no-repeat`;
      tableObjec.for42.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 49) {
      let recentImg43 = document.getElementById("forImgFourtyThree");
      recentImg43.style.display = "none";
      tableObjec.for43.style.background = `
    url("cf/43.JPG")`;
      tableObjec.for43.style.backgroundRepeat = `no-repeat`;
      tableObjec.for43.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 50) {
      let recentImg44 = document.getElementById("forImgFourtyFour");
      recentImg44.style.display = "none";
      tableObjec.for44.style.background = `
    url("cf/44.JPG")`;
      tableObjec.for44.style.backgroundRepeat = `no-repeat`;
      tableObjec.for44.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 51) {
      let recentImg45 = document.getElementById("forImgFourtyFive");
      recentImg45.style.display = "none";
      tableObjec.for45.style.background = `
    url("cf/45.JPG")`;
      tableObjec.for45.style.backgroundRepeat = `no-repeat`;
      tableObjec.for45.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 52) {
      let recentImg46 = document.getElementById("forImgFourtySix");
      recentImg46.style.display = "none";
      tableObjec.for46.style.background = `
    url("cf/46.JPG")`;
      tableObjec.for46.style.backgroundRepeat = `no-repeat`;
      tableObjec.for46.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 53) {
      let recentImg47 = document.getElementById("forImgFourtySeven");
      recentImg47.style.display = "none";
      tableObjec.for47.style.background = `
    url("cf/47.JPG")`;
      tableObjec.for47.style.backgroundRepeat = `no-repeat`;
      tableObjec.for47.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 54) {
      let recentImg48 = document.getElementById("forImgFourtyEight");
      recentImg48.style.display = "none";
      tableObjec.for48.style.background = `
    url("cf/48.JPG")`;
      tableObjec.for48.style.backgroundRepeat = `no-repeat`;
      tableObjec.for48.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 55) {
      let recentImg49 = document.getElementById("forImgFourtyNine");
      recentImg49.style.display = "none";
      tableObjec.for49.style.background = `
    url("cf/49.JPG")`;
      tableObjec.for49.style.backgroundRepeat = `no-repeat`;
      tableObjec.for49.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 56) {
      let recentImg50 = document.getElementById("forImgFifty");
      recentImg50.style.display = "none";
      tableObjec.for50.style.background = `
    url("cf/50.JPG")`;
      tableObjec.for50.style.backgroundRepeat = `no-repeat`;
      tableObjec.for50.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    }
  currentColorIndex = (currentColorIndex + 1) % colors.length;
};
const blinkBackground = () => {
  if (myTurn == true && computerTurn == false || myTurn == false && computerTurn == true) {
    if (getBackMyStoVar == 6) {
      let recentImgStart = document.getElementById("forImgStart");
      recentImgStart.style.display = "none";
      tableObjec.forStart.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/start.JPG")`;
      tableObjec.forStart.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.backgroundRepeat = `no-repeat`;
      tableObjec.forStart.style.justifyContent = `center`;
      // tableObjec.for1.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 7) {
      let recentImg1 = document.getElementById("forImgOne");
      recentImg1.style.display = "none";
      tableObjec.for1.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/1.JPG")`;
      tableObjec.for1.style.backgroundRepeat = `no-repeat`;
      tableObjec.for1.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 8) {
      let recentImg2 = document.getElementById("forImgTwo");
      recentImg2.style.display = "none";
      tableObjec.for2.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/2.JPG")`;
      tableObjec.for2.style.backgroundRepeat = `no-repeat`;
      tableObjec.for2.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 9) {
      let recentImg3 = document.getElementById("forImgThree");
      recentImg3.style.display = "none";
      tableObjec.for3.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/3.JPG")`;
      tableObjec.for3.style.backgroundRepeat = `no-repeat`;
      tableObjec.for3.style.backgroundSize = `90%`; //tableObjec.forStart.style.justifyContent = `center`;  
      tableObjec.forStart.style.justifyContent = `center`;
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 10) {
      let recentImg4 = document.getElementById("forImgFour");
      recentImg4.style.display = "none";
      tableObjec.for4.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/4.JPG")`;
      tableObjec.for4.style.backgroundRepeat = `no-repeat`;
      tableObjec.for4.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackMyStoVar == 11) {
      let recentImg5 = document.getElementById("forImgFive");
      recentImg5.style.display = "none";
      tableObjec.for5.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/5.JPG")`;
      tableObjec.for5.style.backgroundRepeat = `no-repeat`;
      tableObjec.for5.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 12) {
      let recentImg6 = document.getElementById("forImgSix");
      recentImg6.style.display = "none";
      tableObjec.for6.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/6.JPG")`;
      tableObjec.for6.style.backgroundRepeat = `no-repeat`;
      tableObjec.for6.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 13) {
      let recentImg7 = document.getElementById("forImgSeven");
      recentImg7.style.display = "none";
      tableObjec.for7.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/7.JPG")`;
      tableObjec.for7.style.backgroundRepeat = `no-repeat`;
      tableObjec.for7.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 14) {
      let recentImg8 = document.getElementById("forImgEight");
      recentImg8.style.display = "none";
      tableObjec.for8.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/8.JPG")`;
      tableObjec.for8.style.backgroundRepeat = `no-repeat`;
      tableObjec.for8.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 15) {
      let recentImg9 = document.getElementById("forImgNine");
      recentImg9.style.display = "none";
      tableObjec.for9.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/9.JPG")`;
      tableObjec.for9.style.backgroundRepeat = `no-repeat`;
      tableObjec.for9.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 16) {
      let recentImg10 = document.getElementById("forImgTen");
      recentImg10.style.display = "none";
      tableObjec.for10.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/10.JPG")`;
      tableObjec.for10.style.backgroundRepeat = `no-repeat`;
      tableObjec.for10.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 17) {
      let recentImg11 = document.getElementById("forImgEleven");
      recentImg11.style.display = "none";
      tableObjec.for11.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/11.JPG")`;
      tableObjec.for11.style.backgroundRepeat = `no-repeat`;
      tableObjec.for11.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 18) {
      let recentImg12 = document.getElementById("forImgTwelve");
      recentImg12.style.display = "none";
      tableObjec.for12.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/12.JPG")`;
      tableObjec.for12.style.backgroundRepeat = `no-repeat`;
      tableObjec.for12.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 19) {
      let recentImg13 = document.getElementById("forImgThirteen");
      recentImg13.style.display = "none";
      tableObjec.for13.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/13.JPG")`;
      tableObjec.for13.style.backgroundRepeat = `no-repeat`;
      tableObjec.for13.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 20) {
      let recentImg14 = document.getElementById("forImgFourteen");
      recentImg14.style.display = "none";
      tableObjec.for14.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/14.JPG")`;
      tableObjec.for14.style.backgroundRepeat = `no-repeat`;
      tableObjec.for14.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 21) {
      let recentImg15 = document.getElementById("forImgFiften");
      recentImg15.style.display = "none";
      tableObjec.for15.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/15.JPG")`;
      tableObjec.for15.style.backgroundRepeat = `no-repeat`;
      tableObjec.for15.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 22) {
      let recentImg16 = document.getElementById("forImgSixteen");
      recentImg16.style.display = "none";
      tableObjec.for16.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/16.JPG")`;
      tableObjec.for16.style.backgroundRepeat = `no-repeat`;
      tableObjec.for16.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 23) {
      let recentImg17 = document.getElementById("forImgSeventeen");
      recentImg17.style.display = "none";
      tableObjec.for17.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/17.JPG")`;
      tableObjec.for17.style.backgroundRepeat = `no-repeat`;
      tableObjec.for17.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 24) {
      let recentImg18 = document.getElementById("forImgEighteen");
      recentImg18.style.display = "none";
      tableObjec.for18.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/18.JPG")`;
      tableObjec.for18.style.backgroundRepeat = `no-repeat`;
      tableObjec.for18.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 25) {
      let recentImg19 = document.getElementById("forImgNineteen");
      recentImg19.style.display = "none";
      tableObjec.for19.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/19.JPG")`;
      tableObjec.for19.style.backgroundRepeat = `no-repeat`;
      tableObjec.for19.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 26) {
      let recentImg20 = document.getElementById("forImgTwenty");
      recentImg20.style.display = "none";
      tableObjec.for20.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/20.JPG")`;
      tableObjec.for20.style.backgroundRepeat = `no-repeat`;
      tableObjec.for20.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 27) {
      let recentImg21 = document.getElementById("forImgTwentyOne");
      recentImg21.style.display = "none";
      tableObjec.for21.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/21.JPG")`;
      tableObjec.for21.style.backgroundRepeat = `no-repeat`;
      tableObjec.for21.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 28) {
      let recentImg22 = document.getElementById("forImgTwentyTwo");
      recentImg22.style.display = "none";
      tableObjec.for22.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/22.JPG")`;
      tableObjec.for22.style.backgroundRepeat = `no-repeat`;
      tableObjec.for22.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 29) {
      let recentImg23 = document.getElementById("forImgTwentyThree");
      recentImg23.style.display = "none";
      tableObjec.for23.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/23.JPG")`;
      tableObjec.for23.style.backgroundRepeat = `no-repeat`;
      tableObjec.for23.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 30) {
      let recentImg24 = document.getElementById("forImgTwentyFour");
      recentImg24.style.display = "none";
      tableObjec.for24.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/24.JPG")`;
      tableObjec.for24.style.backgroundRepeat = `no-repeat`;
      tableObjec.for24.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 31) {
      let recentImg25 = document.getElementById("forImgTwentyFive");
      recentImg25.style.display = "none";
      tableObjec.for25.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/25.JPG")`;
      tableObjec.for25.style.backgroundRepeat = `no-repeat`;
      tableObjec.for25.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 32) {
      let recentImg26 = document.getElementById("forImgTwentySix");
      recentImg26.style.display = "none";
      tableObjec.for26.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/26.JPG")`;
      tableObjec.for26.style.backgroundRepeat = `no-repeat`;
      tableObjec.for26.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 33) {
      let recentImg27 = document.getElementById("forImgTwentySeven");
      recentImg27.style.display = "none";
      tableObjec.for27.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/27.JPG")`;
      tableObjec.for27.style.backgroundRepeat = `no-repeat`;
      tableObjec.for27.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 34) {
      let recentImg28 = document.getElementById("forImgTwentyEight");
      recentImg28.style.display = "none";
      tableObjec.for28.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/28.JPG")`;
      tableObjec.for28.style.backgroundRepeat = `no-repeat`;
      tableObjec.for28.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 35) {
      let recentImg29 = document.getElementById("forImgTwentyNine");
      recentImg29.style.display = "none";
      tableObjec.for29.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/29.JPG")`;
      tableObjec.for29.style.backgroundRepeat = `no-repeat`;
      tableObjec.for29.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 36) {
      let recentImg30 = document.getElementById("forImgThirty");
      recentImg30.style.display = "none";
      tableObjec.for30.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/30.JPG")`;
      tableObjec.for30.style.backgroundRepeat = `no-repeat`;
      tableObjec.for30.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 37) {
      let recentImg31 = document.getElementById("forImgThirtyOne");
      recentImg31.style.display = "none";
      tableObjec.for31.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/31.JPG")`;
      tableObjec.for31.style.backgroundRepeat = `no-repeat`;
      tableObjec.for31.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 38) {
      let recentImg32 = document.getElementById("forImgThirtyTwo");
      recentImg32.style.display = "none";
      tableObjec.for32.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/32.JPG")`;
      tableObjec.for32.style.backgroundRepeat = `no-repeat`;
      tableObjec.for32.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 39) {
      let recentImg33 = document.getElementById("forImgThirtyThree");
      recentImg33.style.display = "none";
      tableObjec.for33.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/33.JPG")`;
      tableObjec.for33.style.backgroundRepeat = `no-repeat`;
      tableObjec.for33.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 40) {
      let recentImg34 = document.getElementById("forImgThirtyFour");
      recentImg34.style.display = "none";
      tableObjec.for34.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/34.JPG")`;
      tableObjec.for34.style.backgroundRepeat = `no-repeat`;
      tableObjec.for34.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 41) {
      let recentImg35 = document.getElementById("forImgThirtyFive");
      recentImg35.style.display = "none";
      tableObjec.for35.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/35.JPG")`;
      tableObjec.for35.style.backgroundRepeat = `no-repeat`;
      tableObjec.for35.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 42) {
      let recentImg36 = document.getElementById("forImgThirtySix");
      recentImg36.style.display = "none";
      tableObjec.for36.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/36.JPG")`;
      tableObjec.for36.style.backgroundRepeat = `no-repeat`;
      tableObjec.for36.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 43) {
      let recentImg37 = document.getElementById("forImgThirtySeven");
      recentImg37.style.display = "none";
      tableObjec.for37.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/37.JPG")`;
      tableObjec.for37.style.backgroundRepeat = `no-repeat`;
      tableObjec.for37.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 44) {
      let recentImg38 = document.getElementById("forImgThirtyEight");
      recentImg38.style.display = "none";
      tableObjec.for38.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/38.JPG")`;
      tableObjec.for38.style.backgroundRepeat = `no-repeat`;
      tableObjec.for38.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 45) {
      let recentImg39 = document.getElementById("forImgThirtyNine");
      recentImg39.style.display = "none";
      tableObjec.for39.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/39.JPG")`;
      tableObjec.for39.style.backgroundRepeat = `no-repeat`;
      tableObjec.for39.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 46) {
      let recentImg40 = document.getElementById("forImgFourty");
      recentImg40.style.display = "none";
      tableObjec.for40.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/40.JPG")`;
      tableObjec.for40.style.backgroundRepeat = `no-repeat`;
      tableObjec.for40.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 47) {
      let recentImg41 = document.getElementById("forImgFourtyOne");
      recentImg41.style.display = "none";
      tableObjec.for41.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/41.JPG")`;
      tableObjec.for41.style.backgroundRepeat = `no-repeat`;
      tableObjec.for41.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 48) {
      let recentImg42 = document.getElementById("forImgFourtyTwo");
      recentImg42.style.display = "none";
      tableObjec.for42.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/42.JPG")`;
      tableObjec.for42.style.backgroundRepeat = `no-repeat`;
      tableObjec.for42.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 49) {
      let recentImg43 = document.getElementById("forImgFourtyThree");
      recentImg43.style.display = "none";
      tableObjec.for43.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/43.JPG")`;
      tableObjec.for43.style.backgroundRepeat = `no-repeat`;
      tableObjec.for43.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 50) {
      let recentImg44 = document.getElementById("forImgFourtyFour");
      recentImg44.style.display = "none";
      tableObjec.for44.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/44.JPG")`;
      tableObjec.for44.style.backgroundRepeat = `no-repeat`;
      tableObjec.for44.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 51) {
      let recentImg45 = document.getElementById("forImgFourtyFive");
      recentImg45.style.display = "none";
      tableObjec.for45.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/45.JPG")`;
      tableObjec.for45.style.backgroundRepeat = `no-repeat`;
      tableObjec.for45.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 52) {
      let recentImg46 = document.getElementById("forImgFourtySix");
      recentImg46.style.display = "none";
      tableObjec.for46.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/46.JPG")`;
      tableObjec.for46.style.backgroundRepeat = `no-repeat`;
      tableObjec.for46.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 53) {
      let recentImg47 = document.getElementById("forImgFourtySeven");
      recentImg47.style.display = "none";
      tableObjec.for47.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/47.JPG")`;
      tableObjec.for47.style.backgroundRepeat = `no-repeat`;
      tableObjec.for47.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 54) {
      let recentImg48 = document.getElementById("forImgFourtyEight");
      recentImg48.style.display = "none";
      tableObjec.for48.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/48.JPG")`;
      tableObjec.for48.style.backgroundRepeat = `no-repeat`;
      tableObjec.for48.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 55) {
      let recentImg49 = document.getElementById("forImgFourtyNine");
      recentImg49.style.display = "none";
      tableObjec.for49.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/49.JPG")`;
      tableObjec.for49.style.backgroundRepeat = `no-repeat`;
      tableObjec.for49.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackMyStoVar == 56) {
      let recentImg50 = document.getElementById("forImgFifty");
      recentImg50.style.display = "none";
      tableObjec.for50.style.background = `linear-gradient( 120deg, rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]}), rgba(255, 165, 0, ${colors[currentColorIndex]})),
    url("cf/50.JPG")`;
      tableObjec.for50.style.backgroundRepeat = `no-repeat`;
      tableObjec.for50.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    }
    // document.getElementsByTagName("td").style.backgroundColor = `red`
 
    if (getBackComputerStoVar == 6) {
      let recentImgStart = document.getElementById("forImgStart");
      recentImgStart.style.display = "none";
      tableObjec.forStart.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/start.JPG")`;
      tableObjec.forStart.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      tableObjec.forStart.style.backgroundRepeat = `no-repeat`;
      // tableObjec.for1.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 7) {
      let recentImg1 = document.getElementById("forImgOne");
      recentImg1.style.display = "none";
      tableObjec.for1.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/1.JPG")`;
      tableObjec.for1.style.backgroundRepeat = `no-repeat`;
      tableObjec.for1.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 8) {
      let recentImg2 = document.getElementById("forImgTwo");
      recentImg2.style.display = "none";
      tableObjec.for2.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/2.JPG")`;
      tableObjec.for2.style.backgroundRepeat = `no-repeat`;
      tableObjec.for2.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 9) {
      let recentImg3 = document.getElementById("forImgThree");
      recentImg3.style.display = "none";
      tableObjec.for3.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/3.JPG")`;
      tableObjec.for3.style.backgroundRepeat = `no-repeat`;
      tableObjec.for3.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 10) {
      let recentImg4 = document.getElementById("forImgFour");
      recentImg4.style.display = "none";
      tableObjec.for4.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/4.JPG")`;
      tableObjec.for4.style.backgroundRepeat = `no-repeat`;
      tableObjec.for4.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
      // for2.style.backgroundColor = colors[currentColorIndex]
    } else if (getBackComputerStoVar == 11) {
      let recentImg5 = document.getElementById("forImgFive");
      recentImg5.style.display = "none";
      tableObjec.for5.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/5.JPG")`;
      tableObjec.for5.style.backgroundRepeat = `no-repeat`;
      tableObjec.for5.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 12) {
      let recentImg6 = document.getElementById("forImgSix");
      recentImg6.style.display = "none";
      tableObjec.for6.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/6.JPG")`;
      tableObjec.for6.style.backgroundRepeat = `no-repeat`;
      tableObjec.for6.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 13) {
      let recentImg7 = document.getElementById("forImgSeven");
      recentImg7.style.display = "none";
      tableObjec.for7.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/7.JPG")`;
      tableObjec.for7.style.backgroundRepeat = `no-repeat`;
      tableObjec.for7.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 14) {
      let recentImg8 = document.getElementById("forImgEight");
      recentImg8.style.display = "none";
      tableObjec.for8.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/8.JPG")`;
      tableObjec.for8.style.backgroundRepeat = `no-repeat`;
      tableObjec.for8.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 15) {
      let recentImg9 = document.getElementById("forImgNine");
      recentImg9.style.display = "none";
      tableObjec.for9.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/9.JPG")`;
      tableObjec.for9.style.backgroundRepeat = `no-repeat`;
      tableObjec.for9.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 16) {
      let recentImg10 = document.getElementById("forImgTen");
      recentImg10.style.display = "none";
      tableObjec.for10.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/10.JPG")`;
      tableObjec.for10.style.backgroundRepeat = `no-repeat`;
      tableObjec.for10.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 17) {
      let recentImg11 = document.getElementById("forImgEleven");
      recentImg11.style.display = "none";
      tableObjec.for11.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/11.JPG")`;
      tableObjec.for11.style.backgroundRepeat = `no-repeat`;
      tableObjec.for11.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 18) {
      let recentImg12 = document.getElementById("forImgTwelve");
      recentImg12.style.display = "none";
      tableObjec.for12.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/12.JPG")`;
      tableObjec.for12.style.backgroundRepeat = `no-repeat`;
      tableObjec.for12.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 19) {
      let recentImg13 = document.getElementById("forImgThirteen");
      recentImg13.style.display = "none";
      tableObjec.for13.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/13.JPG")`;
      tableObjec.for13.style.backgroundRepeat = `no-repeat`;
      tableObjec.for13.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 20) {
      let recentImg14 = document.getElementById("forImgFourteen");
      recentImg14.style.display = "none";
      tableObjec.for14.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/14.JPG")`;
      tableObjec.for14.style.backgroundRepeat = `no-repeat`;
      tableObjec.for14.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 21) {
      let recentImg15 = document.getElementById("forImgFiften");
      recentImg15.style.display = "none";
      tableObjec.for15.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/15.JPG")`;
      tableObjec.for15.style.backgroundRepeat = `no-repeat`;
      tableObjec.for15.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 22) {
      let recentImg16 = document.getElementById("forImgSixteen");
      recentImg16.style.display = "none";
      tableObjec.for16.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/16.JPG")`;
      tableObjec.for16.style.backgroundRepeat = `no-repeat`;
      tableObjec.for16.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 23) {
      let recentImg17 = document.getElementById("forImgSeventeen");
      recentImg17.style.display = "none";
      tableObjec.for17.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/17.JPG")`;
      tableObjec.for17.style.backgroundRepeat = `no-repeat`;
      tableObjec.for17.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 24) {
      let recentImg18 = document.getElementById("forImgEighteen");
      recentImg18.style.display = "none";
      tableObjec.for18.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/18.JPG")`;
      tableObjec.for18.style.backgroundRepeat = `no-repeat`;
      tableObjec.for18.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 25) {
      let recentImg19 = document.getElementById("forImgNineteen");
      recentImg19.style.display = "none";
      tableObjec.for19.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/19.JPG")`;
      tableObjec.for19.style.backgroundRepeat = `no-repeat`;
      tableObjec.for19.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 26) {
      let recentImg20 = document.getElementById("forImgTwenty");
      recentImg20.style.display = "none";
      tableObjec.for20.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/20.JPG")`;
      tableObjec.for20.style.backgroundRepeat = `no-repeat`;
      tableObjec.for20.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 27) {
      let recentImg21 = document.getElementById("forImgTwentyOne");
      recentImg21.style.display = "none";
      tableObjec.for21.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/21.JPG")`;
      tableObjec.for21.style.backgroundRepeat = `no-repeat`;
      tableObjec.for21.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 28) {
      let recentImg22 = document.getElementById("forImgTwentyTwo");
      recentImg22.style.display = "none";
      tableObjec.for22.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/22.JPG")`;
      tableObjec.for22.style.backgroundRepeat = `no-repeat`;
      tableObjec.for22.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 29) {
      let recentImg23 = document.getElementById("forImgTwentyThree");
      recentImg23.style.display = "none";
      tableObjec.for23.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/23.JPG")`;
      tableObjec.for23.style.backgroundRepeat = `no-repeat`;
      tableObjec.for23.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 30) {
      let recentImg24 = document.getElementById("forImgTwentyFour");
      recentImg24.style.display = "none";
      tableObjec.for24.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/24.JPG")`;
      tableObjec.for24.style.backgroundRepeat = `no-repeat`;
      tableObjec.for24.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 31) {
      let recentImg25 = document.getElementById("forImgTwentyFive");
      recentImg25.style.display = "none";
      tableObjec.for25.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/25.JPG")`;
      tableObjec.for25.style.backgroundRepeat = `no-repeat`;
      tableObjec.for25.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 32) {
      let recentImg26 = document.getElementById("forImgTwentySix");
      recentImg26.style.display = "none";
      tableObjec.for26.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/26.JPG")`;
      tableObjec.for26.style.backgroundRepeat = `no-repeat`;
      tableObjec.for26.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 33) {
      let recentImg27 = document.getElementById("forImgTwentySeven");
      recentImg27.style.display = "none";
      tableObjec.for27.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/27.JPG")`;
      tableObjec.for27.style.backgroundRepeat = `no-repeat`;
      tableObjec.for27.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 34) {
      let recentImg28 = document.getElementById("forImgTwentyEight");
      recentImg28.style.display = "none";
      tableObjec.for28.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/28.JPG")`;
      tableObjec.for28.style.backgroundRepeat = `no-repeat`;
      tableObjec.for28.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 35) {
      let recentImg29 = document.getElementById("forImgTwentyNine");
      recentImg29.style.display = "none";
      tableObjec.for29.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/29.JPG")`;
      tableObjec.for29.style.backgroundRepeat = `no-repeat`;
      tableObjec.for29.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 36) {
      let recentImg30 = document.getElementById("forImgThirty");
      recentImg30.style.display = "none";
      tableObjec.for30.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/30.JPG")`;
      tableObjec.for30.style.backgroundRepeat = `no-repeat`;
      tableObjec.for30.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 37) {
      let recentImg31 = document.getElementById("forImgThirtyOne");
      recentImg31.style.display = "none";
      tableObjec.for31.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/31.JPG")`;
      tableObjec.for31.style.backgroundRepeat = `no-repeat`;
      tableObjec.for31.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 38) {
      let recentImg32 = document.getElementById("forImgThirtyTwo");
      recentImg32.style.display = "none";
      tableObjec.for32.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/32.JPG")`;
      tableObjec.for32.style.backgroundRepeat = `no-repeat`;
      tableObjec.for32.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 39) {
      let recentImg33 = document.getElementById("forImgThirtyThree");
      recentImg33.style.display = "none";
      tableObjec.for33.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/33.JPG")`;
      tableObjec.for33.style.backgroundRepeat = `no-repeat`;
      tableObjec.for33.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 40) {
      let recentImg34 = document.getElementById("forImgThirtyFour");
      recentImg34.style.display = "none";
      tableObjec.for34.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/34.JPG")`;
      tableObjec.for34.style.backgroundRepeat = `no-repeat`;
      tableObjec.for34.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 41) {
      let recentImg35 = document.getElementById("forImgThirtyFive");
      recentImg35.style.display = "none";
      tableObjec.for35.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/35.JPG")`;
      tableObjec.for35.style.backgroundRepeat = `no-repeat`;
      tableObjec.for35.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 42) {
      let recentImg36 = document.getElementById("forImgThirtySix");
      recentImg36.style.display = "none";
      tableObjec.for36.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/36.JPG")`;
      tableObjec.for36.style.backgroundRepeat = `no-repeat`;
      tableObjec.for36.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 43) {
      let recentImg37 = document.getElementById("forImgThirtySeven");
      recentImg37.style.display = "none";
      tableObjec.for37.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/37.JPG")`;
      tableObjec.for37.style.backgroundRepeat = `no-repeat`;
      tableObjec.for37.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 44) {
      let recentImg38 = document.getElementById("forImgThirtyEight");
      recentImg38.style.display = "none";
      tableObjec.for38.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/38.JPG")`;
      tableObjec.for38.style.backgroundRepeat = `no-repeat`;
      tableObjec.for38.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 45) {
      let recentImg39 = document.getElementById("forImgThirtyNine");
      recentImg39.style.display = "none";
      tableObjec.for39.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/39.JPG")`;
      tableObjec.for39.style.backgroundRepeat = `no-repeat`;
      tableObjec.for39.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 46) {
      let recentImg40 = document.getElementById("forImgFourty");
      recentImg40.style.display = "none";
      tableObjec.for40.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/40.JPG")`;
      tableObjec.for40.style.backgroundRepeat = `no-repeat`;
      tableObjec.for40.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 47) {
      let recentImg41 = document.getElementById("forImgFourtyOne");
      recentImg41.style.display = "none";
      tableObjec.for41.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/41.JPG")`;
      tableObjec.for41.style.backgroundRepeat = `no-repeat`;
      tableObjec.for41.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 48) {
      let recentImg42 = document.getElementById("forImgFourtyTwo");
      recentImg42.style.display = "none";
      tableObjec.for42.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/42.JPG")`;
      tableObjec.for42.style.backgroundRepeat = `no-repeat`;
      tableObjec.for42.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 49) {
      let recentImg43 = document.getElementById("forImgFourtyThree");
      recentImg43.style.display = "none";
      tableObjec.for43.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/43.JPG")`;
      tableObjec.for43.style.backgroundRepeat = `no-repeat`;
      tableObjec.for43.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 50) {
      let recentImg44 = document.getElementById("forImgFourtyFour");
      recentImg44.style.display = "none";
      tableObjec.for44.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/44.JPG")`;
      tableObjec.for44.style.backgroundRepeat = `no-repeat`;
      tableObjec.for44.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 51) {
      let recentImg45 = document.getElementById("forImgFourtyFive");
      recentImg45.style.display = "none";
      tableObjec.for45.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/45.JPG")`;
      tableObjec.for45.style.backgroundRepeat = `no-repeat`;
      tableObjec.for45.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 52) {
      let recentImg46 = document.getElementById("forImgFourtySix");
      recentImg46.style.display = "none";
      tableObjec.for46.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/46.JPG")`;
      tableObjec.for46.style.backgroundRepeat = `no-repeat`;
      tableObjec.for46.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 53) {
      let recentImg47 = document.getElementById("forImgFourtySeven");
      recentImg47.style.display = "none";
      tableObjec.for47.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/47.JPG")`;
      tableObjec.for47.style.backgroundRepeat = `no-repeat`;
      tableObjec.for47.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 54) {
      let recentImg48 = document.getElementById("forImgFourtyEight");
      recentImg48.style.display = "none";
      tableObjec.for48.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/48.JPG")`;
      tableObjec.for48.style.backgroundRepeat = `no-repeat`;
      tableObjec.for48.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 55) {
      let recentImg49 = document.getElementById("forImgFourtyNine");
      recentImg49.style.display = "none";
      tableObjec.for49.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/49.JPG")`;
      tableObjec.for49.style.backgroundRepeat = `no-repeat`;
      tableObjec.for49.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    } else if (getBackComputerStoVar == 56) {
      let recentImg50 = document.getElementById("forImgFifty");
      recentImg50.style.display = "none";
      tableObjec.for50.style.background = `linear-gradient( 120deg, rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]}), rgba(255, 255, 0, ${colors[currentColorIndex]})),
    url("cf/50.JPG")`;
      tableObjec.for50.style.backgroundRepeat = `no-repeat`;
      tableObjec.for50.style.backgroundSize = `90%`; tableObjec.forStart.style.justifyContent = `center`; 
    }
  currentColorIndex = (currentColorIndex + 1) % colors.length;
};}

// document.getElementById("playerTurn").innerText = (computerTurn)
const playerSigner = ()=>{
  if(computerTurn){
    document.getElementById("playerTurn").innerText = secondPersonPlaying
    
  }else if(myTurn){
    document.getElementById("playerTurn").innerText = firstPersonPlaying
  }
}
// table display game
var tableObjec = {
  forStart: document.getElementById("forStart"),
  for1: document.getElementById("for1"),
  for2: document.getElementById("for2"),
  for3: document.getElementById("for3"),
  for4: document.getElementById("for4"),
  for5: document.getElementById("for5"),
  for6: document.getElementById("for6"),
  for7: document.getElementById("for7"),
  for8: document.getElementById("for8"),
  for9: document.getElementById("for9"),
  for10: document.getElementById("for10"),
  for11: document.getElementById("for11"),
  for12: document.getElementById("for12"),
  for13: document.getElementById("for13"),
  for14: document.getElementById("for14"),
  for15: document.getElementById("for15"),
  for16: document.getElementById("for16"),
  for17: document.getElementById("for17"),
  for18: document.getElementById("for18"),
  for19: document.getElementById("for19"),
  for20: document.getElementById("for20"),
  for21: document.getElementById("for21"),
  for22: document.getElementById("for22"),
  for23: document.getElementById("for23"),
  for24: document.getElementById("for24"),
  for25: document.getElementById("for25"),
  for26: document.getElementById("for26"),
  for27: document.getElementById("for27"),
  for28: document.getElementById("for28"),
  for29: document.getElementById("for29"),
  for30: document.getElementById("for30"),
  for31: document.getElementById("for31"),
  for32: document.getElementById("for32"),
  for33: document.getElementById("for33"),
  for34: document.getElementById("for34"),
  for35: document.getElementById("for35"),
  for36: document.getElementById("for36"),
  for37: document.getElementById("for37"),
  for38: document.getElementById("for38"),
  for39: document.getElementById("for39"),
  for40: document.getElementById("for40"),
  for41: document.getElementById("for41"),
  for42: document.getElementById("for42"),
  for43: document.getElementById("for43"),
  for44: document.getElementById("for44"),
  for45: document.getElementById("for45"),
  for46: document.getElementById("for46"),
  for47: document.getElementById("for47"),
  for48: document.getElementById("for48"),
  for49: document.getElementById("for49"),
  for50: document.getElementById("for50"),
};

// func that popup feedback modal
setTimeout(() => {
  allModalComputer.feedBack.show();
      // trigClose();
      confirmAnsObj.feedBack = true;
      $(".d-none1").toggle();
}, 150000);

// This below function is use to check if the option selected is correct
const modalTrigFun = () => {
  if (computerTurn === true && myTurn === false) {
    if (getBackComputerStoVar == 6) {
      // dispDiceHole.focus()
      allModalComputer.myModalStart.show();
      trigClose();
      confirmAnsObj.modalshowStart = true;
      $(".d-none1").toggle();
    } else if (getBackComputerStoVar == 7) {
      // dispDiceHole.focus()
      allModalComputer.myModal1.show();
      confirmAnsObj.modalshow1 = true;
      trigClose();
      $(".d-none2").toggle();
    } else if (getBackComputerStoVar == 8) {
      allModalComputer.myModal2.show();
      trigClose();
      confirmAnsObj.modalshow2 = true;
      $(".d-none3").toggle();
    } else if (getBackComputerStoVar == 9) {
      allModalComputer.myModal3.show();
      trigClose();
      confirmAnsObj.modalshow3 = true;
      $(".d-none4").toggle();
    } else if (getBackComputerStoVar == 10) {
      allModalComputer.myModal4.show();
      trigClose();
      confirmAnsObj.modalshow4 = true;
      $(".d-none5").toggle();
    } else if (getBackComputerStoVar == 11) {
      allModalComputer.myModal5.show();
      trigClose();
      confirmAnsObj.modalshow5 = true;
      $(".d-none6").toggle();
    } else if (getBackComputerStoVar == 12) {
      allModalComputer.myModal6.show();
      trigClose();
      confirmAnsObj.modalshow6 = true;
      $(".d-none7").toggle();
    } else if (getBackComputerStoVar == 13) {
      allModalComputer.myModal7.show();
      trigClose();
      confirmAnsObj.modalshow7 = true;
      $(".d-none8").toggle();
    } else if (getBackComputerStoVar == 14) {
      allModalComputer.myModal8.show();
      trigClose();
      confirmAnsObj.modalshow8 = true;
      $(".d-none9").toggle();
    } else if (getBackComputerStoVar == 15) {
      allModalComputer.myModal9.show();
      trigClose();
      confirmAnsObj.modalshow9 = true;
      $(".d-none10").toggle();
    } else if (getBackComputerStoVar == 16) {
      allModalComputer.myModal10.show();
      trigClose();
      confirmAnsObj.modalshow10 = true;
      $(".d-none11").toggle();
    } else if (getBackComputerStoVar == 17) {
      // alert("It's eleven")
      allModalComputer.myModal11.show();
      trigClose();
      confirmAnsObj.modalshow11 = true;
      $(".d-none12").toggle();
    } else if (getBackComputerStoVar == 18) {
      allModalComputer.myModal12.show();
      trigClose();
      confirmAnsObj.modalshow12 = true;
      $(".d-none13").toggle();
    } else if (getBackComputerStoVar == 19) {
      allModalComputer.myModal13.show();
      trigClose();
      confirmAnsObj.modalshow13 = true;
      $(".d-none14").toggle();
    } else if (getBackComputerStoVar == 20) {
      allModalComputer.myModal14.show();
      trigClose();
      confirmAnsObj.modalshow14 = true;
      $(".d-none15").toggle();
    } else if (getBackComputerStoVar == 21) {
      allModalComputer.myModal15.show();
      trigClose();
      confirmAnsObj.modalshow15 = true;
      $(".d-none16").toggle();
    } else if (getBackComputerStoVar == 22) {
      allModalComputer.myModal16.show();
      trigClose();
      confirmAnsObj.modalshow16 = true;
      $(".d-none17").toggle();
    } else if (getBackComputerStoVar == 23) {
      allModalComputer.myModal17.show();
      trigClose();
      confirmAnsObj.modalshow17 = true;
      $(".d-none18").toggle();
    } else if (getBackComputerStoVar == 24) {
      allModalComputer.myModal18.show();
      trigClose();
      confirmAnsObj.modalshow18 = true;
      $(".d-none19").toggle();
    } else if (getBackComputerStoVar == 25) {
      allModalComputer.myModal19.show();
      trigClose();
      confirmAnsObj.modalshow19 = true;
      $(".d-none20").toggle();
    } else if (getBackComputerStoVar == 26) {
      allModalComputer.myModal20.show();
      trigClose();
      confirmAnsObj.modalshow20 = true;
      $(".d-none21").toggle();
    } else if (getBackComputerStoVar == 27) {
      allModalComputer.myModal21.show();
      trigClose();
      confirmAnsObj.modalshow21 = true;
      $(".d-none22").toggle();
    } else if (getBackComputerStoVar == 28) {
      allModalComputer.myModal22.show();
      trigClose();
      confirmAnsObj.modalshow22 = true;
      $(".d-none23").toggle();
    } else if (getBackComputerStoVar == 29) {
      allModalComputer.myModal23.show();
      trigClose();
      confirmAnsObj.modalshow23 = true;
      $(".d-none24").toggle();
    } else if (getBackComputerStoVar == 30) {
      allModalComputer.myModal24.show();
      trigClose();
      confirmAnsObj.modalshow24 = true;
      $(".d-none25").toggle();
    } else if (getBackComputerStoVar == 31) {
      allModalComputer.myModal25.show();
      trigClose();
      confirmAnsObj.modalshow25 = true;
      $(".d-none26").toggle();
    } else if (getBackComputerStoVar == 32) {
      allModalComputer.myModal26.show();
      trigClose();
      confirmAnsObj.modalshow26 = true;
      $(".d-none27").toggle();
    } else if (getBackComputerStoVar == 33) {
      allModalComputer.myModal27.show();
      trigClose();
      confirmAnsObj.modalshow27 = true;
      $(".d-none28").toggle();
    } else if (getBackComputerStoVar == 34) {
      allModalComputer.myModal28.show();
      trigClose();
      confirmAnsObj.modalshow28 = true;
      $(".d-none29").toggle();
    } else if (getBackComputerStoVar == 35) {
      allModalComputer.myModal29.show();
      trigClose();
      confirmAnsObj.modalshow29 = true;
      $(".d-none30").toggle();
    } else if (getBackComputerStoVar == 36) {
      allModalComputer.myModal30.show();
      trigClose();
      confirmAnsObj.modalshow30 = true;
      $(".d-none31").toggle();
    } else if (getBackComputerStoVar == 37) {
      allModalComputer.myModal31.show();
      trigClose();
      confirmAnsObj.modalshow31 = true;
      $(".d-none32").toggle();
    } else if (getBackComputerStoVar == 38) {
      allModalComputer.myModal32.show();
      trigClose();
      confirmAnsObj.modalshow32 = true;
      $(".d-none33").toggle();
    } else if (getBackComputerStoVar == 39) {
      allModalComputer.myModal33.show();
      trigClose();
      confirmAnsObj.modalshow33 = true;
      $(".d-none34").toggle();
    } else if (getBackComputerStoVar == 40) {
      allModalComputer.myModal34.show();
      trigClose();
      confirmAnsObj.modalshow34 = true;
      $(".d-none35").toggle();
    } else if (getBackComputerStoVar == 41) {
      allModalComputer.myModal35.show();
      trigClose();
      confirmAnsObj.modalshow35 = true;
      $(".d-none36").toggle();
    } else if (getBackComputerStoVar == 42) {
      allModalComputer.myModal36.show();
      trigClose();
      confirmAnsObj.modalshow36 = true;
      $(".d-none37").toggle();
    } else if (getBackComputerStoVar == 43) {
      allModalComputer.myModal37.show();
      trigClose();
      confirmAnsObj.modalshow37 = true;
      $(".d-none38").toggle();
    } else if (getBackComputerStoVar == 44) {
      allModalComputer.myModal38.show();
      trigClose();
      confirmAnsObj.modalshow38 = true;
      $(".d-none39").toggle();
    } else if (getBackComputerStoVar == 45) {
      allModalComputer.myModal39.show();
      trigClose();
      confirmAnsObj.modalshow39 = true;
      $(".d-none40").toggle();
    } else if (getBackComputerStoVar == 46) {
      allModalComputer.myModal40.show();
      trigClose();
      confirmAnsObj.modalshow40 = true;
      $(".d-none41").toggle();
    } else if (getBackComputerStoVar == 47) {
      allModalComputer.myModal41.show();
      trigClose();
      confirmAnsObj.modalshow41 = true;
      $(".d-none42").toggle();
    } else if (getBackComputerStoVar == 48) {
      allModalComputer.myModal42.show();
      trigClose();
      confirmAnsObj.modalshow42 = true;
      $(".d-none43").toggle();
    } else if (getBackComputerStoVar == 49) {
      allModalComputer.myModal43.show();
      trigClose();
      confirmAnsObj.modalshow43 = true;
      $(".d-none44").toggle();
    } else if (getBackComputerStoVar == 50) {
      allModalComputer.myModal44.show();
      trigClose();
      confirmAnsObj.modalshow44 = true;
      $(".d-none45").toggle();
    } else if (getBackComputerStoVar == 51) {
      allModalComputer.myModal45.show();
      trigClose();
      confirmAnsObj.modalshow45 = true;
      $(".d-none46").toggle();
    } else if (getBackComputerStoVar == 52) {
      allModalComputer.myModal46.show();
      trigClose();
      confirmAnsObj.modalshow46 = true;
      $(".d-none47").toggle();
    } else if (getBackComputerStoVar == 53) {
      allModalComputer.myModal47.show();
      trigClose();
      confirmAnsObj.modalshow47 = true;
      $(".d-none48").toggle();
    } else if (getBackComputerStoVar == 54) {
      allModalComputer.myModal48.show();
      trigClose();
      confirmAnsObj.modalshow48 = true;
      $(".d-none49").toggle();
    } else if (getBackComputerStoVar == 55) {
      allModalComputer.myModal49.show();
      trigClose();
      confirmAnsObj.modalshow49 = true;
      $(".d-none50").toggle();
    } else if (getBackComputerStoVar == 56 || getBackComputerStoVar >= 56) {
      allModalComputer.myModal50.show();
      trigClose();
      confirmAnsObj.modalshow50 = true;
      $(".d-none51").toggle();
    }
  } else if (myTurn === true && computerTurn === false) {
    if (getBackMyStoVar == 6) {
      // dispDiceHole.focus()
      allModalComputer.myModalStart.show();
      trigClose();
      confirmAnsObj.modalshowStart = true;
      $(".d-none1").toggle();
    } else if (getBackMyStoVar == 7) {
      // dispDiceHole.focus()
      allModalComputer.myModal1.show();
      confirmAnsObj.modalshow1 = true;
      trigClose();
      $(".d-none2").toggle();
    } else if (getBackMyStoVar == 8) {
      allModalComputer.myModal2.show();
      trigClose();
      confirmAnsObj.modalshow2 = true;
      $(".d-none3").toggle();
    } else if (getBackMyStoVar == 9) {
      allModalComputer.myModal3.show();
      trigClose();
      confirmAnsObj.modalshow3 = true;
      $(".d-none4").toggle();
    } else if (getBackMyStoVar == 10) {
      allModalComputer.myModal4.show();
      trigClose();
      confirmAnsObj.modalshow4 = true;
      $(".d-none5").toggle();
    } else if (getBackMyStoVar == 11) {
      allModalComputer.myModal5.show();
      trigClose();
      confirmAnsObj.modalshow5 = true;
      $(".d-none6").toggle();
    } else if (getBackMyStoVar == 12) {
      allModalComputer.myModal6.show();
      trigClose();
      confirmAnsObj.modalshow6 = true;
      $(".d-none7").toggle();
    } else if (getBackMyStoVar == 13) {
      allModalComputer.myModal7.show();
      trigClose();
      confirmAnsObj.modalshow7 = true;
      $(".d-none8").toggle();
    } else if (getBackMyStoVar == 14) {
      allModalComputer.myModal8.show();
      trigClose();
      confirmAnsObj.modalshow8 = true;
      $(".d-none9").toggle();
    } else if (getBackMyStoVar == 15) {
      allModalComputer.myModal9.show();
      trigClose();
      confirmAnsObj.modalshow9 = true;
      $(".d-none10").toggle();
    } else if (getBackMyStoVar == 16) {
      allModalComputer.myModal10.show();
      trigClose();
      confirmAnsObj.modalshow10 = true;
      $(".d-none11").toggle();
    } else if (getBackMyStoVar == 17) {
      // alert("It's eleven")
      allModalComputer.myModal11.show();
      trigClose();
      confirmAnsObj.modalshow11 = true;
      $(".d-none12").toggle();
    } else if (getBackMyStoVar == 18) {
      allModalComputer.myModal12.show();
      trigClose();
      confirmAnsObj.modalshow12 = true;
      $(".d-none13").toggle();
    } else if (getBackMyStoVar == 19) {
      allModalComputer.myModal13.show();
      trigClose();
      confirmAnsObj.modalshow13 = true;
      $(".d-none14").toggle();
    } else if (getBackMyStoVar == 20) {
      allModalComputer.myModal14.show();
      trigClose();
      confirmAnsObj.modalshow14 = true;
      $(".d-none15").toggle();
    } else if (getBackMyStoVar == 21) {
      allModalComputer.myModal15.show();
      trigClose();
      confirmAnsObj.modalshow15 = true;
      $(".d-none16").toggle();
    } else if (getBackMyStoVar == 22) {
      allModalComputer.myModal16.show();
      trigClose();
      confirmAnsObj.modalshow16 = true;
      $(".d-none17").toggle();
    } else if (getBackMyStoVar == 23) {
      allModalComputer.myModal17.show();
      trigClose();
      confirmAnsObj.modalshow17 = true;
      $(".d-none18").toggle();
    } else if (getBackMyStoVar == 24) {
      allModalComputer.myModal18.show();
      trigClose();
      confirmAnsObj.modalshow18 = true;
      $(".d-none19").toggle();
    } else if (getBackMyStoVar == 25) {
      allModalComputer.myModal19.show();
      trigClose();
      confirmAnsObj.modalshow19 = true;
      $(".d-none20").toggle();
    } else if (getBackMyStoVar == 26) {
      allModalComputer.myModal20.show();
      trigClose();
      confirmAnsObj.modalshow20 = true;
      $(".d-none21").toggle();
    } else if (getBackMyStoVar == 27) {
      allModalComputer.myModal21.show();
      trigClose();
      confirmAnsObj.modalshow21 = true;
      $(".d-none22").toggle();
    } else if (getBackMyStoVar == 28) {
      allModalComputer.myModal22.show();
      trigClose();
      confirmAnsObj.modalshow22 = true;
      $(".d-none23").toggle();
    } else if (getBackMyStoVar == 29) {
      allModalComputer.myModal23.show();
      trigClose();
      confirmAnsObj.modalshow23 = true;
      $(".d-none24").toggle();
    } else if (getBackMyStoVar == 30) {
      allModalComputer.myModal24.show();
      trigClose();
      confirmAnsObj.modalshow24 = true;
      $(".d-none25").toggle();
    } else if (getBackMyStoVar == 31) {
      allModalComputer.myModal25.show();
      trigClose();
      confirmAnsObj.modalshow25 = true;
      $(".d-none26").toggle();
    } else if (getBackMyStoVar == 32) {
      allModalComputer.myModal26.show();
      trigClose();
      confirmAnsObj.modalshow26 = true;
      $(".d-none27").toggle();
    } else if (getBackMyStoVar == 33) {
      allModalComputer.myModal27.show();
      trigClose();
      confirmAnsObj.modalshow27 = true;
      $(".d-none28").toggle();
    } else if (getBackMyStoVar == 34) {
      allModalComputer.myModal28.show();
      trigClose();
      confirmAnsObj.modalshow28 = true;
      $(".d-none29").toggle();
    } else if (getBackMyStoVar == 35) {
      allModalComputer.myModal29.show();
      trigClose();
      confirmAnsObj.modalshow29 = true;
      $(".d-none30").toggle();
    } else if (getBackMyStoVar == 36) {
      allModalComputer.myModal30.show();
      trigClose();
      confirmAnsObj.modalshow30 = true;
      $(".d-none31").toggle();
    } else if (getBackMyStoVar == 37) {
      allModalComputer.myModal31.show();
      trigClose();
      confirmAnsObj.modalshow31 = true;
      $(".d-none32").toggle();
    } else if (getBackMyStoVar == 38) {
      allModalComputer.myModal32.show();
      trigClose();
      confirmAnsObj.modalshow32 = true;
      $(".d-none33").toggle();
    } else if (getBackMyStoVar == 39) {
      allModalComputer.myModal33.show();
      trigClose();
      confirmAnsObj.modalshow33 = true;
      $(".d-none34").toggle();
    } else if (getBackMyStoVar == 40) {
      allModalComputer.myModal34.show();
      trigClose();
      confirmAnsObj.modalshow34 = true;
      $(".d-none35").toggle();
    } else if (getBackMyStoVar == 41) {
      allModalComputer.myModal35.show();
      trigClose();
      confirmAnsObj.modalshow35 = true;
      $(".d-none36").toggle();
    } else if (getBackMyStoVar == 42) {
      allModalComputer.myModal36.show();
      trigClose();
      confirmAnsObj.modalshow36 = true;
      $(".d-none37").toggle();
    } else if (getBackMyStoVar == 43) {
      allModalComputer.myModal37.show();
      trigClose();
      confirmAnsObj.modalshow37 = true;
      $(".d-none38").toggle();
    } else if (getBackMyStoVar == 44) {
      allModalComputer.myModal38.show();
      trigClose();
      confirmAnsObj.modalshow38 = true;
      $(".d-none39").toggle();
    } else if (getBackMyStoVar == 45) {
      allModalComputer.myModal39.show();
      trigClose();
      confirmAnsObj.modalshow39 = true;
      $(".d-none40").toggle();
    } else if (getBackMyStoVar == 46) {
      allModalComputer.myModal40.show();
      trigClose();
      confirmAnsObj.modalshow40 = true;
      $(".d-none41").toggle();
    } else if (getBackMyStoVar == 47) {
      allModalComputer.myModal41.show();
      trigClose();
      confirmAnsObj.modalshow41 = true;
      $(".d-none42").toggle();
    } else if (getBackMyStoVar == 48) {
      allModalComputer.myModal42.show();
      trigClose();
      confirmAnsObj.modalshow42 = true;
      $(".d-none43").toggle();
    } else if (getBackMyStoVar == 49) {
      allModalComputer.myModal43.show();
      trigClose();
      confirmAnsObj.modalshow43 = true;
      $(".d-none44").toggle();
    } else if (getBackMyStoVar == 50) {
      allModalComputer.myModal44.show();
      trigClose();
      confirmAnsObj.modalshow44 = true;
      $(".d-none45").toggle();
    } else if (getBackMyStoVar == 51) {
      allModalComputer.myModal45.show();
      trigClose();
      confirmAnsObj.modalshow45 = true;
      $(".d-none46").toggle();
    } else if (getBackMyStoVar == 52) {
      allModalComputer.myModal46.show();
      trigClose();
      confirmAnsObj.modalshow46 = true;
      $(".d-none47").toggle();
    } else if (getBackMyStoVar == 53) {
      allModalComputer.myModal47.show();
      trigClose();
      confirmAnsObj.modalshow47 = true;
      $(".d-none48").toggle();
    } else if (getBackMyStoVar == 54) {
      allModalComputer.myModal48.show();
      trigClose();
      confirmAnsObj.modalshow48 = true;
      $(".d-none49").toggle();
    } else if (getBackMyStoVar == 55) {
      allModalComputer.myModal49.show();
      trigClose();
      confirmAnsObj.modalshow49 = true;
      $(".d-none50").toggle();
    } else if (getBackMyStoVar == 56 || getBackMyStoVar >= 56) {
      allModalComputer.myModal50.show();
      trigClose();
      confirmAnsObj.modalshow50 = true;
      $(".d-none51").toggle();
    }
  }
  // $(".modalStarter").style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
  // confirmAnsObj.modalshow50 = true;
  diceActive = true
};

// var computerTurnToSaveSessi = 18;
// var myTurnToSaveSessi = 18;
const getSelectedOption = (coming) => {
  beforeBlinkBackground()
// blinkBackground()
  // document.getElementById('modal').style.display = 'block';
  if (coming === 1) {
    if (myTurn == true) {
      $("#modalStart").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshowStart = false;
    } else if (computerTurn == true) {
      $("#modalStart").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshowStart = false;
    }
  } else if (coming === 2) {
    if (myTurn == true) {
      myTurn = false;
      $("#modal1").modal("hide");
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow1 = false;
    } else if (computerTurn == true) {
      $("#modal1").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow1 = false;
    }
  } else if (coming === 3) {
    if (myTurn == true) {
      $("#modal2").modal("hide");
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow2 = false;
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      $("#modal2").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow2 = false;
    }
  } else if (coming === 4) {
    if (myTurn == true) {
      $("#modal3").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow3 = false;
    } else if (computerTurn == true) {
      $("#modal3").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow3 = false;
    }
  } else if (coming === 5) {
    if (myTurn == true) {
      $("#modal4").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow4 = false;
    } else if (computerTurn == true) {
      $("#modal4").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow4 = false;
    }
  } else if (coming === 6) {
    if (myTurn == true) {
      $("#modal5").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow5 = false;
    } else if (computerTurn == true) {
      $("#modal5").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow5 = false;
    }
  } else if (coming === 7) {
    if (myTurn == true) {
      $("#modal6").modal("hide");
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow6 = false;
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      $("#modal6").modal("hide");
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow6 = false;
      alert("It's " + firstPersonPlaying + " turn");
    }
  } else if (coming === 8) {
    if (myTurn == true) {
      $("#modal7").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow7 = false;
    } else if (computerTurn == true) {
      $("#modal7").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow7 = false;
    }
  } else if (coming === 9) {
    $("#modal8").modal("hide");
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow8 = false;
    } else if (computerTurn == true) {
      $("#modal8").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow8 = false;
    }
  } else if (coming === 10) {
    if (myTurn == true) {
      $("#modal9").modal("hide");
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow9 = false;
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      $("#modal9").modal("hide");
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow9 = false;
      alert("It's " + firstPersonPlaying + " turn");
    }
  } else if (coming === 11) {
    if (myTurn == true) {
      $("#modal10").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow10 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      $("#modal10").modal("hide");
      alert("It's " + firstPersonPlaying + " turn");
      $("#modal10").modal("hide");
      confirmAnsObj.modalshow10 = false;
    }
  } else if (coming === 12) {
    var selectedOption = document.querySelector(
      'input[name="options12"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play()
          computerTurn = false;
          myTurn = true;
          $("#modal11").modal("hide");
          confirmAnsObj.modalshow11 = false;
          alert("You miss it! It's " + firstPersonPlaying + " turn now");
        } else if (myTurn == true) {
          lose.play()
          myTurn = false;
          computerTurn = true;
          $("#modal11").modal("hide");
          confirmAnsObj.modalshow11 = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn now");
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          bonus.play()
          $("#modal11").modal("hide");
          computerTurn = true;
          myTurn = false;
          alert("You got it! " + secondPersonPlaying + " play once more");
          winnerClap.play();
          confirmAnsObj.modalshow11 = false;
        } else if (myTurn == true) {
          bonus.play()
          $("#modal11").modal("hide");
          myTurn = true;
          computerTurn = false;
          alert("You got it! " + firstPersonPlaying + " play once more");
          winnerClap.play();
          confirmAnsObj.modalshow11 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (coming === 13) {
    var selectedOption = document.querySelector(
      'input[name="options13"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play()
          $("#modal12").modal("hide");
          computerTurn = false;
          myTurn = true;
          confirmAnsObj.modalshow12 = false;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
        } else if (myTurn == true) {
          lose.play()
          $("#modal12").modal("hide");
          computerTurn = true;
          myTurn = false;
          confirmAnsObj.modalshow12 = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          bonus.play();
          $("#modal12").modal("hide");
          computerTurnToSaveSessi += 21;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow12 = false;
        } else if (myTurn == true) {
          bonus.play();
          $("#modal12").modal("hide");
          myTurnToSaveSessi += 21;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow12 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 14) {
    if (myTurn == true) {
      $("#modal13").modal("hide");
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow13 = false;
    } else if (computerTurn == true) {
      $("#modal13").modal("hide");
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      confirmAnsObj.modalshow13 = false;
    }
  } else if (coming === 15) {
    var selectedOption = document.querySelector(
      'input[name="options15"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          bonus.play()
          computerTurn = true;
          myTurn = false;
          $("#modal14").modal("hide");
          alert("You got it! " + secondPersonPlaying + " play once more");
          winnerClap.play();
          confirmAnsObj.modalshow14 = false;
        } else if (myTurn == true) {
          bonus.play()
          myTurn = true;
          computerTurn = false;
          $("#modal14").modal("hide");
          alert("You got it! " + firstPersonPlaying + " once more");
          winnerClap.play();
          confirmAnsObj.modalshow14 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          lose.play()   
         $("#modal14").modal("hide");
         computerTurn = false;
         myTurn = true;
         confirmAnsObj.modalshow14 = false;
         alert("You miss it! It's " + firstPersonPlaying + " turn now");
         //document.querySelector(".d-none14").style.display = "none";
       } else if (myTurn == true) {
           lose.play()
         $("#modal14").modal("hide");
         myTurn = false;
         computerTurn = true;
         confirmAnsObj.modalshow14 = false;
         alert("You miss it! It's " + secondPersonPlaying + " turn now");
       }
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (coming === 16) {
    var selectedOption = document.querySelector(
      'input[name="options16"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurnToSaveSessi += 25;
          bonus.play();
          blinkBackground();
          computerTurn = false;
          myTurn = true;
          $("#modal15").modal("hide");
          confirmAnsObj.modalshow15 = false;
          alert("You got it! It's " + firstPersonPlaying + " turn");
          winnerClap.play();
        } else if (myTurn == true) {
          myTurnToSaveSessi += 25;
          bonus.play();
          blinkBackground();
          myTurn = false;
          computerTurn = true;
          $("#modal15").modal("hide");
          confirmAnsObj.modalshow15 = false;
          alert("You got it! It's " + secondPersonPlaying + " turn");
          winnerClap.play();
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          lose.play()
          computerTurn = false;
          myTurn = true;
          $("#modal15").modal("hide");
          confirmAnsObj.modalshow15 = false;
          alert("You miss it! It's " + firstPersonPlaying + " turn");
        } else if (myTurn == true) {
          lose.play()
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          $("#modal15").modal("hide");
          confirmAnsObj.modalshow15 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 17) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow16 = false;
      alert("It's " + secondPersonPlaying + " turn");
      $("#modal16").modal("hide");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow16 = false;
      $("#modal16").modal("hide");
      alert("It's " + firstPersonPlaying + " turn");
    }
  } else if (coming === 18) {
    if (myTurn == true) {
      myTurnToSaveSessi += 3;
      setMySessStorFunc();
      retriveMySessStorFunc();
      bonus.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow17 = false;
      $("#modal17").modal("hide");
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      computerTurnToSaveSessi += 3;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      bonus.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      $("#modal17").modal("hide");
      confirmAnsObj.modalshow17 = false;
      alert("It's " + firstPersonPlaying + " turn");
    }
  } else if (coming === 19) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow18 = false;
      $("#modal18").modal("hide");
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      $("#modal18").modal("hide");
      confirmAnsObj.modalshow18 = false;
      alert("It's " + firstPersonPlaying + " turn");
    }
  } else if (coming === 20) {
    var selectedOption = document.querySelector(
      'input[name="options20"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play()
          $("#modal19").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow19 = false;
        } else if (myTurn == true) {
          lose.play()
          $("#modal19").modal("hide");
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow19 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal19").modal("hide");
          computerTurnToSaveSessi += 20;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          bonus.play();
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow19 = false;
        } else if (myTurn == true) {
          $("#modal19").modal("hide");
          myTurnToSaveSessi += 20;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          bonus.play();
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow19 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 21) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow20 = false;
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow20 = false;
      alert("It's " + firstPersonPlaying + " turn");
      $("#modal20").modal("hide");
    }
  } else if (coming === 22) {
    var selectedOption = document.querySelector(
      'input[name="options22"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play()
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn now");
          $("#modal21").modal("hide");
          confirmAnsObj.modalshow21 = false;
        } else if (myTurn == true) {
          lose.play()
          myTurn = false;
          computerTurn = true;
          alert("You miss it! It's " + secondPersonPlaying + " turn now");
          $("#modal21").modal("hide");
          confirmAnsObj.modalshow21 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurnToSaveSessi += 21;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          bonus.play();
          myTurn = true;
          computerTurn = false;
          alert("You got it! It's " + firstPersonPlaying + " turn now");
          winnerClap.play();
          $("#modal21").modal("hide");
          confirmAnsObj.modalshow21 = false;
        } else if (myTurn == true) {
          myTurnToSaveSessi += 21;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          bonus.play();
          computerTurn = true;
          myTurn = false;
          alert("You got it! It's " + secondPersonPlaying + " turn now");
          winnerClap.play();
          $("#modal21").modal("hide");
          confirmAnsObj.modalshow21 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option to continue.");
    }
  } else if (coming === 23) {
    if (computerTurn == true) {
      bonus.play()
      computerTurn = true;
      myTurn = false;
      $("#modal22").modal("hide");
      alert("Bonus! It's " + secondPersonPlaying + " turn to play once more");
      confirmAnsObj.modalshow22 = false;
    } else if (myTurn == true) {
      bonus.play()
      myTurn = true;
      computerTurn = false;
      $("#modal22").modal("hide");
      alert("Bonus! It's " + firstPersonPlaying + " Play once more");
      confirmAnsObj.modalshow22 = false;
    }
  } else if (coming === 24) {
    var selectedOption = document.querySelector(
      'input[name="options24"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play()
          computerTurn = false;
          myTurn = true;
          $("#modal23").modal("hide");
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow23 = false;
        } else if (myTurn == true) {
          lose.play()
          computerTurn = true;
          myTurn = false;
          $("#modal23").modal("hide");
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow23 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          bonus.play();
          computerTurnToSaveSessi += 13;
          $("#modal23").modal("hide");
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          computerTurn = false;
          myTurn = true;
          blinkBackground();
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          //document.querySelector(".d-none23").style.display = "none";
          confirmAnsObj.modalshow23 = false;
        } else if (myTurn == true) {
          $("#modal23").modal("hide");
          myTurn = false;
          myTurnToSaveSessi += 13;
          setMySessStorFunc();
          retriveMySessStorFunc();
          bonus.play();
          computerTurn = true;
          blinkBackground();
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          //document.querySelector(".d-none23").style.display = "none";
          confirmAnsObj.modalshow23 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 25) {
    if (computerTurn == true) {
      $("#modal24").modal("hide");
      computerTurnToSaveSessi = 11;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      lose.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn to play");
      //document.querySelector(".d-none24").style.display = "none";
      confirmAnsObj.modalshow24 = false;
    } else if (myTurn == true) {
      $("#modal24").modal("hide");
      myTurnToSaveSessi = 11;
      setMySessStorFunc();
      retriveMySessStorFunc();
      lose.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn to play");
      //document.querySelector(".d-none24").style.display = "none";
      confirmAnsObj.modalshow24 = false;
    }
  } else if (coming === 26) {
    if (computerTurn == true) {
      computerTurn = true;
      myTurn = false;
      $("#modal25").modal("hide");
      alert("Bonus! It's " + secondPersonPlaying + " turn to play once more");
      //document.querySelector(".d-none25").style.display = "none";
      confirmAnsObj.modalshow25 = false;
    } else if (myTurn == true) {
      myTurn = true;
      computerTurn = false;
      $("#modal25").modal("hide");
      alert("Bonus! It's " + firstPersonPlaying + " turn to play once more");
      //document.querySelector(".d-none25").style.display = "none";
      confirmAnsObj.modalshow25 = false;
    }
  } else if (coming === 27) {
    if (myTurn == true) {
      myTurnToSaveSessi += 7;
      setMySessStorFunc();
      retriveMySessStorFunc();
      bonus.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      $("#modal26").modal("hide");
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none26").style.display = "none";
      confirmAnsObj.modalshow26 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi += 7;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      bonus.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      confirmAnsObj.modalshow26 = false;
      $("#modal26").modal("hide");
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none26").style.display = "none";
    }
  } else if (coming === 28) {
    if (myTurn == true) {
      myTurnToSaveSessi = 6;
      setMySessStorFunc();
      retriveMySessStorFunc();
      blinkBackground();
      lose.play();
      myTurn = false;
      computerTurn = true;
      $("#modal27").modal("hide");
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none27").style.display = "none";
      confirmAnsObj.modalshow27 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 6;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      blinkBackground();
      lose.play();
      computerTurn = false;
      myTurn = true;
      $("#modal27").modal("hide");
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none27").style.display = "none";
      confirmAnsObj.modalshow27 = false;
    }
  } else if (coming === 29) {
    if (computerTurn == true) {
      bonus.play()
      computerTurn = true;
      myTurn = false;
      $("#modal28").modal("hide");
      alert("Bonus! It's " + secondPersonPlaying + " turn to play once more");
      //document.querySelector(".d-none28").style.display = "none";
      confirmAnsObj.modalshow28 = false;
    } else if (myTurn == true) {
      bonus.play()
      myTurn = true;
      computerTurn = false;
      $("#modal28").modal("hide");
      alert("Bonus! It's " + firstPersonPlaying + " turn to play once more");
      //document.querySelector(".d-none28").style.display = "none";
      confirmAnsObj.modalshow28 = false;
    }
  } else if (coming === 30) {
    var selectedOption = document.querySelector(
      'input[name="options30"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          $("#modal29").modal("hide");
          computerTurnToSaveSessi = 10;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          lose.play();
          blinkBackground();
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow29 = false;
        } else if (myTurn == true) {
          $("#modal29").modal("hide");
          myTurnToSaveSessi = 10;
          setMySessStorFunc();
          retriveMySessStorFunc();
          lose.play();
          blinkBackground();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow29 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal29").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow29 = false;
        } else if (myTurn == true) {
          $("#modal29").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow29 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 31) {
    if (myTurn == true) {
      myTurnToSaveSessi = 11;
      setMySessStorFunc();
      retriveMySessStorFunc();
      lose.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      $("#modal30").modal("hide");
      //document.querySelector(".d-none30").style.display = "none";
      alert("It's " + secondPersonPlaying + " turn");
      confirmAnsObj.modalshow30 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 11;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      lose.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none30").style.display = "none";
      $("#modal30").modal("hide");
      confirmAnsObj.modalshow30 = false;
    }
  } else if (coming === 32) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      $("#modal31").modal("hide");
      //document.querySelector(".d-none31").style.display = "none";
      confirmAnsObj.modalshow31 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      $("#modal31").modal("hide");
      //document.querySelector(".d-none31").style.display = "none";
      confirmAnsObj.modalshow31 = false;
    }
  } else if (coming === 33) {
    var selectedOption = document.querySelector(
      'input[name="options33"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          $("#modal32").modal("hide");
          computerTurnToSaveSessi = 10;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow32 = false;
        } else if (myTurn == true) {
          $("#modal32").modal("hide");
          myTurnToSaveSessi = 10;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow32 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal32").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow32 = false;
        } else if (myTurn == true) {
          $("#modal32").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow32 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 34) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none33").style.display = "none";
      $("#modal33").modal("hide");
      confirmAnsObj.modalshow33 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none33").style.display = "none";
      $("#modal33").modal("hide");
      confirmAnsObj.modalshow33 = false;
    }
  } else if (coming === 35) {
    var selectedOption = document.querySelector(
      'input[name="options35"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          $("#modal34").modal("hide");
          computerTurnToSaveSessi = 6;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          //document.querySelector(".d-none34").style.display = "none";
          confirmAnsObj.modalshow34 = false;
        } else if (myTurn == true) {
          $("#modal34").modal("hide");
          myTurnToSaveSessi = 6;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          //document.querySelector(".d-none34").style.display = "none";
          confirmAnsObj.modalshow34 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal34").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          //document.querySelector(".d-none34").style.display = "none";
          confirmAnsObj.modalshow34 = false;
        } else if (myTurn == true) {
          $("#modal34").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          //document.querySelector(".d-none34").style.display = "none";
          confirmAnsObj.modalshow34 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 36) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow35 = false;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none35").style.display = "none";
      $("#modal35").modal("hide");
      confirmAnsObj.modalshow35 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none35").style.display = "none";
      $("#modal35").modal("hide");
      confirmAnsObj.modalshow35 = false;
    }
  } else if (coming === 37) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none36").style.display = "none";
      $("#modal36").modal("hide");
      confirmAnsObj.modalshow36 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none36").style.display = "none";
      $("#modal36").modal("hide");
      confirmAnsObj.modalshow36 = false;
    }
  } else if (coming === 38) {
    var selectedOption = document.querySelector(
      'input[name="options38"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          $("#modal37").modal("hide");
          //document.querySelector(".d-none37").style.display = "none";
          confirmAnsObj.modalshow37 = false;
        } else if (myTurn == true) {
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          $("#modal37").modal("hide");
          //document.querySelector(".d-none37").style.display = "none";
          confirmAnsObj.modalshow37 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          computerTurnToSaveSessi = 10;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = false;
          $("#modal37").modal("hide");
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          myTurn = true;
          //document.querySelector(".d-none37").style.display = "none";
          confirmAnsObj.modalshow37 = false;
        } else if (myTurn == true) {
          myTurnToSaveSessi = 10;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          //document.querySelector(".d-none37").style.display = "none";
          $("#modal37").modal("hide");
          confirmAnsObj.modalshow37 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 39) {
    if (myTurn == true) {
      myTurnToSaveSessi = 12;
      setMySessStorFunc();
      retriveMySessStorFunc();
      lose.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none38").style.display = "none";
      $("#modal38").modal("hide");
      confirmAnsObj.modalshow38 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 12;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      lose.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none38").style.display = "none";
      $("#modal38").modal("hide");
      confirmAnsObj.modalshow38 = false;
    }
  } else if (coming === 40) {
    var selectedOption = document.querySelector(
      'input[name="options40"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          computerTurnToSaveSessi = 10;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          lose.play();
          $("#modal39").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow39 = false;
          blinkBackground();
        } else if (myTurn == true) {
          myTurnToSaveSessi = 10;
          setMySessStorFunc();
          retriveMySessStorFunc();
          lose.play();
          $("#modal39").modal("hide");
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow39 = false;
          blinkBackground();
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal39").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow39 = false;
        } else if (myTurn == true) {
          $("#modal39").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow39 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 41) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none40").style.display = "none";
      $("#modal40").modal("hide");
      confirmAnsObj.modalshow40 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none40").style.display = "none";
      $("#modal40").modal("hide");
      confirmAnsObj.modalshow40 = false;
    }
  } else if (coming === 42) {
    if (myTurn == true) {
      myTurnToSaveSessi = 12;
      setMySessStorFunc();
      retriveMySessStorFunc();
      lose.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none41").style.display = "none";
      $("#modal41").modal("hide");
      confirmAnsObj.modalshow41 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 12;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      lose.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none41").style.display = "none";
      $("#modal41").modal("hide");
      confirmAnsObj.modalshow41 = false;
    }
  } else if (coming === 43) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      confirmAnsObj.modalshow42 = false;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none42").style.display = "none";
      $("#modal42").modal("hide");
      confirmAnsObj.modalshow42 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none42").style.display = "none";
      $("#modal42").modal("hide");
      confirmAnsObj.modalshow42 = false;
    }
  } else if (coming === 44) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none43").style.display = "none";
      $("#modal43").modal("hide");
      confirmAnsObj.modalshow43 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none43").style.display = "none";
      $("#modal43").modal("hide");
      confirmAnsObj.modalshow43 = false;
    }
  } else if (coming === 45) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      //document.querySelector(".d-none44").style.display = "none";
      $("#modal44").modal("hide");
      confirmAnsObj.modalshow44 = false;
      alert("It's " + secondPersonPlaying + " turn");
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none44").style.display = "none";
      $("#modal44").modal("hide");
      confirmAnsObj.modalshow44 = false;
    }
  } else if (coming === 46) {
    if (myTurn == true) {
      myTurnToSaveSessi = 6;
      setMySessStorFunc();
      retriveMySessStorFunc();
      lose.play();
      blinkBackground();
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      //document.querySelector(".d-none45").style.display = "none";
      $("#modal45").modal("hide");
      confirmAnsObj.modalshow45 = false;
    } else if (computerTurn == true) {
      computerTurnToSaveSessi = 6;
      setComputerSessStorFunc();
      retriveComputerSessStorFunc();
      lose.play();
      blinkBackground();
      computerTurn = false;
      myTurn = true;
      alert("It's " + firstPersonPlaying + " turn");
      //document.querySelector(".d-none45").style.display = "none";
      $("#modal45").modal("hide");
      confirmAnsObj.modalshow45 = false;
    }
  } else if (coming === 47) {
    var selectedOption = document.querySelector(
      'input[name="options47"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          lose.play();
          $("#modal46").modal("hide");
          computerTurnToSaveSessi = 6;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          computerTurn = false;
          myTurn = true;
          confirmAnsObj.modalshow46 = false;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
        } else if (myTurn == true) {
          lose.play();
          $("#modal46").modal("hide");
          myTurnToSaveSessi = 6;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow46 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          bonus.play()
          $("#modal46").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow46 = false;
        } else if (myTurn == true) {
          bonus.play()
          $("#modal46").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow46 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 48) {
    if (myTurn == true) {
      myTurn = false;
      computerTurn = true;
      alert("It's " + secondPersonPlaying + " turn");
      $("#modal47").modal("hide");
      //document.querySelector(".d-none47").style.display = "none";
      confirmAnsObj.modalshow47 = false;
    } else if (computerTurn == true) {
      computerTurn = false;
      myTurn = true;
      //document.querySelector(".d-none47").style.display = "none";
      alert("It's " + firstPersonPlaying + " turn");
      $("#modal47").modal("hide");
      confirmAnsObj.modalshow47 = false;
    }
  } else if (coming === 49) {
    var selectedOption = document.querySelector(
      'input[name="options49"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          $("#modal48").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow48 = false;
        } else if (myTurn == true) {
          $("#modal48").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow48 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal48").modal("hide");
          computerTurnToSaveSessi = 6;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          lose.play();
          computerTurn = false;
          myTurn = true;
          blinkBackground();
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow48 = false;
        } else if (myTurn == true) {
          $("#modal48").modal("hide");
          myTurnToSaveSessi = 6;
          setMySessStorFunc();
          retriveMySessStorFunc();
          lose.play();
          computerTurn = true;
          myTurn = false;
          blinkBackground();
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow48 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  } else if (coming === 50) {
    var selectedOption = document.querySelector(
      'input[name="options50"]:checked'
    );
    if (selectedOption) {
      if (selectedOption.value === "continue") {
        if (computerTurn == true) {
          $("#modal49").modal("hide");
          computerTurnToSaveSessi = 18;
          setComputerSessStorFunc();
          retriveComputerSessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = false;
          myTurn = true;
          alert("You miss it! It's " + firstPersonPlaying + " turn to play");
          confirmAnsObj.modalshow49 = false;
        } else if (myTurn == true) {
          $("#modal49").modal("hide");
          myTurnToSaveSessi = 18;
          setMySessStorFunc();
          retriveMySessStorFunc();
          blinkBackground();
          lose.play();
          computerTurn = true;
          myTurn = false;
          alert("You miss it! It's " + secondPersonPlaying + " turn to play");
          confirmAnsObj.modalshow49 = false;
        }
      } else if (selectedOption.value === "other") {
        if (computerTurn == true) {
          $("#modal49").modal("hide");
          computerTurn = false;
          myTurn = true;
          alert("You got it! It's " + firstPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow49 = false;
        } else if (myTurn == true) {
          $("#modal49").modal("hide");
          myTurn = false;
          computerTurn = true;
          alert("You got it! It's " + secondPersonPlaying + " turn to play");
          winnerClap.play();
          confirmAnsObj.modalshow49 = false;
        }
      }
    } else {
      alert("No option selected. Please choose an option.");
    }
  }else if (coming === 51) {
    if (myTurn == true) {
        //computerTurn = true;
        $("#modal50").modal("hide");
        myTurn = false;
        computerTurn = true;
        firstToWinClap.play();
        alert(firstPersonPlaying + " Won");
        confirmAnsObj.modalshow50 = false;
        restart = confirm("Do you want to restart or continue? Press 'OK' to continue and 'CANCEL' to restart");
        if(restart){
          myTurnToSaveSessi = 0;
          computerTurnToSaveSessi = 0;
          setMySessStorFunc()
          retriveMySessStorFunc()
          setComputerSessStorFunc()
          retriveComputerSessStorFunc()
          blinkBackground()
          var pScoreTwo = document.getElementById("pTwoScore");
          var currentPTwoScoreValue = parseInt(pScoreTwo.innerText, 10);
          if(pTwoScore.innerText == 0 || pTwoScore.innerText > 0){
            pScoreTwo.innerText = currentPTwoScoreValue + 1
          }
          document.getElementById("gameContent").classList.add('d-none') 
          document.getElementById("gameContent").classList.remove('d-none')
      }else {
          window.location.reload();
        }
    }else if(computerTurn == true){
      //computerTurn = true;
      $("#modal50").modal("hide");
      computerTurn = false;
      myTurn = true;
      firstToWinClap.play();
      alert(secondPersonPlaying + " Won");
      confirmAnsObj.modalshow50 = false;
      restart = confirm("Do you want to restart or continue? Press 'OK' to continue and 'CANCEL' to restart");
      if(restart){
        myTurnToSaveSessi = 0;
        computerTurnToSaveSessi = 0;
        setMySessStorFunc()
        retriveMySessStorFunc()
        setComputerSessStorFunc()
        retriveComputerSessStorFunc()
        blinkBackground()
        var pScoreOne = document.getElementById("pOneScore");
          var currentPOneScoreValue = parseInt(pScoreOne.innerText, 10);
          if(pOneScore.innerText == 0 || pOneScore.innerText > 0){
            pScoreOne.innerText = currentPOneScoreValue + 1
          }
        document.getElementById("gameContent").classList.add('d-none') 
        document.getElementById("gameContent").classList.remove('d-none')
    }else {
        window.location.reload();
      }
    }
  }  
  playerSigner()
  blinkBackground()
};

const forEntr = (e) => {
  if (e.key === "Enter") {
    rolDicePlayerOne();
  }
};

var correctAnswer;
var diceActive = true

const rolDicePlayerOne = () => {
  document.getElementById("dispDiceRolOne").removeEventListener("click", rolDicePlayerOne)
  beforeBlinkBackground()
  clearRadioButtons()
  if (myTurn === true && computerTurn === false && diceActive === true) {
    diceActive = false
    $(".modalStarter").on("hidden.bs.modal", function (e) {
      // Handle the event after the modal is shown
      dispDiceHole.focus();
    });
    // This section is use to focus back on hole when reload
    window.addEventListener("DOMContentLoaded", () => {
      dispDiceHole.focus();
    });

    // this is to add onclick to all cont btn
    document.getElementById("btn-continue").addEventListener("click", () => {
      dispDiceHole.focus();
    });

    dispDiceRolOne.innerHTML = `<img style="width: 100%; height:15vh;" src='./cf/dice_ass/dice.gif'>`;

    diceSound.play();

    diceRandNoPlayerOne = Math.floor(Math.random() * 6 + 1); ////
    // diceRandNoPlayerOne = 6;
    // computerTurnToSaveSessi = 11;
    // getBackMyStoVar = diceRandNoPlayerOne;
    if (((myTurnToSaveSessi == 50) && (diceRandNoPlayerOne == 6)) ||
    ((myTurnToSaveSessi == 51) && (diceRandNoPlayerOne == 5 || 6)) ||
    ((myTurnToSaveSessi == 52) && (diceRandNoPlayerOne == 4 || 5 || 6)) ||
    ((myTurnToSaveSessi == 53) && (diceRandNoPlayerOne == 3 || 4 || 5 || 6)) ||
    ((myTurnToSaveSessi == 54) && (diceRandNoPlayerOne == 2 || 3 || 4 || 5 || 6)) ||
    ((myTurnToSaveSessi == 55) && (diceRandNoPlayerOne == 1 || 2 || 3 || 4 || 5 || 6))
  ) {
    myTurnToSaveSessi = 56;
  //dispDiceRolOne.innerHTML = `<img style="width: 100%; height:15vh;" src='./cf/dice-rest-state.JPG'>`;
  } else if (diceRandNoPlayerOne == 6 && myTurnToSaveSessi == 0) {
    myTurnToSaveSessi = diceRandNoPlayerOne;
  } else if (myTurnToSaveSessi >= 6) {
    myTurnToSaveSessi += diceRandNoPlayerOne;
  }
    setMySessStorFunc();
    retriveMySessStorFunc();
    setComputerSessStorFunc();
    retriveComputerSessStorFunc();
    // getBackComputerStoVar = globeChangNum;
    // console.log(getBackComputerStoVar);
    // if(restart){
      // restart = false;
    // }else{
      setTimeout(function () {
        // ifSixLuck()
        dispLuck();
        modalTrigFun();
        diceSound.pause();
      }, 800);
    // }
  }else if (computerTurn === true && myTurn === false && diceActive === true) {
    diceActive = false
    $(".modalStarter").on("hidden.bs.modal", function (e) {
      // Handle the event after the modal is shown
      dispDiceHole.focus();
    });
    // This section is use to focus back on roll dice
    let dispDiceHole = $(".editable");
    window.addEventListener("DOMContentLoaded", () => {
      dispDiceHole.focus();
    });

    // this is to add onclick to all cont btn
    document.getElementById("btn-continue").addEventListener("click", () => {
      dispDiceHole.focus();
    });

    dispDiceRolOne.innerHTML = `<img style="width: 100%; height:15vh;" src='./cf/dice_ass/dice.gif'>`;

    diceSound.play();

    diceRandNoPlayerOne = Math.floor(Math.random() * 6 + 1); ////
    // computerTurnToSaveSessi = 11;
    // getBackComputerStoVar = 35
    // getBackComputerStoVar = diceRandNoPlayerOne;
    if (((computerTurnToSaveSessi == 50) && (diceRandNoPlayerOne == 6)) ||
      ((computerTurnToSaveSessi == 51) && (diceRandNoPlayerOne == 5 || 6)) ||
      ((computerTurnToSaveSessi == 52) && (diceRandNoPlayerOne == 4 || 5 || 6)) ||
      ((computerTurnToSaveSessi == 53) && (diceRandNoPlayerOne == 3 || 4 || 5 || 6)) ||
      ((computerTurnToSaveSessi == 54) && (diceRandNoPlayerOne == 2 || 3 || 4 || 5 || 6)) ||
      ((computerTurnToSaveSessi == 55) && (diceRandNoPlayerOne == 1 || 2 || 3 || 4 || 5 || 6))
    ) {
      computerTurnToSaveSessi = 56;
    //dispDiceRolOne.innerHTML = `<img style="width: 100%; height:15vh;" src='./cf/dice-rest-state.JPG'>`;
    } else if (diceRandNoPlayerOne == 6 && computerTurnToSaveSessi == 0) {
      computerTurnToSaveSessi = diceRandNoPlayerOne;
    } else if (computerTurnToSaveSessi >= 6) {
      computerTurnToSaveSessi += diceRandNoPlayerOne;
    }
    setComputerSessStorFunc();
    retriveComputerSessStorFunc();
    setMySessStorFunc();
    retriveMySessStorFunc();
    // getBackComputerStoVar = globeChangNum;
    // console.log(getBackComputerStoVar);
    // if(restart){
      // restart = false
    // }else{
      setTimeout(function () {
        // ifSixLuck()
        dispLuck();
        modalTrigFun();
        diceSound.pause();
      }, 800);
    // }
  }
  console.log(diceActive)
}

