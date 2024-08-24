export const sendSuccessResponse = (res, message, data = {}) => {
    res.status(200).json({
        message,
        ...data,
    });
};

export const sendErrorResponse = (res, message) => {
    res.status(400).json({
        error: message,
    });
};

export const sendNotFoundResponse = (res, message) => {
    res.status(404).json({
        error: message,
    });
};

export const sendServerErrorResponse = (res, message) => {
    res.status(500).json({
        error: message,
    });
};
