const express = require("express");
const app = express();
const router = require("./router/auth-router");

const PORT = 5007;

// Middleware
app.use(express.json());
app.use("/api/auth", router);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
