import { PrismaClient } from "@prisma/client";
import { Branch } from "@prisma/client";

const prisma = new PrismaClient();

const createBranchQuery = async (
  name: string,
  branchName: string,
  location: string
): Promise<Branch> => {
  try {
    const t = await prisma.$transaction(async (prisma) => {
      try {
        const manager = await prisma.manager.create({
          data: {
            name,
          },
        });

        const branch = await prisma.branch.create({
          data: {
            branchName,
            location,
            managerId: manager?.id,
          },
        });

        return branch;
      } catch (err) {
        throw err;
      }
    });

    return t;

    // return branch;
  } catch (err) {
    throw err;
  }
};

const getBranchByNameQuery = async (name: string): Promise<Branch | null> => {
  try {
    const branch = await prisma.branch.findFirst({
      where: { branchName: name },
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

const agregateBranchQuery = async (): Promise<void> => {
  try {
    const branch = await prisma.branch.aggregate({
      _count: {
        _all: true,
      },
      _min: {
        createdAt: true,
      },
      _max: {
        createdAt: true,
      },
    });

    console.log(branch);
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
  getBranchByNameQuery,
  agregateBranchQuery,
};
