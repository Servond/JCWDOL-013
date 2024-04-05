import express from "express";
import {
  createBranchController,
  getBranchesController,
  getBranchController,
  updateBranchController,
  deleteBranchController,
  agregateBranchController,
} from "../controllers/branch.controller";
import { adminGuard, verifyToken } from "../middlewares/auth.middleware";
import { createBranchValidator } from "../helpers/validator";
import dataValidation from "../middlewares/validator.middleware";
const router = express.Router();

router.post(
  "/",
  verifyToken,
  adminGuard,
  createBranchValidator,
  dataValidation,
  createBranchController
);
router.get("/", verifyToken, getBranchesController);
router.get("/agregate", agregateBranchController);
router.get("/:id", getBranchController);
router.patch("/:id", updateBranchController);
router.delete("/:id", deleteBranchController);

export default router;
