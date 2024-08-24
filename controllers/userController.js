import models from "../models/index.js";
import {
    sendErrorResponse,
    sendSuccessResponse,
    sendServerErrorResponse,
    sendNotFoundResponse,
} from "../utils/responseUtils.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../utils/messages.js";
export const createUser = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return sendErrorResponse(res, ERROR_MESSAGES.MISSING_NAME);
    }
    try {
        const user = await models.User.create({ name });
        return sendSuccessResponse(res, SUCCESS_MESSAGES.USER_CREATED, {
            user,
        });
    } catch (error) {
        return sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await models.User.findByPk(id);
        if (!user) {
            return sendNotFoundResponse(res, ERROR_MESSAGES.USER_NOT_FOUND);
        }
        return sendSuccessResponse(res, SUCCESS_MESSAGES.USER_FETCHED, {
            user,
        });
    } catch (error) {
        return sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};

export const listUsers = async (req, res) => {
    try {
        const users = await models.User.findAll();
        return sendSuccessResponse(res, SUCCESS_MESSAGES.USER_LIST, {
            users,
        });
    } catch (error) {
        sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};
