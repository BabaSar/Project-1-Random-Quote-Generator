// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of object literals. Each object literal contains quotes and associated info
var quotes = [
    {   quote: "Quality is not an act, it is a habit",
        source: "Aristotle",
        //citation: "First citation",
        year: "320BC"
    },

    {   quote: "“Be congruent, be authentic, be your true self.”",
        source: "Mahatma Gandhi",
        citation: "mindbodygreen.com"

    },

    {   quote: "If you can't feed a hundred people, then feed just one.",
        source: "Mother Theresa",
        citation: "catholic.org"
    },

    {   quote: "I sometimes have a tendency to walk on the dark side",
        source: "J.K Rowling",
        citation: "brainyquote.com",
        year: "2007"
    },

    {   quote: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven",
        source: "Jesus",
        citation: "Matthew 5:10",
        year: "AD 27"
    },

    {   quote: "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.",
        source: "Steve Jobs",
        citation: "themuse.com"

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
        var quoteObject = quotes[randNum];


        //output the quote to the browser HTML
        //some properties won't exist, how do we check for this?
        var messageHTML = '<p class=\"quote\">' + quoteObject.quote + '</p>';
        messageHTML += '<p class="source">' + quoteObject.source;

        if(typeof quoteObject.citation !== "undefined"){
            messageHTML+= '<span class="citation">' + quoteObject.citation + '</span>';
        }
        if(typeof quoteObject.year !== "undefined"){
            messageHTML+= '<span class="year">' + quoteObject.year + '</span>';
        }

        messageHTML += '</p>';
        console.log(messageHTML);

        injectHTML(messageHTML);
        changeBackgroundColor();

        previousGeneratedRandomNumber = randNum;

    }else{
        getRandomQuote();
    }

}

var target = document.getElementById('quote-box');

//function to inject HTML into page
function injectHTML(message){
    target.innerHTML = message;
}

//Declaring the printQuote function
function printQuote(){
    //calls the getRandomQuote() function, then stores returned object into a variable
    getRandomQuote();
    //construct the string containing the different quote properties using HTML template
}

//EXTRA CREDIT:
//1)Add further object properties such as category tags

//2)Change background color to a random color for each button click
function changeBackgroundColor(){
    //rgb values from 0 to 255
    var r = getRandomNumber(255);
    var g = getRandomNumber(255);
    var b = getRandomNumber(255);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    document.body.style.backgroundColor = rgb;
}
//3)Refresh the quote automatically after 20 seconds using setInterval or setTimeout
setInterval(printQuote, 20000);