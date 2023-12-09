const User = require('./../../models/user-model');

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteUser = async (req, res) => {
    const userId = req.query.deleteId;

    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        res.status(201).json(deletedUser); 
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const findUserProfile = async (req, res) => {
    const userId = req.query.userId; 
    try {
        const searchUser = await User.findById(userId, { pfp: 1, username: 1, rating: 1 });
        res.status(200).json(searchUser);
    } catch (error) {
        console.error('Error finding user profile:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { findUserProfile, createUser, deleteUser };
