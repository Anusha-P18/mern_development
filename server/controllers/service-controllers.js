const Service = require("../models/service-model");

const allServices = async (req, res) => {
    try{
        const response = await Service.find();
        
        if(!response){
            res.status(404).json({msg: "No Service found"});
        }
        res.status(200).json({ msg: response });
    } catch (err) {
        res.status(500).send({msg: "Services not found", err});
    }
}

module.exports = allServices;