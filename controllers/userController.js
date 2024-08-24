import models from "../models/index.js";

export const createUser = async (req, res) => {
    try {
        const user = await models.User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
