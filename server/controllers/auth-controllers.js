const User = require("../models/user-model");
const bcrypt = require("bcrypt"); 
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

        // hash the password
        const saltRound = 10;
        const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password: hash_password })

        res.status(200).json({ message: userCreated})
    }catch (err) {
        res.status(500).send({msg: "Internal server error"})
    }
};

module.exports = { home, register };