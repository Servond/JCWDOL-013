import { User } from "@prisma/client";
import { Auth } from "../interfaces/auth.interface";
import { getUserByEmailOrUsernameQuery } from "../queries/user.query";
import { loginQuery, registerQuery } from "../queries/auth.query";
import { HttpException } from "../exceptions/HttpException";

const registerAction = async (data: User): Promise<User> => {
  try {
    const check = await getUserByEmailOrUsernameQuery(
      data.email,
      data.username
    );

    if (check) throw new Error("user already exist");

    const user = await registerQuery(data);

    return user;
  } catch (err) {
    throw err;
  }
};

const loginAction = async (data: Auth) => {
  try {
    const user = await loginQuery(data);

    if (!user) throw new Error("Password or Email incorrect");

    return user;
  } catch (err) {
    throw err;
  }
};

export { registerAction, loginAction };
