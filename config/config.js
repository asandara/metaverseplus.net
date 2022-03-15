// import promise from "bluebird"; // or any other Promise/A+ compatible library;
// import pgPromise from "pg-promise";
// const initOptions = {
//   promiseLib: promise, // overriding the default (ES6 Promise);
// };
// const pgp = pgPromise(initOptions);
// // Database connection details;
// const cn = {
//   maxUses: 10000,
//   max: 90,
//   idleTimeoutMillis: 10000,
//   allowExitOnIdle: true,

//   host: "localhost",
//   port: 5432,
//   database: "company",
//   user: "postgres",
//   password: "1a2a3a4a5a",
// };
// // You can check for all default values in:
// // https://github.com/brianc/node-postgres/blob/master/packages/pg/lib/defaults.js
// const db = pgp(cn); // database instance;

// export { db };
