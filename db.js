const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://zgumby85:@cluster0.oxluk.mongodb.net/mydb2?retryWrites=true&w=majority", 
   { useNewUrlParser: true });

module.exports = mongoose;