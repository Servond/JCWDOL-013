import express from "express";
import {
  createUserController,
  getUsersController,
} from "../controllers/user.controller";
const router = express.Router();

router.get("/", getUsersController);
router.get("/:userId/accounts/:accountId");
router.post("/", createUserController);

export default router;
