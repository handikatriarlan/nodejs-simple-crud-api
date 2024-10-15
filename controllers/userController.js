const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(result);
    });
};

exports.createUser = (req, res) => {
    const newUser = req.body;
    User.createUser(newUser, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ id: result.insertId, ...newUser });
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedData = {
        name: req.query.name,
        email: req.query.email
    };

    User.updateUser(userId, updatedData, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'User updated', ...updatedData });
    });
};


exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'User deleted' });
    });
};
