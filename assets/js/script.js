var easyQuestions = [
  {"q":"Copy","a":["Control","C"]},
  {"q":"Paste","a":["Control","V"]},
  {"q":"Undo","a":["Control","Z"]},
  {"q":"Redo","a":["Control","Y"]},
  {"q":"Print","a":["Control","P"]},
  {"q":"Save","a":["Control","S"]},
  {"q":"Save as","a":["F12"]},
  {"q":"Bold","a":["Control","B"]},
  {"q":"Italic","a":["Control","I"]},
  {"q":"Underline","a":["Control","U"]},
  {"q":"Go to beginning of row","a":["Home"]},
  {"q":"Open find dialog","a":["Control","F"]},
  {"q":"Open find and replace dialog","a":["Control","H"]},
  {"q":"Edit the active cell (edit mode)","a":["F2"]},
  {"q":"Cancel a cell entry and get out of cell","a":["Escape"]},
  {"q":"Delete character to left","a":["Backspace"]},
  {"q":"Delete character to right","a":["Delete"]},
  {"q":"Accept autocomplete suggestion","a":["Tab"]},
  {"q":"Start a formula","a":["="]},
  {"q":"Anchor cells (A$1$), toggle anchors (edit mode)","a":["F4"]}
  ];

  var mediumQuestions = [
    {"q":"Go to next workbook","a":["Control","Tab"]},
    {"q":"Number format","a":["Control","Shift","!"],"a2":["Control","Shift","1"]},
    {"q":"Percent format","a":["Control","Shift","%"],"a2":["Control","Shift","5"]},
    {"q":"Date format","a":["Control","Shift","#"],"a2":["Control","Shift","3"]},
    {"q":"Paste Special formats","a":["Control","Alt","v","t"],"a2":["Alt","e","s","t"]},
    {"q":"Paste Special values","a":["Control","Alt","v","v"],"a2":["Alt","e","s","v"]},
    {"q":"Paste Special formulas","a":["Control","Alt","v","f"],"a2":["Alt","e","s","f"]},
    {"q":"Outline Border","a":["Control","Shift","&"],"a2":["Control","Shift","7"]},
    {"q":"Remove border","a":["Control","Shift","-"],"a2":["Control","Shift","-"]},
    {"q":"Go to cell A1","a":["Control","Home"]},
    {"q":"Display the Go To dialog box","a":["F5"]},
    {"q":"Select all","a":["Control","A"],"a2":["Control","Shift","Spacebar"]},
    {"q":"Fill down from cell above","a":["Control","D"]},
    {"q":"Fill right from cell left","a":["Control","R"]},
    {"q":"Insert autosum formula","a":["Alt","="]},
    {"q":"Recalculate all worksheets","a":["F9"]},
    {"q":"Select direct precedents","a":["Control","["]},
    {"q":"Select direct dependents","a":["Control","]"]},
    {"q":"Trace immediate precedents","a":["Alt","m","p"]},
    {"q":"Trace immediate depedents","a":["Alt","m","d"]},
    {"q":"Recalculate all worksheets","a":["F9"]},
    {"q":"Goal seek","a":["Alt","a","w","g"]},
    {"q":"Name a cell or cell range","a":["Control","F3"]},
    {"q":"Jump to next worksheet","a":["Control","PageDown"]},
    {"q":"Jump to previous worksheet","a":["Control","PageUp"]},
    {"q":"Freeze pane","a":["Alt","w","f","f"]},
    {"q":"Split screen","a":["Alt","w","s"]},
    {"q":"Select column","a":["Control","Spacebar"]},
    {"q":"Select row","a":["Shift","Spacebar"]},
    {"q":"Delete row(s)/column(s)","a":["Control","-"]},
    {"q":"Add row(s)/column(s)","a":["Control","Shift","+"],"a2":["Control","Shift","="]},
    {"q":"Set column width","a":["Alt","h","o","w"]},
    {"q":"Autofit column width","a":["Alt","h","o","i"]},
    {"q":"Fit to specific row height","a":["Alt","h","o","h"]},
    {"q":"Group rows/columns","a":["Alt","Shift","ArrowRight"],"a2":["Alt","a","g","g"]},
    {"q":"Ungroup rows/columns","a":["Alt","Shift","ArrowLeft"],"a2":["Alt","a","u","u"]}
    ];
    
  var hardQuestions = [
    {"q":"Close file","a":["Control","F4"]},
    {"q":"Show/hide ribbon","a":["Control","F1"]},
    {"q":"Open Format dialog","a":["Control","1"]},
    {"q":"Insert/edit comment","a":["Shift","F2"]},
    {"q":"Increase font size","a":["Alt","h","f","g"]},
    {"q":"Decrease font size","a":["Alt","h","f","k"]},
    {"q":"Increase decimal","a":["Alt","h","0"]},
    {"q":"Decrease decimal","a":["Alt","h","9"]},
    {"q":"Increase indent","a":["Alt","h","6"]},
    {"q":"Decrease indent","a":["Alt","h","5"]},
    {"q":"Paste Special comments","a":["Control","Alt","v","c"],"a2":["Alt","e","s","c"]},
    {"q":"Clear cell formats","a":["Alt","h","e","f"]},
    {"q":"Clear cell comments","a":["Alt","h","e","m"]},
    {"q":"Clear all (data, formats, comments)","a":["Alt","h","e","a"]},
    {"q":"Left border","a":["Alt","h","b","l"]},
    {"q":"Right border","a":["Alt","h","b","r"]},
    {"q":"Top border","a":["Alt","h","b","t"]},
    {"q":"Bottom border","a":["Alt","h","b","o"]},
    {"q":"Go to last cell in worksheet","a":["Control","End"]},
    {"q":"Insert a note","a":["Shift","F2"]},
    {"q":"Insert a function","a":["Shift","F3"]},
    {"q":"Moving from tab to tab","a":["Control","Tab"]},
    {"q":"Move backward from control to control","a":["Control","Shift","Tab"]},
    {"q":"Accessing data validation","a":["Alt","a","v","v"]},
    {"q":"Insert data table (must highlight cell first)","a":["Alt","a","w","t"]},
    {"q":"Sort a data range","a":["Alt","a","s","s"]},
    {"q":"Autofilter selection","a":["Alt","a","t"]},
    {"q":"Insert a pivot table","a":["Alt","n","v"]},
    {"q":"Insert a chart","a":["Alt","n","r"]},
    {"q":"Record a macro","a":["Alt","l","r"]},
    {"q":"Zoom","a":["Alt","w","q"]},
    {"q":"Change worksheet name","a":["Alt","h","o","r"]},
    {"q":"Rearrange tab order","a":["Alt","h","o","m"]}
    ];

var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var timerElement = document.querySelector(".timer-count");
var questionDiv = document.querySelector(".question");

// Generate 5, 7, and hard questions array.
generateQuestions = () => {

  function generateArray(a, i) {
    var r = [];
    while(r.length < i) {
      var x = a[Math.floor(Math.random()*a.length)];
      if(!(r.filter(e => e.q === x.q).length > 0)) {
        r.push(x);
      }
    }
    return r; 
  }
  var array = [];
  var shuffledE = generateArray(easyQuestions, 5);
  var shuffledM = generateArray(mediumQuestions, 7);
  var shuffledH = generateArray(hardQuestions, hardQuestions.length);
  array = array.concat(shuffledE, shuffledM, shuffledH);
  return array;

}

sameValues = (a,b) => {
  var l = true;
  if(a.length < b.length) {
    for (var i = 0; i < a.length; i++) {
      if(a[i].toLowerCase() != b[i].toLowerCase()) {
        l = false;
      }
    }
  }
  else {
    for (var i = 0; i < b.length; i++) {
      if(a[i].toLowerCase() != b[i].toLowerCase()) {
        l = false;
      }
    }
  }
  return l;
}


printAnswers = (answer) => {
  displayAnswerBox.innerHTML = "<span class='keyStrokes'>" + answer.a[0] + "</span>";
  for(var i = 1; i < answer.a.length; i++) {
    displayAnswerBox.innerHTML += " + " + "<span class='keyStrokes'>" + answer.a[i] + "</span>";
  }
  if(answer.a2) {
    displayAnswerBox.innerHTML += "<span class='or'>OR</span>" + "<span class='keyStrokes'>" + answer.a2[0] + "</span>";
  for(var i = 1; i < answer.a2.length; i++) {
    displayAnswerBox.innerHTML += " + " + "<span class='keyStrokes'>" + answer.a2[i] + "</span>";
  }
  }
}

fail = () => {
  gameStarted = false;
  runTimer = false;
  document.getElementById("countdown").innerHTML = "";
  titleBox.innerHTML = "Oops... <strong>press enter</strong> to try again!";
  questionBox.innerHTML = "<span style='color:#B22222; font-family:benton-sans;'>the correct answer was</span>";
  answerBox.innerHTML = "";
  // streakBox.innerHTML = "";
  if(streak > topStreak) {
    topStreak = streak;
    document.getElementById("topStreak").innerHTML = streak;
  }
  printAnswers(questions[questionIndex]);
}

win = () => {
  gameStarted = false;
  runTimer = false;
  document.getElementById("countdown").innerHTML = "";
  titleBox.innerHTML = " Congratulations";
}

printKeys = (keyIndex) => {
  if(keyIndex == 0) {
    answerBox.innerHTML += "<span class='keyStrokes'>" + keys[keyIndex] + "</span>";
  }
  else {
    answerBox.innerHTML += " + " + "<span class='keyStrokes'>" + keys[keyIndex] + "</span>";
  }
}

startTimer = () => {
  document.getElementById("countdown").innerHTML = "<div id='countdown-number'></div><svg><circle r='18' cx='20' cy='20' id='circle' class='timerAnimation'></circle></svg>";
  document.getElementById("countdown-number").innerHTML = timerCount;

  if(timerState) {
    timerCount = 10;
    document.getElementById("countdown-number").innerHTML = timerCount;
  } else {
    setInterval(timerInterval, 1000);
    timerState = true;
  }

}

timerInterval = () => {
  if(runTimer) {
    timerCount = --timerCount <= -1 ? 10 : timerCount;
    document.getElementById("countdown-number").innerHTML = timerCount;
  }
  if(timerCount == 0) {
    fail();
  }
}

// Start Game function
var startGame = function() {

  timerCount = 10; 
  questionIndex = 0;
  keys = [];
  keyIndex = 0;
  streak = 0;
  questions = generateQuestions();
  
  answerBox.innerHTML = "";
  displayAnswerBox.innerHTML = "";
  titleBox.innerHTML = "what is the shortcut for";
  streakBox.innerHTML = "Current streak: <span id='streakSpan'>0 </span>";
  document.getElementById("streakSpan").innerHTML = "0";
 
  questionBox.innerHTML = questions[questionIndex].q;
  answer = questions[questionIndex].a;


  switchoverQuestion = (index) => {
    answer = questions[questionIndex].a;
    disableInput = true;
    setTimeout(function() {
      questionBox.innerHTML = questions[index].q;
      keys = [];
      keyIndex = 0;
      answerBox.innerHTML = "";
      document.getElementById("streakSpan").innerHTML = streak;
      if (!(streak == 0)) {
        startTimer();
      }
      disableInput = false;
    }, 500);
    runTimer = true;
  }

  if(!eventListenerAdded) {
    eventListenerAdded = true;
    document.addEventListener('keydown', (gameListener) => {
      gameListener.preventDefault();
      if(!disableInput) {
        if(gameListener.key != "Enter") {
          if(gameStarted) {
            if (!gameListener.repeat) {
              if(gameListener.key == " ") {
                keys.push("Spacebar");
              }
              else {
                keys.push(gameListener.key);
              }
              printKeys(keyIndex);
              keyIndex++;
        
              if(questions[questionIndex].a2) { // If contains second answer
                if(!(keys.length == answer.length)) {
                  if(!(keys[keys.length-1].toLowerCase() == answer[keys.length-1].toLowerCase())) {
                    answer = questions[questionIndex].a2;
                    if(!(keys[keys.length-1].toLowerCase() == answer[keys.length-1].toLowerCase())) {
                      fail();
                    }
                  }
                }
                else if((sameValues(keys, questions[questionIndex].a)) || (sameValues(keys, questions[questionIndex].a2))) {
                  questionIndex++;
                  streak++;
                  if(streak == questions.length) {
                    win();
                  } else {
                    switchoverQuestion(questionIndex);
                  }
                }
                else {
                  fail();
                } 
              }
              else { // Else follow this code
                if(!(keys.length == questions[questionIndex].a.length)) {
                  if(!(keys[keys.length-1].toLowerCase() == questions[questionIndex].a[keys.length-1].toLowerCase())) {
                    fail();
                  }
                }
                else if(sameValues(keys, questions[questionIndex].a)) {
                  questionIndex++;
                  streak++;
                  if(streak == questions.length) {
                    win();
                  } else {
                    switchoverQuestion(questionIndex);
                  }
                }
                else {
                  fail();
                } 
              }
            }
          }
        }
      }
    });
  }

}


// Render game on load
var init = function() {
  document.addEventListener('keydown', (e) => {
    if(e.key == "Enter") {
      if(!(gameStarted)) {
        gameStarted = true;
        startGame();
      }
    }
  });
};

let runTimer = false;
let gameStarted = false;
let eventListenerAdded = false;
let disableInput = false;
let timerCount = 10; 
let questionIndex = 0;
let keys = [];
let keyIndex = 0;
let streak = 0;
let topStreak = 0;
let timerState = false;
var questions;
let answer;
let answerBox = document.getElementById("answerBox");
let questionBox = document.getElementById("questionBox");
let titleBox = document.getElementById("titleBox");
let displayAnswerBox = document.getElementById("displayAnswerBox");

init();