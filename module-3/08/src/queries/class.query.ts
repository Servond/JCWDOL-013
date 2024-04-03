import { PrismaClient } from "@prisma/client";
import { IClass } from "../interfaces/class.interface";
const prisma = new PrismaClient();

const createClassQuery = async (data: IClass) => {
  try {
    const { branchId, name, startAt, endAt } = data;
    const classes = await prisma.class.create({
      data: {
        branchId: Number(branchId),
        name,
        startAt: new Date(startAt),
        endAt: new Date(endAt),
      },
    });

    return classes;
  } catch (err) {
    throw err;
  }
};

const getClassQuery = async (id: number) => {
  try {
    const classes = await prisma.class.findUnique({
      select: {
        name: true,
        startAt: true,
        endAt: true,
        branch: {
          select: {
            branchName: true,
            location: true,
            manager: {
              select: {
                name: true,
              },
            },
          },
        },
        MapStudentClass: {
          select: {
            student: {
              select: {
                username: true,
                email: true,
                isGraduated: true,
              },
            },
          },
        },
      },
      where: {
        id,
      },
      //   select: {
      //     name: true,
      //   },
      //   where: { id },
      //   include: {
      //     branch: true,
      //   },
    });

    return classes;
  } catch (err) {
    throw err;
  }
};

export { createClassQuery, getClassQuery };
