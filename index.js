//create a button that will display a random quote underneath the button
document.querySelector('button').addEventListener('click', () => {
    console.log('It works!')
})  
//create a variable that is an array of quotes for the button to display
const quotes = [
     "Rutabaga - Aku Aku, Crash Bandicoot",
     "Life is a garden, dig it - Joe Dirt",
     "The only way you are going to have success is to have lots of failures first - Sergey Brin, Google",
     "Dont be sorry, Be better. - Kratos, God of War",
     "Courage need not be remembered, for it is never forgotten - Princess Zelda, BOTW "
]
//create a function that generates the quote
function generateQuote() {
    // Get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote at the random index
    const randomQuote = quotes[randomIndex];

    // Display the quote on the webpage
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = randomQuote;
}

// Event listener for the button click
document.getElementById('quoteGenerator').addEventListener('click', generateQuote);