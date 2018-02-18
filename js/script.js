// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of object literals. Each object literal contains quotes and associated info
var quotes = [
    {   quote: "First quote",
        source: "First source",
        citation: "First citation",
        year: "First year"
    },

    {   quote: "Second quote",
        source: "Second source",
        citation: "Second citation",
        year: "Second year"
    },

    {   quote: "Third quote",
        source: "Third source",
        citation: "Third citation",
        year: "Third year"
    },

    {   quote: "Fourth quote",
        source: "Fourth source",
        citation: "Fourth citation",
        year: "Fourth year"
    },

    {   quote: "Fifth quote",
        source: "Fifth source",
        citation: "Fifth citation",
        year: "Fifth year"
    }
];

//first let's figure out how many quotes there are in the quotes array
//If more quotes are added, then this can be determined dynamically
var numOfQuotes = quotes.length;

var previousGeneratedRandomNumber = null;

//A function to generate a random number
function getRandomNumber(upper){
    var randomNumber = Math.floor(Math.random()*upper);
    return randomNumber;
}

//A function called getRandomQuote. This will select a random quote from the quotes array.
function getRandomQuote(){

    var randNum = getRandomNumber(numOfQuotes);
    //previousGeneratedRandomNumber = randNum;

    //if the newly generated random number was the same as last time, get a different number
    if (randNum !== previousGeneratedRandomNumber){
        //using the randNum obtained, access this index position in the array to retrieve the quote object
        var quote = quotes[randNum];

        //log the quote to test if it works
        console.log(quote);

        //output the quote to the browser HTML
        //some properties won't exist, how do we check for this?
        var messageHTML = "";

        previousGeneratedRandomNumber = randNum;

    }else{
        getRandomQuote();
    }

}

//Declaring the printQuote function
function printQuote(){
    //calls the getRandomQuote() function, then stores returned object into a variable
    getRandomQuote();
    //construct the string containing the different quote properties using HTML template
}