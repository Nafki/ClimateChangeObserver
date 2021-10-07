const { compareSync } = require("bcryptjs");
const Express = require("express");
const router = Express.Router();
const validateJWT = require("../middleware/validate-jwt");
const { ClimateModel } = require("../models")

router.post("/climate", validateJWT, async(req, res)=>{
    const user_id = req.user.id;
    //console.log(req,user);
    const{temperature, precipitation, location} = req.body
    //console.log('climatePost', req.body )
    //res.send("climate post called" , user_id, temprature, precipitation, location)
    await ClimateModel.create({
        user_id,
        temperature,
        precipitation,
        location
    })
    .then(climate => res.status(201).json({message: 'new entry ', climate}))
    .catch(err => res.status(500).json({message: 'something went wrong at /climate', err}))
});

router.get("/all", async(req, res) =>{
 
    try {   
        const results = await ClimateModel.findAll();
        console.log('results', results)
        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: err });
        }
    });

    router.get("/:id", async(req, res) =>{
 
        try {   
            console.log('climateid', req.params.id)
            const query = {
                where: {
                
                id:req.params.id
                }
            };
            const result = await ClimateModel.findAll(query)
            res.status(200).json(result)
            console.log("Climate resu",result)
        } catch (err) {
            res.status(500).json({ error: err });
            }
        });
    
router.put("/:id", validateJWT, async(req, res) =>{
        //res.send("log put by id called " + req.params.id )
        const {temperature, precipitation, location } = req.body;
        const climateId = req.params.id;
        //const userId = req.user.id;
        
       console.log('updateClimate', req.body, req.params, req.user)
        const query = {
        where: {
        id: climateId,
        //user_id: userId,
      
        }
        };
        console.log("update by id", req.body)
        const updatedClimate = {
           temperature: temperature,
           precipitation: precipitation,
           location: location
           
        };
        try {
        const update = await ClimateModel.update(updatedClimate, query);
        res.status(200).json(update);
        } catch (err) {
        res.status(500).json({ error: err });
    }
    
    }); 

router.delete("/:id", validateJWT, async(req, res) =>{
    res.send("log delete by id called " + req.params.id)
    
    const climate = req.params.id;
    //console.log('testDeleting', climate)
    try {
    const query = {
        where: {
        
        id:climate
        }
    };
    await ClimateModel.destroy(query);
    res.status(200).json({ message: " Climate Entry Removed" });
    } catch (err) {
    res.status(500).json({ error: err });
    }
    });       
    
module.exports = router;