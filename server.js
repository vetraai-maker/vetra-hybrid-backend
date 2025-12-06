import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import aiRoutes from "./routes/ai.js";
import chatRoutes from "./routes/chat.js";
import fileRoutes from "./routes/files.js";
import visionRoutes from "./routes/vision.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/vision", visionRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Vetra Hybrid AI Backend Running Successfully!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Vetra AI Backend running on port ${PORT}`);
});
