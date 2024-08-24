import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const RewardHistory = sequelize.define(
    "RewardHistory",
    {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        givenBy: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        givenTo: {
            type: DataTypes.UUID,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

RewardHistory.associate = (models) => {
    RewardHistory.belongsTo(models.User, {
        foreignKey: "givenBy",
        as: "giver",
    });
    RewardHistory.belongsTo(models.User, {
        foreignKey: "givenTo",
        as: "receiver",
    });
};

export default RewardHistory;
