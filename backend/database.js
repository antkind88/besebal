const mongoose = require('mongoose');
const connection = "mongodb+srv://antkind88:2DWrgzwilEQqziYl@besebal.smpqhkn.mongodb.net?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

