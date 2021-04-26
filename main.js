// Colors array
let colors = ['blue', 'yellow', 'black', 'red', 'brown', 'orange', 'gray', 'lightblue', 'blueviolet'];

// Get button
let button = document.getElementById('button');

// Add event listener to button
button.addEventListener('click', function() {
    // Randomizer
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Get container
    let container = document.getElementById('container');

    // Style background
    container.style.background = randomColor;
    button.style.color = randomColor;
})