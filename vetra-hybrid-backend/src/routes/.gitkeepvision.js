import express from "express";
import { analyzeImage } from "../controllers/visionController.js";

const router = express.Router();

router.post("/analyze", analyzeImage);

export default router;
