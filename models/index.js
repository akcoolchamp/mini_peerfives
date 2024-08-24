import { Sequelize } from "sequelize";
import UserModel from "./user.js";
import RewardHistoryModel from "./rewardHistory.js";
import dotenv from "dotenv";
// Get environment and configuration
const env = process.env.NODE_ENV || "dev";
dotenv.config({ path: `.${env}.env` });
// Initialize Sequelize
console.log(process.env);
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        ssl: true,
        logging: false, // Set to true to enable logging
    }
);

// Define models
const User = UserModel(sequelize, Sequelize.DataTypes);
const RewardHistory = RewardHistoryModel(sequelize, Sequelize.DataTypes);

// Set up model associations
User.associate({ RewardHistory });
RewardHistory.associate({ User });

const models = {
    User,
    RewardHistory,
};

export { sequelize, Sequelize };
export default models;
