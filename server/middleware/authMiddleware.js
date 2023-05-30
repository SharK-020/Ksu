/* import jwtUtils from '../utils/jwtUtils.js';
import User from '../models/userSchema.js';

module.exports = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  try {
    const userId = jwtUtils.verifyToken(token);
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Invalid token' });
  }
}; */