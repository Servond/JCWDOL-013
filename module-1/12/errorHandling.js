// with throw
// const tryThrow = () => {
//   try {
//     let isFalse = true;
//     if (isFalse) {
//       throw "there is an error";
//     }
//     console.log("success");
//   } catch (err) {
//     console.log(err);
//   }
// };

// tryThrow();

// const login = (username, password) => {
//   try {
//     if (!username || !password) throw "Username dan password wajib diisi";

//     // if (!password) throw i";

//     console.log("Login Berhasil");
//   } catch (err) {
//     console.log(err);
//   }
// };

// login("asd", "asd");

// with throw new

const tryThrowNew = () => {
  try {
    let isFalse = true;
    if (isFalse) {
      throw new Error("there is an error");
    }
    console.log("success");
  } catch (err) {
    console.log(err);
  }
};

tryThrowNew();
