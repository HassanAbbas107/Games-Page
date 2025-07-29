const Game = require("../models/Game")
const router = require("express").Router()
const User =require("../models/User")


router.get("/home", async (req,res)=>{
    try {
    const AllGames = await User.find().populate("game")    
    res.render("user/home.ejs",{AllGames:AllGames})
    } catch (error) {
        console.log(error)
    }
})


module.exports = router