const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    isAdmin: {
        type: Boolean,
        require: false,
    }
});

// secure the password with bcrypt -> its a middleware which runs before saving the data in db
userSchema.pre('save', async function() {
    console.log("pre method", this);
    const user = this;

    // if password is already there and bcrypted/secured
    if (!user.isModified("password")) {
        next();
    }

    // if user is creating new password
    try {
        // const saltRound = 10;
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;
    } catch (err) {
        next(err);
    }
})

// Define the model or collection name
const User = new mongoose.model("User", userSchema);

module.exports = User;