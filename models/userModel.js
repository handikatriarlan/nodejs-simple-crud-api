const db = require('../config/db');

const User = {
    getAllUsers: (callback) => {
        db.query('SELECT * FROM users', callback);
    },
    getUserById: (id, callback) => {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    },
    createUser: (data, callback) => {
        db.query('INSERT INTO users SET ?', data, callback);
    },
    updateUser: (id, data, callback) => {
        db.query('UPDATE users SET ? WHERE id = ?', [data, id], callback);
    },
    deleteUser: (id, callback) => {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
};

module.exports = User;
