import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";

const prisma = new PrismaClient();

const getUserByEmailOrUsernameQuery = async (
  email: string,
  username: string
): Promise<User | null> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            username: username,
          },
        ],
      },
    });

    return user;
  } catch (err) {
    throw err;
  }
};

export { getUserByEmailOrUsernameQuery };
