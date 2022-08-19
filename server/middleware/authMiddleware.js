const User = require("../models/user");
const jwt = require("jsonwebtoken");
const handleAsync = require("express-async-handler");

exports.needsAuth = handleAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const { id } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(id).select("-password`");
      if (!user) {
        throw new Error("Not authorized");
      }
      req.user = user;
      next();
    } catch (error) {
      throw new Error("Not authorized");
    }
  }

  if (!token) {
    throw new Error("No token provided.");
  }
});
