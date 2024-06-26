import { PrismaClient } from "@prisma/client";
import { User } from "@prisma/client";
import { Auth } from "../interfaces/auth.interface";
import { transporter } from "../helpers/nodemailer";
import * as handlebars from "handlebars";
import path from "path";
import fs from "fs";
const prisma = new PrismaClient();

const registerQuery = async (
  data: User,
  pass: string,
  avatar: string
): Promise<User> => {
  try {
    const t = await prisma.$transaction(async (prisma) => {
      try {
        const user = await prisma.user.create({
          data: {
            username: data.username,
            email: data.email,
            password: pass,
            avatar,
          },
        });
        // const pathOldImage = path.join(__dirname, "../public", avatar)
        // fs.unlinkSync(pathOldImage);

        const templatePath = path.join(
          __dirname,
          "../templates",
          "registrationEmail.hbs"
        );
        const token = "asdasd";
        const urlVerify = `http://localhost:3000/verify?token=${token}`;
        const templateSource = fs.readFileSync(templatePath, "utf-8");

        const compiledTemplate = handlebars.compile(templateSource);
        const html = compiledTemplate({
          username: user.username,
          url: urlVerify,
        });

        await transporter.sendMail({
          from: "sender address",
          to: user.email,
          subject: "welcome to purwadhika",
          html,
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
