const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthenticationSchema = new Schema({
    email: {
        type: String,
        default: 'authentication'
    },
    password: {
        type: String,
        default: 'todo',
    },
    userType:{
        type: String,
        enum : ['ADMIN','USER'],
        default: 'ADMIN'
    },
    phone: {
        type: String,
        default: 'todo',
    },
    userDetails: {
        type: mongoose.Schema.Types.ObjectId,
        default: 'UserDetails',
    },
}, { timestamps: true });


// Export model
module.exports = mongoose.model("Authentication", AuthenticationSchema);
