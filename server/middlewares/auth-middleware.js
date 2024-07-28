const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async(req, res, next) => {
    const token = req.header("Authorization");
    console.log(token);
    if (!token) {
        // If you attempt to use an expired token, you'll receive a "401 Unauthorized HTTP" response
        return res.status(401).json({ msg: "Unauthorized HTTP, Token not provided" });
    }

    // Assuming token is in the format "Bearer <jwtToken>", remove "Bearer " prefix

    // two methods to remove initial Bearer and space
    // method 1 ->
    // const jwtToken = token.replace("Bearer ", "");
    // method 2 -> using trim (removes space from start and end of token)
    const jwtToken = token.replace("Bearer", "").trim();

    try{
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        const userData = await User.findOne({ email: isVerified.email }).
        select({
            password: 0,
        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;

        next();
    } catch (err) {
        return res.status(401).json({ msg: "Unauthorized HTTP, Token not provided" });
    }
};

module.exports = authMiddleware;