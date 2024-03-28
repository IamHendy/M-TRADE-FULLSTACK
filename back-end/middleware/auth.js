// middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");

module.exports = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(new ErrorHandler("Not authorized to access this route", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = await User.findById(decoded.id);

        if (!req.user) {
            return next(new ErrorHandler("User not found", 404));
        }

        next();
    } catch (error) {
        return next(new ErrorHandler("Not authorized to access this route", 401));
    }
};
S