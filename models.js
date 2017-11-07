const mongoose = require('mongoose');
module.exports = function(mongoUrl) {
    mongoose.connect(mongoUrl, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected successfully to the database.")
        }
    });


    var shoeSchema = mongoose.Schema({
      brand : String,
      color : String,
      price : Number,
      size : Number,
      in_stock : Number,
      imagePath :String

    });

var shoeSchema = mongoose.model('shoeSchema', shoeSchema);

return {
    shoeSchema
}
}
