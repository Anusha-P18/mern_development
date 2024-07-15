const User = require("../models/user-model");

// Home Logic
const home = async(req, res) => {
    try {
        res.status(200).send('welcome to main page using controllers');
    }catch (err) {
        console.log(err);
    }
};

// register logic 
const register = async(req, res) => {
    try {
        console.log(req.body);
        const { username, email, phone, password} = req.body;

        const userExist = await User.findOne({ email })

        if( userExist ){
            return res.status(400).json({ msg: "email already exixts"})
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(201).json({ 
            message: "Registration successfull",
            userDetails: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
    }catch (err) {
        res.status(500).send({msg: "Internal server error"})
    }
};

module.exports = { home, register };