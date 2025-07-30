const Game = require("../models/Game")
const router = require("express").Router()
const User =require("../models/User")


router.get("/home",async(req,res)=>{
    const allGames = await Game.find()
    res.render("user/home.ejs",{allGames: allGames})
})

router.post("/",async(req,res)=>{
    try{
        await Game.create(req.body)
        res.redirect("/user/home")
    }
    catch(error){
        console.log(error)
    }
})
module.exports = router