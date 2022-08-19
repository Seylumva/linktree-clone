const {
  loginUser,
  registerUser,
  getUserData,
  updateUserSocials,
  updateUserBasicInfo,
} = require("../controllers/user");
const { needsAuth } = require("../middleware/authMiddleware");

const userRoutes = require("express").Router();

userRoutes.post("/login", loginUser);
userRoutes.post("/register", registerUser);
userRoutes.get("/:username", getUserData);
userRoutes.put("/:id/profile", needsAuth, updateUserSocials);
userRoutes.put("/:id", needsAuth, updateUserBasicInfo);

module.exports = userRoutes;
