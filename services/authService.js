const UserAuth = require('../models/userAuth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (data) => {
    const { user_name, password } = data
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new UserAuth({ user_name, password: hashedPassword })
    return await user.save()
}

exports.loginUser = async (data) => {
    const { user_name, password } = data;
    const user = await UserAuth.findOne({ user_name });
    if (!user) throw new Error('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ user_id: user._id }, 'secret_key', { expiresIn: '1h' });
    return token;
}