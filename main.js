require("dotenv").config();
const userRoutes = require("./server/routes/user");
const connectToMongo = require("./server/util/connectToMongo");

const app = connectToMongo();

app.use("/api/user", userRoutes);
