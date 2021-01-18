const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
        // res.send('Get request')
    } catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id,"name", options = sort).sort({name : asc})
        res.json(alien)
        // res.send('Get request')
    } catch(err){
        console.log(err)
        res.send('Error' + err)
    }
})

router.post('/', async(req, res)=>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
         const a1 = await alien.save()
         res.json(a1)        
    } catch (err) {
        console.log(err)
        res.send('Error')
    }
})



module.exports = router