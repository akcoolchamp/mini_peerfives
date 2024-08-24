const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
    });

    User.associate = (models) => {
        // User can give P5 and Rewards
        User.hasMany(models.RewardHistory, {
            foreignKey: "givenBy",
            as: "sentP5",
        });

        // User can receive P5 and Rewards
        User.hasMany(models.RewardHistory, {
            foreignKey: "givenTo",
            as: "receivedP5",
        });
    };

    return User;
};

export default UserModel;
