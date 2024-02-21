// Promise

// const tryPromise = new Promise((resolve, reject) => {
//   //   let obj = {
//   //     name: {},
//   //   };
//   setTimeout(() => {
//     const success = false;
//     // const test = obj.name.school.class;
//     if (success) {
//       resolve("promise berhasil");
//     } else {
//       reject("data tidak ditemukan");
//     }
//   }, 2000);
// });

// tryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finally done"));

// // implementation

// const fetchData = async () => {
//   console.log("satu");
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         console.log(response.json());
//       return response.json();
//     })
//     .then((users) => {
//       console.log(users);
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("dua");
//     });

//   console.log("tiga");
// };

// fetchData();

// Without async await
// const WithoutAsyncAwait = () => {
//   console.log("satu without async await");
//   tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("dua finally done without async await"));
//   console.log("tiga without async await");
// };

// console.log("Without Async Await");
// WithoutAsyncAwait();

// // With async await
// const WithAsyncAwait = async () => {
//   console.log("satu with async await");
//   await tryPromise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("dua finally done with async await"));
//   console.log("tiga with async await");
// };

// console.log("With Async Await");
// WithAsyncAwait();

// // Implementation async await

const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(res.json());
    const users = await res.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

getData();
