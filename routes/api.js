const express = require('express')
const router = express.Router()
const products = require('../models/db')

router.get('/kalpas', async(req, res) => {
    try{
            const al = await products.find()
            res.json(al)
    }catch(err){
        res.send('error ' + err)
    }
})

router.post('/kalpas', async(req,res) => {
    try {
        const addproduct = new products ({
            name : req.body.name,
            age : req.body.age
        })
        
        const a1 = await addproduct.save()
        res.send(a1)

    }catch(error) {
        res.send('error ' + err)
    }
})

router.put('/kalpas/:id', async(req,res) => {
    try{
        const al = await products.findOneAndUpdate(req.params.id,
            {
                $set:{age:req.body.age}
            })
        const updatedDocument= await products.findById(req.params.id)

        res.send(updatedDocument)
    }catch(err){
        res.send('error ' + err)
    }
})

router.delete('/kalpas/:id', async(req,res) => {
    try{
        const al = await products.findById(req.params.id)
        const a1 = await al.delete()
        res.send('deleted')
    }catch(err){
        res.send('error ' + err)
    }
})

module.exports = router