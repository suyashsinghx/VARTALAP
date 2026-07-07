import express from "express";

import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

//we use this endpoint "/check" to check the authenticity of the user
router.get("/check", protectRoute , checkAuth);

export default router;