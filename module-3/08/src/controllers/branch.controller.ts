import { Request, Response, NextFunction } from "express";

import {
  agregateBranchAction,
  createBranchAction,
  deleteBranchAction,
  getBranchAction,
  getBranchesAction,
  updateBranchAction,
} from "../actions/branch.action";

const createBranchController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, branchName, location } = req.body;

    const data = await createBranchAction(name, branchName, location);

    res.status(200).json({
      message: "Create branch success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getBranchesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const filters = req.query;

    const data = await getBranchesAction(filters);

    res.status(200).json({
      message: "Get Branches Success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const getBranchController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getBranchAction(Number(id));

    res.status(200).json({
      message: "Get Branch success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const updateBranchController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const filters = req.body;

    const data = await updateBranchAction(Number(id), filters);

    res.status(200).json({
      message: "Update Branch Success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBranchController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const data = await deleteBranchAction(Number(id));

    res.status(200).json({
      message: "Delete Branch Success",
      data,
    });
  } catch (err) {
    next(err);
  }
};

const agregateBranchController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    await agregateBranchAction();

    res.status(200).json({
      message: "Aggregate success",
    });
  } catch (err) {
    next(err);
  }
};

export {
  createBranchController,
  getBranchesController,
  getBranchController,
  updateBranchController,
  deleteBranchController,
  agregateBranchController,
};
