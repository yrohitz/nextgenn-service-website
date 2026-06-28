import { Router } from "express";
import { CallbackController } from "../controllers/callback.controller";
import { verifyToken } from "../middleware/auth.middleware";

const router = Router();

/*
==============================
Callback APIs
==============================
*/

// Create Callback
router.post("/", CallbackController.create);

// Get All Callback Requests
router.get("/", verifyToken, CallbackController.getAll);

// Get Single Callback
router.get("/:id", verifyToken, CallbackController.getById);

// Update Callback Status
router.patch("/:id", verifyToken, CallbackController.updateStatus);

// Delete Callback
router.delete("/:id", verifyToken, CallbackController.delete);

export default router;