const jwt = require('jsonwebtoken');
const config = require('config');
const { json } = require('express');

module.exports = function (req, res, next) {
	//Get token from header
	const token = req.header('x-auth-token');

	//Check if not token
	if (!token) {
		return res.status(401).json({ msg: 'No token, autherization denied' });
	}

	//Verify token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));

		req.user = decoded.user;
		next();
	} catch (error) {
		res.status(401), json({ msg: 'Token is not valid' });
	}
};
