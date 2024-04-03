import express from "express";
import {
  createBranchController,
  getBranchesController,
  getBranchController,
  updateBranchController,
  deleteBranchController,
  agregateBranchController,
} from "../controllers/branch.controller";

const router = express.Router();

router.post("/", createBranchController);
router.get("/", getBranchesController);
router.get("/agregate", agregateBranchController);
router.get("/:id", getBranchController);
router.patch("/:id", updateBranchController);
router.delete("/:id", deleteBranchController);

export default router;
