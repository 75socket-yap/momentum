const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "This too shall pass.",
    author: "Et hoc transibit",
  },
  {
    quote: "The die is cast.",
    author: "Julius caesar",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote:
      "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
  },
  {
    quote: "Great minds have purposes, others have wishes.",
    author: "Washington Irving",
  },
  {
    quote: "A day without laughter is a day wasted.",
    author: "Anonymous",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
