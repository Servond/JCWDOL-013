export async function logicUsersGetService(name: string) {
  try {
    if (name == "Budi") {
      return "Nama kamu budi";
    } else {
      return "Nama kamu bukan budi";
    }
  } catch (err) {
    throw err;
  }
}
