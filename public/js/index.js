"use strict";

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
    background: document.querySelector(".background-img"),
};

// QUOTE + IMAGE DATA
const quotes = [
    {
        quote: "All hands! Abandon ship!",
        author: "Captain Picard",
    },
    {
        quote: "Doh!",
        author: "Homer Simpson",
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },

    {
        quote: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
        author: "Mark Twain",
    },

    {
        quote: "The Internet is the first thing that humanity has built that humanity doesn't understand, the largest experiment in anarchy that we have ever had.",
        author: "Eric Schmidt",
    },

    {
        quote: "Growing old is mandatory, but growing up is optional.",
        author: "Chili Davis",
    },

    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },

    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
];

// FETCH RANDOM IMAGE FROM UNSPLASH
async function getRandomImageUrl() {
    const client_id = "xLVZ8L8AZHE6PEqQBThlIhcubkkq7ySuvbDDkTR2rA8"; // ⛔ Replace in production
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${client_id}`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        return data.urls.full;
    } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        return null;
    }
}

// ROTATE QUOTES + IMAGES
function loopThroughQuotes() {
    let quoteIndex = 0;
    const interval = setInterval(async () => {
        const currentQuote = quotes[quoteIndex];
        elements.quote.textContent = `“${currentQuote.quote}”`;
        elements.author.textContent = currentQuote.author.toUpperCase();

        const imageUrl = await getRandomImageUrl();
        if (imageUrl) {
            elements.background.style.backgroundImage = `url(${imageUrl})`;
        }

        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 3000);
}

setTimeout(loopThroughQuotes, 3000);