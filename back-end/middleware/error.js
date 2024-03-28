const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server Error ";


//wrong mongodb id error
if (error.name === "castError") {
    const message = 'Resources not found with this id..Invalid ${err.path}';
    err = new ErrorHandler(message, 400);
}

//Duplicate key error 
if (error.code === 11000) {
    const message = 'Duplicate key ${object.keys(err.keyValue)} Entered';
    err =new ErrorHandler(message, 400);
}

//wrong jwt error
if (err.name === "JsonWebTokenError") {
    const meessage = 'Your url is invalid please try again later';
    err = new ErrorHandler(meessage, 400); 
}

//jwt expired
if (err.name === "TokenEpiredError") {
    const message = 'Your url is expired please try again later!';
    err = new ErrorHandler(message,400);
}

res.status(err.statusCode).json ({
    success: false,
    meessage: err.message,
});
}