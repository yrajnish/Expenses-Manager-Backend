const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        default: 'todo',
        unique: true
    },
    password: {
        type: String,
        default: 'todo',
    },
    username: {
        type: String,
        default: 'todo',
        unique: true
    },
    userType:{
        type: String,
        enum : ['ADMIN','USER'],
        default: 'USER'
    },
    phone: {
        type: String,
        nullable:true,
        unique: true
    },
    status: {
        type: Number,
        description: '0: deleted, 1:active, 2:inactive, 3:blocked',
        default: 2,
    }
}, { timestamps: true });


// Export model
module.exports = mongoose.model("User", UserSchema);
