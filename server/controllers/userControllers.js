const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        let user = new User({ name, email, password: hashedPassword });

        user = await user.save();

        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Registration failed',
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('Invalid Email');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).send('User Password or Email Does not match');
        }

        const secretKey = process.env.JWT_SECRET || 'your-secret-key';

        const token = jwt.sign({ id: user._id }, secretKey, { expiresIn: '2d' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Login failed',
            error: error.message,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const { userId } = req.params.userId
        const users = await User.findById({ _id: { $ne: userId } })
        res.json(users)
    } catch (error) {
        console.log('Error ', error)
    }

}

const sendRequest = async (req, res) => {
    const { senderId, receiverId, message } = req.body

    const receiver = await User.findById(receiverId)

    if (!receiver) {
        return res.status(404).send('User not found')
    }

    receiver.requests.push({ from: senderId, message })

    await receiver.save()

    res.status(200).send('Request send Successfully')
}

module.exports = {
    register,
    login,
    getUser,
    sendRequest
};