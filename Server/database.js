const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/Basci_MEAN";

mongoose.connect(URI)
    .then(db => console.log('Db Conectada'))
    .catch(err => console.error(err));
    
module.exports = mongoose;
