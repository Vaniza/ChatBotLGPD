// src/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer Token
    if (!token) {
        return res.status(403).send('Acesso negado.');
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send('Token inválido.');
    }
    next();
}

module.exports = verifyToken;
