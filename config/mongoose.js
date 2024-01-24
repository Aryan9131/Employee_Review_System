const mongoose = require('mongoose');
require('dotenv').config();

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
