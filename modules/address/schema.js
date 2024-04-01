const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    email: {
        type: String,
        default: 'todo',
    },
    password: {
        type: String,
        default: 'todo',
    },
    phone: {    
        type: String,
        default: 'todo',
    },
}, { timestamps: true });


// Export model
module.exports = mongoose.model("Address", AddressSchema);
