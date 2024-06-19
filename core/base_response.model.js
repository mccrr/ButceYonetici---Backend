const { BadRequestError, NotFoundError, InternalServerError, UnauthorizedError, ForbiddenError } = require('../helper/customError');


class BaseResponse {
    constructor(success, data, error) {
        this.setSuccess(success);
        this.setData(data);
        this.setError(error);
    }

    setSuccess(success) {
        if (typeof success !== "boolean") {
            throw new Error("Success must be a boolean value");
        }
        this.success = success;
    }

    setData(data) {
        if (data !== null && typeof data !== "object") {
            throw new Error("Data must be either an object or null");
        }
        this.data = data;
    }

    setError(error) {
        if (error !== null && typeof error !== "string") {
            throw new Error("Error must be either a string or null");
        }
        this.error = error;
    }

    static success(data) {
        return new BaseResponse(true, data, null);
    }

    static error(message) {
        return new BaseResponse(false, null, message);
    }

    static BadRequestError(message) {
        throw new BadRequestError(message);
    }

    static NotFoundError(message) {
        throw new NotFoundError(message);
    }

    static InternalServerError(message) {
        throw new InternalServerError(message);
    }

    static UnauthorizedError(message) {
        throw new UnauthorizedError(message);
    }

    static ForbiddenError(message) {
        throw new ForbiddenError(message);
    }
}


module.exports = BaseResponse;
