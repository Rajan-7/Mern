require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router");
const serviceRoute = require("./controller/service-controller")
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

// Handling cors
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET, POST, PUT, PATCH, HEAD, DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

// middlewares
app.use(express.json());

// Mount the Routers
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);


app.use(errorMiddleware);

const PORT = 5007;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
  });
});
