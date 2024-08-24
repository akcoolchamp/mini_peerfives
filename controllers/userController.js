import models from "../models/index.js";
import {
    sendErrorResponse,
    sendSuccessResponse,
    sendServerErrorResponse,
} from "../utils/responseUtils.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../utils/messages.js";
export const createUser = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return sendErrorResponse(res, ERROR_MESSAGES.MISSING_NAME);
    }

    try {
        const user = await models.User.create({ name });
        sendSuccessResponse(res, SUCCESS_MESSAGES.USER_CREATED, { user });
    } catch (error) {
        sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};
