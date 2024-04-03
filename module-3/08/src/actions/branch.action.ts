import { Branch } from "@prisma/client";
import {
  agregateBranchQuery,
  createBranchQuery,
  deleteBranchQuery,
  getBranchQuery,
  getBranchesQuery,
  updateBranchQuery,
  getBranchByNameQuery,
} from "../queries/branch.query";
import { HttpException } from "../exceptions/HttpException";

const createBranchAction = async (
  name: string,
  branchName: string,
  location: string
): Promise<Branch> => {
  try {
    const check = await getBranchByNameQuery(branchName);

    if (check) throw new Error("Branch name already exist");

    const branch = await createBranchQuery(name, branchName, location);

    return branch;
  } catch (err) {
    throw err;
  }
};

const getBranchesAction = async (filters: {
  branchName?: string;
  location?: string;
}): Promise<Branch[]> => {
  try {
    const branches = await getBranchesQuery(filters);

    return branches;
  } catch (err) {
    throw err;
  }
};

const getBranchAction = async (id: number): Promise<Branch | null> => {
  try {
    const branch = await getBranchQuery(id);

    if (!branch) throw new HttpException(404, "Data Not Found");

    return branch;
  } catch (err) {
    throw err;
  }
};

const updateBranchAction = async (
  id: number,
  filters: {
    branchName?: string;
    location?: string;
  }
): Promise<Branch> => {
  try {
    const branch = await updateBranchQuery(id, filters);

    return branch;
  } catch (err) {
    throw err;
  }
};

const deleteBranchAction = async (id: number): Promise<Branch> => {
  try {
    const branch = await deleteBranchQuery(id);

    return branch;
  } catch (err) {
    throw err;
  }
};

const agregateBranchAction = async (): Promise<void> => {
  try {
    await agregateBranchQuery();
  } catch (err) {
    throw err;
  }
};
export {
  createBranchAction,
  getBranchesAction,
  getBranchAction,
  updateBranchAction,
  deleteBranchAction,
  agregateBranchAction,
};
