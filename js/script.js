// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of object literals. Each object literal contains quotes and source information.
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