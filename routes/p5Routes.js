import express from "express";
import {
    createP5Transaction,
    deleteP5Transaction,
    getP5Transactions,
    getRewards,
} from "../controllers/p5Controller.js";

const router = express.Router();
router.post("/:id/rewards/new", createP5Transaction);
router.delete("/rewards", deleteP5Transaction);
router.get("/:id/p5", getP5Transactions);
router.get("/:id/rewards", getRewards);

export default router;
