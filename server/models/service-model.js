const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
    service: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    provider: {
        type: String,
        require: true,
    },
});

// create a model for service -> in db collection name is services hence give m=name as service while creating model
const Service = new model("service", serviceSchema);

module.exports = Service;