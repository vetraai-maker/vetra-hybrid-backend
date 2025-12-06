import express from "express";
import { chatWithMemory } from "../controllers/chatController.js";

const router = express.Router();

router.post("/message", chatWithMemory);

export default router;
