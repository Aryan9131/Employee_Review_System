const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const DB_URL = process.env.DATABASE_URL;

async function main() {
        try {
        await mongoose.connect(DB_URL);
        console.log("DB connected");
    } catch (err) {
        console.error("Error while connecting to DB :"+err);
    }
}

main();
