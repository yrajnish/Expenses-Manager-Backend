const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: 'String',
        required: true,
    },
    image: {
        type: 'String',
        required: true,
    },
    createdBy: {

type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });


// Export model
module.exports = mongoose.model("Category", CategorySchema);