"use strict";

const express = require("express");
const app = express();
const port = 8080;
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Function to fetch a random Unsplash image
async function getRandomImage() {
    const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
    try {
        const response = await fetch(endpoint);
        const returnedData = await response.json();
        const receivedPhotoUrl = returnedData.urls.regular;
        return receivedPhotoUrl;
    } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        return null;
    }
}

// API endpoint for the frontend to access
app.use("/api/v1/getRandomImage", async (request, response) => {
    const imageUrl = await getRandomImage();
    if (imageUrl) {
        response.status(200).json({
            status: 200,
            data: imageUrl
        });
    } else {
        response.status(500).json({
            status: 500,
            error: "Failed to fetch image from Unsplash"
        });
    }
});

app.listen(port, () => {
    console.log(`✅ Server is running at http://localhost:${port}`);
});