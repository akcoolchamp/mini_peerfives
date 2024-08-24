// Success Messages
const SUCCESS_MESSAGES = {
    USER_CREATED: "User created successfully.",
    USER_FETCHED: "User fetched successfully.",
    USER_LIST: "User list.",
    P5_SUCCESSFUL: "P5 transaction created successfully.",
    P5_REVERT_SUCCESSFUL: "P5 transaction reverted successfully.",
    P5_TRANSACTIONS: "P5 transactions",
    REWARDS: "Rewards",
};

// Error Messages
const ERROR_MESSAGES = {
    INVALID_INPUT: "Invalid input.",
    SERVER_ERROR: "Internal server error.",
    MISSING_NAME: "Name is required.",
    USER_NOT_FOUND: "User not found.",
    INSUFFICIENT_BALANCE: "Insufficient P5 balance.",
    INVALID_POINTS: "Invalid points.",
    INSUFFICIENT_BALANCE_RECEIVER:
        "Insufficient P5 balance in receiver's balance.",
};

// Export messages
export { SUCCESS_MESSAGES, ERROR_MESSAGES };
