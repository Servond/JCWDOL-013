import express from "express";
import {
  createClassController,
  getClassController,
} from "../controllers/class.controller";

const router = express.Router();

router.post("/", createClassController);
router.get("/:id", getClassController);

export default router;
