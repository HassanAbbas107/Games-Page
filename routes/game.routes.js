



router.get("/home", async (req,res)=>{
    try {
    const AllGames = await User.find().populate("game")    
    res.render("user/home.ejs",{AllGames:AllGames})
    } catch (error) {
        console.log(error)
    }
})