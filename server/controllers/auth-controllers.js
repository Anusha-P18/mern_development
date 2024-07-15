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

// Login logic
const login = async(req, res) => {
    try {
        const { email, password} = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        // compare password
        const passwordExist = await bcrypt.compare(password, userExist.password);

        if (passwordExist) {
            res.status(200).json({ 
                message: "Login successfull",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            })
        } else {
            res.status(401).json({
                message: "Invalid email or password"
            })
        }

    }catch (err) {
        console.log(err);
    }
};


module.exports = { home, register, login };