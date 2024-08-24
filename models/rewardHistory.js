const RewardHistoryModel = (sequelize, DataTypes) => {
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
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            givenTo: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            timestamps: true, // Enable createdAt and updatedAt fields
        }
    );

    RewardHistory.associate = (models) => {
        // RewardHistory belongs to a giver
        RewardHistory.belongsTo(models.User, {
            foreignKey: "givenBy",
            as: "giver",
        });

        // RewardHistory belongs to a receiver
        RewardHistory.belongsTo(models.User, {
            foreignKey: "givenTo",
            as: "receiver",
        });
    };

    return RewardHistory;
};

export default RewardHistoryModel;
