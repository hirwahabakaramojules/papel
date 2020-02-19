import express from "express" ;

import  home from "./routes/home.js";



const app = express();

app.use(express.json());


app.use("/",home);




app.listen(3000, () => console.log("listening on port 3000!!!!"));


module.exports = app;
