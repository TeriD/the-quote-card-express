"use strict";

const elements = {
    quote: document.getElementById("quote"),
    author: document.getElementById("author"),
};

// Quotes array
const quotes = [
    { quote: "All hands! Abandon ship!", author: "Captain Picard" },
    { quote: "Doh!", author: "Homer Simpson" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Age is an issue of mind over matter. If you don't mind, it doesn't matter.", author: "Mark Twain" },
    { quote: "The Internet is the first thing that humanity has built that humanity doesn't understand...", author: "Eric Schmidt" },
    { quote: "Growing old is mandatory, but growing up is optional.", author: "Chili Davis" },
    { quote: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
];

// Fetch a random image from your backend
async function getRandomImage() {
    const endpoint = "http://localhost:8080/api/v1/getRandomImage";
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.data;

        console.log("🌄 Image received:", receivedPhotoUrl);
        const imgDiv = document.querySelector(".background-img");
        imgDiv.style.backgroundImage = `url(${receivedPhotoUrl})`;
    } catch (error) {
        console.error("❌ Error getting image:", error);
    }
}

// Loop through quotes and change images
function loopThroughQuotes() {
    let quoteIndex = 0;

    async function cycle() {
        const currentQuote = quotes[quoteIndex];
        elements.quote.textContent = `“${currentQuote.quote}”`;
        elements.author.textContent = currentQuote.author.toUpperCase();

        await getRandomImage();

        quoteIndex = (quoteIndex + 1) % quotes.length;
        setTimeout(cycle, 3000);
    }

    cycle();
}

loopThroughQuotes();