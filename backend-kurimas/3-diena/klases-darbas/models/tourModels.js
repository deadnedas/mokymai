const fs = require("fs");
const path = require("path");
const {sql} = require("../dbConection")

exports.getAllTours = async()=>{
    const tourlist = await sql`
    SELECT tours.name as tourname, tours.price, catagories.name, dificulty.level
    FROM tours
    JOIN difficulty ON tous.dificulty_id=difficulty.id
    JOIN difficulty ON tous.category_id=difficulty.id
    `;
}


//load env variables
const dir = path.join(__dirname, "/data/tours-simple.json");

const tours = JSON.parse(fs.readFileSync(dir));

module.exports = tours;

