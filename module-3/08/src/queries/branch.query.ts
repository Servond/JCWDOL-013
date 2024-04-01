import { PrismaClient } from "@prisma/client";
import { Branch } from "@prisma/client";

const prisma = new PrismaClient();

const createBranchQuery = async (
  branchName: string,
  location: string
): Promise<Branch> => {
  try {
    const branch = await prisma.branch.create({
      data: {
        branchName,
        location,
      },
    });

    return branch;
  } catch (err) {
    throw err;
  }
};

const getBranchesQuery = async (filters: {
  branchName?: string;
  location?: string;
  page?: number;
  pageSize?: number;
}): Promise<Branch[]> => {
  try {
    const { branchName, location, page, pageSize } = filters;
    const skipPage =
      Number(page) > 1 ? (Number(page) - 1) * Number(pageSize) : 0;
    console.log(branchName);
    const branches = await prisma.branch.findMany({
      skip: skipPage,
      take: Number(pageSize),
      where: {
        branchName: {
          contains: branchName,
        },
        // ...filters,
        // AND: [
        //   {
        //     branchName: {
        //       contains: branchName,
        //     },
        //   },
        //   {
        //     location: {
        //       contains: location,
        //     },
        //   },
        // ],
      },
    });
    // select * from branch where branchName like '%bt%' or location like '%ta%'

    return branches;
  } catch (err) {
    throw err;
  }
};

const getBranchQuery = async (id: number): Promise<Branch | null> => {
  try {
    const branch = await prisma.branch.findUnique({
      where: {
        id,
      },
    });

    return branch;
  } catch (err) {
    throw err;
  }
};

const updateBranchQuery = async (
  id: number,
  filters: {
    branchName?: string;
    location?: string;
  }
): Promise<Branch> => {
  try {
    const branch = await prisma.branch.update({
      where: { id },
      data: {
        ...filters,
      },
    });

    return branch;
  } catch (err) {
    throw err;
  }
};

const deleteBranchQuery = async (id: number): Promise<Branch> => {
  try {
    const branch = await prisma.branch.delete({
      where: { id },
    });
    // delete from branch where id = 2

    return branch;
  } catch (err) {
    throw err;
  }
};

export {
  createBranchQuery,
  getBranchesQuery,
  getBranchQuery,
  updateBranchQuery,
  deleteBranchQuery,
};
