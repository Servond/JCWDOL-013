import { Class } from "@prisma/client";
import { IClass } from "../interfaces/class.interface";

import { createClassQuery, getClassQuery } from "../queries/class.query";

const createClassAction = async (data: IClass): Promise<Class> => {
  try {
    const classes = await createClassQuery(data);

    return classes;
  } catch (err) {
    throw err;
  }
};

const getClassAction = async (id: number) => {
  try {
    const data = await getClassQuery(id);

    return data;
  } catch (err) {
    throw err;
  }
};

export { createClassAction, getClassAction };
