const jwt = require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.JWT_SECRET;

exports.createToken = (userId) => {
    const token = jwt.sign({ id: userId }, secret);
    return token;
};

exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization; // Retrieve the token from the 'Authorization' header
    if (!token) {
        return res.status(401).json({ error: "Missing token" });
    }

    try {
        const payload = jwt.verify(token, secret);
        req.userId = payload.id; // Attach the user ID to the request object for further use
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
};