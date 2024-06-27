

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
}


module.exports = BaseResponse;
