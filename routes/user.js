import express from "express";
import { createUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/new", createUser);

export default router;
