import { prismaMock } from "../setup-test/singleton";
import { getUser } from "../setup-test/function";

test("should return an array of users", async () => {
  prismaMock.user.findMany.mockResolvedValue([
    {
      id: 1,
      firstName: "john",
      lastName: "doe",
      email: "john.doe@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: "jane",
      lastName: "smith",
      email: "jane.smith@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await expect(getUser()).resolves.toMatchObject([
    { firstName: "john", lastName: "doe", email: "john.doe@gmail.com" },
    { firstName: "jane", lastName: "smith", email: "jane.smith@gmail.com" },
  ]);
});
