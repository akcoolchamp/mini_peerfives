import models, { sequelize } from "../models/index.js";
import {
    sendErrorResponse,
    sendSuccessResponse,
    sendServerErrorResponse,
    sendNotFoundResponse,
} from "../utils/responseUtils.js";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../utils/messages.js";
// Create a new P5 transaction
export const createP5Transaction = async (req, res) => {
    const { id: givenBy } = req.params;
    const { givenTo, points } = req.body;
    if (!givenBy && !givenTo && !points) {
        return sendErrorResponse(res, ERROR_MESSAGES.INVALID_INPUT);
    }
    if (points <= 0 || points > 100) {
        return sendErrorResponse(res, ERROR_MESSAGES.INVALID_POINTS);
    }
    const transaction = await sequelize.transaction();

    try {
        const giver = await models.User.findByPk(givenBy, { transaction });
        const receiver = await models.User.findByPk(givenTo, { transaction });

        if (!giver || !receiver) {
            await transaction.rollback();
            return sendNotFoundResponse(res, ERROR_MESSAGES.USER_NOT_FOUND);
        }

        if (giver.p5Balance < points) {
            await transaction.rollback();
            return sendErrorResponse(res, ERROR_MESSAGES.INSUFFICIENT_BALANCE);
        }

        await models.RewardHistory.create(
            { givenBy, givenTo, points },
            { transaction }
        );

        giver.p5Balance -= points;
        receiver.rewardBalance += points;

        await giver.save({ transaction });
        await receiver.save({ transaction });

        await transaction.commit();

        return sendSuccessResponse(res, SUCCESS_MESSAGES.P5_SUCCESSFUL, {
            giver,
            receiver,
        });
    } catch (error) {
        await transaction.rollback();
        return sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};

export const deleteP5Transaction = async (req, res) => {
    const { id, transactionId } = req.body;
    console.log(req.body);
    if (!id || !transactionId) {
        return sendNotFoundResponse(res, ERROR_MESSAGES.INVALID_INPUT);
    }
    const transaction = await sequelize.transaction();
    try {
        const user = await models.User.findByPk(id);
        const rewards = await models.RewardHistory.findByPk(transactionId);

        if (!user || !transaction) {
            return sendNotFoundResponse(res, ERROR_MESSAGES.NOT_FOUND);
        }

        // Get the giver and receiver
        const giver = await models.User.findByPk(rewards.givenBy);
        const receiver = await models.User.findByPk(rewards.givenTo);

        if (!giver || !receiver) {
            return sendNotFoundResponse(res, ERROR_MESSAGES.USER_NOT_FOUND);
        }

        // Start a transaction to ensure atomicity
        await rewards.destroy({ transaction });

        // Revert the P5 balance
        giver.p5Balance += rewards.points;
        receiver.rewardBalance -= rewards.points;

        await giver.save({ transaction });
        await receiver.save({ transaction });
        await transaction.commit();
        return sendSuccessResponse(res, SUCCESS_MESSAGES.P5_REVERT_SUCCESSFUL);
    } catch (error) {
        await transaction.rollback();
        console.log(error);
        sendServerErrorResponse(res, ERROR_MESSAGES.SERVER_ERROR);
    }
};
