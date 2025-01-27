const app = require("./app");
const dotenv = require("dotenv");
const { sql, testConnection } = require("./dbConnection");

dotenv.config();
const port = process.env.PORT;

(async () => {
  try {
    await testConnection();

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

  process.on("SIGINT", async () => {
    console.log("Closing database connection ...");
    await sql.end();
    process.exit(0);
  });
})();
