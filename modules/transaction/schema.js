const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    email: {
        type: String,
        default: 'todo',
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


// Export module
module.exports = mongoose.model("Transaction", TransactionSchema);
