import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";
import { Auth } from "../interfaces/auth.interface";

const prisma = new PrismaClient();

const registerQuery = async (data: User): Promise<User> => {
  try {
    const t = await prisma.$transaction(async (prisma) => {
      try {
        const user = await prisma.user.create({
          data: {
            ...data,
          },
        });
        return user;
      } catch (err) {
        throw err;
      }
    });
    return t;
  } catch (err) {
    throw err;
  }
};

const loginQuery = async (data: Auth) => {
  try {
    const user = await prisma.user.findUnique({
      select: {
        id: true,
        username: true,
        email: true,
        role: {
          select: {
            name: true,
          },
        },
      },
      where: { email: data.email, password: data.password },
    });

    return user;
  } catch (err) {
    throw err;
  }
};

export { registerQuery, loginQuery };
