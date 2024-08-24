import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        p5Balance: {
            type: DataTypes.INTEGER,
            defaultValue: 100,
        },
        rewardBalance: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        timestamps: true,
    }
);

User.associate = (models) => {
    User.hasMany(models.RewardHistory, {
        foreignKey: "givenBy",
        as: "givenRewards",
    });
    User.hasMany(models.RewardHistory, {
        foreignKey: "givenTo",
        as: "receivedRewards",
    });
};

export default User;
