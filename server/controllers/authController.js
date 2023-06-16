const jwtUtils = require('../utils/jwtUtils.js');
const User = require('../models/userSchema.js')
const bcrypt = require('bcrypt');
//not yet tested

exports.login = async (req, res) => {

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ "username": username });

        if (!user) {
            console.log(user)
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user)
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

exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const userExists = await User.findOne({ username });
        if (userExists) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create a new user object
        const newUser = new User({ username, password });

        // Save the new user to the database
        const newuser = await newUser.save();
        console.log(newuser)
        // Return a success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        // Handle any errors

        res.status(500).json({ error: error.message });
    }
};