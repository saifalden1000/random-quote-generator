var quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa",
  },
];

var lastNumber = -1;

function generateQuote() {
  var randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * quotes.length);
  } while (randomNumber === lastNumber);

  lastNumber = randomNumber;

  var quote = quotes[randomNumber];

  document.getElementById("quote").innerText = quote.text;
  document.getElementById("author").innerText = quote.author;
}

function addQuote() {
  var text = document.getElementById("new-quote-text").value;
  var author = document.getElementById("new-quote-author").value;
  if (text && author) {
    quotes.push({ text, author });
    document.getElementById("new-quote-text").value = "";
    document.getElementById("new-quote-author").value = "";
    alert("Quote added successfully!");
  } else {
    alert("Both quote text and author are required.");
  }
}

function removeQuote() {
  var currentQuote = document.getElementById("quote").innerText;
  var currentAuthor = document.getElementById("author").innerText;

  var quoteNumber = -1;
  for (var i = 0; i < quotes.length; i++) {
    if (quotes[i].text === currentQuote && quotes[i].author === currentAuthor) {
      quoteNumber = i;
      break;
    }
  }

  quotes.splice(quoteNumber, 1);
  alert("Quote removed successfully!");
  generateQuote();
}
