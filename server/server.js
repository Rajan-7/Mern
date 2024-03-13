require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const connectDb = require("./utils/db");
const authRoute = require("./router/auth-router");
const adminRoute = require("./router/admin-router");
const serviceRoute = require("./controller/service-controller")
const contactRoute = require("./router/contact-router");
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

// admin router
app.use("/api/admin", adminRoute);


app.use(errorMiddleware);

const PORT = 5007;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running in ${PORT}`);
  });
});
