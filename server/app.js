const express=require("express") ;

const router = require("./routes/home.js");
const app = express();
// app.use(json());
app.use(express.json());

app.use("/",router);


app.listen(3000, () => console.log("listening on port 3000!!!!"));


module.exports = app;