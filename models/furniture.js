var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var furnitureSchema = new Schema({
    img: String,
    name: String,
    price: String,
    description: String,
    collectionType: {
        type: String ,
        default: 'furniture'
    }
});
var furniture = mongoose.model('furniture', furnitureSchema);
module.exports = furniture;
