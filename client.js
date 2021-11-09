$(document).ready(jqReady);

console.log('Here are all the available people:', people);

function jqReady() {
  console.log('javascript and jquery loaded');  
  console.log(people); // Properly accessing data.js!
  renderGuessWhoPanels(people);
  $('img').on('click', imageClick);
  gameLogic();
  
};

// Function renders all the images from provided array's githubUsername profile picture
function renderGuessWhoPanels(array){
    //people [], for each render the following
  for (let i in array){
    let guessWhoPanel = `
    <img src="https://github.com/${array[i].name}.png?size=250" alt="Profile image of ${array[i].githubUsername}" data-index="${i}"></img> 
  `;     // meta data so we can identify when we click them ✅

  //Append each picture to the guessWhoDiv
  $('.guessWhoDiv').append(guessWhoPanel);
  }; // end for-in through array loop
}; // end renderGuessWhoPanels

// Function that is called when image is clicked!
function imageClick() {
  // $(this).data()
  console.log($(this).data());
  // if ($(this).data() === )
  
}; // end imageClick

// Random Number Generator Function provided in README ✅
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}; // end randomNumber

// This is the min and max of our people []
function generateNameToPick() {
  randomIndex = randomNumber(0, (people.length - 1));
  return currentName = people[randomIndex].name;
}

function renderNameToPick(name) {
  $('.nameToPick').text(`${name}`);  
}

function gameLogic() {
  let currentName = generateNameToPick();
  renderNameToPick(currentName);
  console.log(currentName);

}