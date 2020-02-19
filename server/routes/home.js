const express = require("express");
const router = express();

router.get("/", (req,res)=>{
    res.status(200).send({
        "status": "200",
        "response":{
            "message":"welcome dearly to papel"
        }
    })
});


module.exports= router;
