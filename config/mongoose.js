const mongoose=require('mongoose');
const DB_URL=process.env.DATABASE_URL;
async function main() {
    await mongoose.connect(DB_URL);
}
main().then(()=>{
    console.log("DB connected");
}).catch(err => console.log(err));