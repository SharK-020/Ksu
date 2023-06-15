const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

exports.createToken = (userId) => {
    const token = jwt.sign({ id: userId }, secret);
    return token;
};

exports.verifyToken = (token) => {
    const payload = jwt.verify(token, secret);
    return payload.id;
}; 