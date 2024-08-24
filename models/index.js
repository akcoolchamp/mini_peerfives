import { Sequelize } from "sequelize";
import UserModel from "./user.js";
import RewardHistoryModel from "./rewardHistory.js";
import dotenv from "dotenv";
const env = process.env.NODE_ENV || "dev";
dotenv.config({
    path: `./${env}.env`,
});
console.log(process.env);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false, // Disable logging
    }
);

const models = {
    User: UserModel(sequelize, Sequelize.DataTypes),
    RewardHistory: RewardHistoryModel(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { sequelize, Sequelize };
export default models;
