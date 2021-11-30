const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sdev255:myclass_2021@cluster0.oxluk.mongodb.net/mydb2?retryWrites=true&w=majority", 
   { useNewUrlParser: true });

module.exports = mongoose;