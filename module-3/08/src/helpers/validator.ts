import { body } from "express-validator";

const createBranchValidator = [
  body("name").notEmpty().withMessage("Manager name is required"),
  body("branchName").notEmpty().withMessage("Branch name is required"),
  body("location").notEmpty().withMessage("Location is required"),
];

export { createBranchValidator };
