const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    foundedOn: {
        type: Date,
    },
    image: {
        type: String,
        required: true,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review' // Reference to the Review model
    }]
});

module.exports = mongoose.model('Company', companySchema);
