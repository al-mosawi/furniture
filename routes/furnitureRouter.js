var express = require('express');
var Furniture = require('../models/furniture');
var furnitureRouter = express.Router();

furnitureRouter.route('/')
.get(function(req,res){
    Furniture.find({}, function(err, data){
        if(err){
            res.status(500).send(err);
        }
        res.send(data);
    })
})

.post(function(req,res){
    var newFurniture= new Furniture(req.body);
    newFurniture.save(newFurniture, function(err, data){
        if(err){
    res.status(500).send(err);

        }
        res.send(data)
    })
})

furnitureRouter.route('/:id')
.get(function(req,res){
    Furniture.findById(req.params.id, function(err,data){
        if(err){
            res.ststus(500).send(err);
        }
        res.send(data)
    })
    
})
.delete(function(req,res){
    Furniture.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.status(500).send(err);
        }
        res.send({
            message: "your item was successfully deleted"
        })
    })
})

.put(function(req,res){
    Furniture.findByIdAndUpdate(req.params.id, req.body,{new:true}, function(err,data){
        if(err){
            res.status(500).send(err);
        }
        res.send(data)
    })
})

module.exports = furnitureRouter;
