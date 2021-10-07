const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { CommentModel } = require("../models");

router.post("/", validateJWT, async(req, res)=>{
    const user_id = req.user.id;
    //console.log(req,user);
    const{climate_id,description} = req.body
    //console.log('commentPost', req.body )
    await CommentModel.create({ 
        climate_id,
        user_id,
        description
    })
    .then(comment => res.status(201).json({message: 'new entry ', comment}))
    .catch(err => res.status(500).json({message: 'something went wrong at /comment', err}))
});


router.get("/:id", async(req, res) =>{
 
    try {   
        console.log('climateid', req.params.id)
        const query = {
            where: {

            climate_id:req.params.id
            }
        };
        const result = await CommentModel.findAll(query)
        res.status(200).json(result)
        console.log("Climate resu",result)
    } catch (err) {
        res.status(500).json({ error: err });
        }
    });


module.exports = router;