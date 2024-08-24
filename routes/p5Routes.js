import express from "express";
import {
    createP5Transaction,
    deleteP5Transaction,
} from "../controllers/p5Controller.js";

const router = express.Router();
router.post("/:id/rewards/new", createP5Transaction);
router.delete("/rewards", deleteP5Transaction);

export default router;
