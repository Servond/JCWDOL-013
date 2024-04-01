import express from "express";
import {
  createBranchController,
  getBranchesController,
  getBranchController,
  updateBranchController,
  deleteBranchController,
} from "../controllers/branch.controller";

const router = express.Router();

router.post("/", createBranchController);
router.get("/", getBranchesController);
router.get("/:id", getBranchController);
router.patch("/:id", updateBranchController);
router.delete("/:id", deleteBranchController);

export default router;
