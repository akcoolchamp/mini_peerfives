import express from "express";
import {
    createUser,
    getUser,
    listUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", listUsers);

router.post("/new", createUser);

router.get("/:id", getUser);

export default router;
