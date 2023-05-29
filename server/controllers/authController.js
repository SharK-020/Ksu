const jwtUtils = require('../utils/jwtUtils.js');
const User = require('../models/userSchema.js');

//not yet tested

exports.login = async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ "username": username });

        if (!user) {
            console.log(user)
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await user.validatePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwtUtils.createToken(user.id);
        res.json({ token });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};



exports.logout = (req, res) => {
    // Clear the JWT cookie
    res.clearCookie('jwt');
    res.send('Logged out');
};