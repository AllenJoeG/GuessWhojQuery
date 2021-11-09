$(document).ready(jqReady);

console.log('Here are all the available people:', people);

function jqReady() {
  console.log('javascript and jquery loaded');  
  console.log(people); // Properly accessing data.js!
  renderGuessWhoPanels(people); // Load the images to DOM!
  gameLogic(); // Initialize first round
  
  //Click Listener for images
  $(document).on('click', 'img', imageClick);
  //Click Listener that reloads subsequent rounds
  $(document).on('click', '.playAgain', function(){
    gameLogic();
    $('.textDiv').empty();
  });
};

// Global variable that holds the current target of gameLogic
let currentName;
// Global variable that holds the index data of current target in gameLogic
let checkIsCurrentName;

// Function renders all the images from provided array's githubUsername profile picture
function renderGuessWhoPanels(array){
    //people [], for each render the following
  for (let i in array){
    let guessWhoPanel = `
    <img src="https://github.com/${array[i].githubUsername}.png?size=250" alt="Profile image of ${array[i].name}" data-index="${i}"></img> 
  `;     // meta data so we can identify when we click them ✅

  //Append each picture to the guessWhoDiv
  $('.guessWhoDiv').append(guessWhoPanel);
  }; // end for-in through array loop
}; // end renderGuessWhoPanels

// Function that is called when image is clicked!
function imageClick() {
  //comparing string to number, so I use ==
  if ($(this).data('index') == checkIsCurrentName){
    $('.textDiv').append(`
      <h3> You successfully found ${currentName}! </h3>
      <button class="playAgain">Play Again?</button>
      `);
  } else {
    window.alert('Nope! Try again!');
  };
}; // end imageClick

// Random Number Generator Function provided in README ✅
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}; // end randomNumber

// Returns a random name from a person object in people array.
function generateNameToPick() {
  randomIndex = randomNumber(0, (people.length - 1));
  return people[randomIndex].name;
}; //end generateNameToPick

//Appends name argument to DOM
function renderNameToPick(name) {
  $('.nameToPick').text(`Find: ${name}`);  
}; //end renderNameToPick

function gameLogic() {
  currentName = generateNameToPick();
  renderNameToPick(currentName);
  console.log(currentName);

  for (let i in people){
    if (people[i].name === currentName){
      checkIsCurrentName = i;
    }
  }

}