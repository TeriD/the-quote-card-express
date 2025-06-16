"use strict";

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
    background: document.querySelector(".background-img"),
};

const quotes = [
    { quote: "All hands! Abandon ship!", author: "Captain Picard" },
    { quote: "Doh!", author: "Homer Simpson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.", author: "Mark Twain" },
    { quote: "Growing old is mandatory, but growing up is optional.", author: "Chili Davis" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.", author: "Eric Schmidt" }
];

const localImages = [
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg",
    "img/bg4.jpg",
    "img/bg5.jpg",
    "img/bg6.jpg",
    "img/bg7.jpg",
    "img/bg8.jpg"
];

function loopThroughQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        const currentQuote = quotes[quoteIndex];
        elements.quote.textContent = `“${currentQuote.quote}”`;
        elements.author.textContent = currentQuote.author.toUpperCase();

        const randomImage = localImages[Math.floor(Math.random() * localImages.length)];
        elements.background.style.backgroundImage = `url(${randomImage})`;

        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);