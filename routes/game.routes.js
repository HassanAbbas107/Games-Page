const Game = require("../models/Game")
const router = require("express").Router()
const User =require("../models/User")
const isSignedIn = require("../middleware/isSignedIn");


router.get("/home",async(req,res)=>{
    const allGames = await Game.find()
    res.render("user/home.ejs",{allGames: allGames})
})

router.get("/new", (req,res)=>{
    try {
       res.render("./user/new") 
    } catch (error) {
      console.log(error)  
    }

})
router.post("/new",isSignedIn,async(req,res)=>{
    try{
        const updatedBody = {
            name: req.body.name,
            link: req.body.link,
            creater: req.session.user._id
        }
        req.body.creater = req.session.user._id
        await Game.create(req.body)
        res.redirect("/game/home")
    }
    catch(error){
        console.log(error)
    }
})

router.get("/:gameId",async(req,res)=>{
    try{
        const foundGame= await Game.findById(req.params.gameId)
        res.render("user/game-details.ejs",{foundGame: foundGame})
    }
    catch(error){
        console.log(error)
    }
})
 router.get("/new", async (req,res)=>{
    res.render("/user/new.ejs")
 })


 router.delete("/:gameId",isSignedIn, async (req,res)=>{
         try{
        const deletedgame = await Game.findByIdAndDelete(req.params.gameId)
        res.redirect("/game/home")
    }
    catch(error){
        console.log(error)
    }
})

//update
router.get("/:gameId/update",isSignedIn,async(req,res)=>{
    try{
        const foundGame = await Game.findById(req.params.gameId)
        res.render("user/game-update.ejs",{foundGame})
    }
    catch(error){
        console.log(error)
    }
})


router.put("/:gameId",isSignedIn,async(req,res)=>{
    
    const updatedgame = await  Game.findByIdAndUpdate(req.params.gameId, req.body)
    res.redirect("/game/home")
})
router.get("/:gameId",async(req,res)=>{
const RGames = await Game.find()
        const randomIndex = Math.floor(Math.random() * RGames.length);
        RGames[randomIndex]
})

module.exports = router