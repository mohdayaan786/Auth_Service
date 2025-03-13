const {statusCodes} = require('http-status-codes');
class AppErrors extends Error{
    constructor (
        name = 'AppError',
        statusCode = statusCodes.INTERNAL_SERVER_ERROR,
        message = 'Something went wrong',
        explanation = 'An unexpected error occurred'
    ){
        this.name = name;
        this.statusCode = statusCode;
        this.message = message;
        this.explanation = explanation;
    }
}

module.exports = AppErrors;
