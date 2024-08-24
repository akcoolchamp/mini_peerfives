import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import userRoutes from "./routes/user.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.use("/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log("Database connected!");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
