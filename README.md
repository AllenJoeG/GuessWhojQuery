# jQuery Guess Who

Small group-coded (Kelsey Brown, Joe Allen, Caleb Hatch, Rome Horton) pick-the-person game initialized with HTML, CSS, and jQuery! Update 0.2 onward coded by Joe Allen.

## Display Profile Pictures
On document load, renders a picture of each person in array 'people', sourced from their github profile picture. If data.js is removed, replaced, or renamed, the renderGuessWhoPanels() will need to be refactored.

## Start the Game

First round begins on page load. The user is prompted to click the image of the individual's name who is displayed at the top.

## Game Logic

- If the player clicks on the correct person
    - give them a success message.
    - Prompt the player to pick another person randomly and let them keep playing.
- If they pick the wrong person
    - give them an error message.
    - allow them to try again.

## Stretch Goals

Not yet coded, but will return and implement!

- When the player clicks on the correct person, add a visual cue that indicates that they picked the correct person. Then change it back after 2 seconds and resume the game. You'll need to use the [built in `setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout) function for the timing. This function waits a given amount of time and then calls a function you specify.
- Add some jQuery effects, animations and styling to your game! There are quite a few built in. [See the Docs!](https://api.jquery.com/category/effects/)
- Randomize the array of images before displaying them on the page to make the game more challenging.
