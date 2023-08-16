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

//CREATE AND APPEND A NEW ELEMENT BELOW

//first create a variable for the node you want to add to
const div1 = document.querySelector('#div1')
console.log(div1)


//create a variable that assigns the value of your new element
const div2 = document.createElement("div");
//Create the content for the newly created element of 'div'
div2.textContent = ""
//assign an id to newly created element
div2.id = "fresh"
//append the new element to the variable of the element you are appending to
div1.appendChild(div2);
console.log(div2)
