const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const handleAsync = require("express-async-handler");

/**
 * @desc Update user's basic details
 * @route PUT/api/user/:id
 * @access Private
 */
exports.updateUserBasicInfo = handleAsync(async (req, res) => {
  const { appearanceName } = req.body;
  const userToUpdate = await User.findByIdAndUpdate(
    req.user._id,
    { appearanceName },
    { new: true }
  );
  if (userToUpdate) {
    res.status(200).json({
      appearanceName: userToUpdate.appearanceName,
    });
  } else {
    throw new Error("Unable to update profile.");
  }
});

/**
 * @desc Update user's socials
 * @route PUT /api/user/:id/profile
 * @access Private
 */
exports.updateUserSocials = handleAsync(async (req, res) => {
  const {
    facebook,
    instagram,
    tiktok,
    patreon,
    youtube,
    snapchat,
    about,
    website,
  } = req.body;
  const userToUpdate = await User.findByIdAndUpdate(
    req.user._id,
    {
      socials: {
        facebook,
        instagram,
        tiktok,
        patreon,
        youtube,
        snapchat,
      },
      about,
      website,
    },
    { new: true }
  );

  if (userToUpdate) {
    res.status(200).json({
      socials: userToUpdate.socials,
      customLinks: userToUpdate.customLinks,
      about: userToUpdate.about,
    });
  } else {
    throw new Error("Unable to update profile.");
  }
});

/**
 * @desc Get user data
 * @route GET /api/user/:id
 * @access Public
 */
exports.getUserData = handleAsync(async (req, res) => {
  const { username } = req.params;
  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(200).json({
      username: userExists.username,
      about: userExists.about,
      socials: userExists.socials,
      customLinks: userExists.customLinks,
      website: userExists.website,
      appearanceName: userExists.appearanceName,
      avatarId: userExists.avatarId,
    });
  } else {
    throw new Error("No profile found.");
  }
});

/**
 * @desc Login user
 * @route POST /api/login
 * @access Public
 */
exports.loginUser = handleAsync(async (req, res) => {
  const { email, password } = req.body;

  const emailExists = await User.findOne({ email: email.toLowerCase() });
  if (!emailExists) {
    throw new Error("Invalid email or password.");
  }

  if (emailExists && bcrypt.compare(password, emailExists.password)) {
    res.status(200).json({
      username: emailExists.username,
      _id: emailExists._id,
      token: generateToken(emailExists._id),
    });
  } else {
    throw new Error("Invalid email or password.");
  }
});

/**
 * @desc Register user
 * @route POST /api/register
 * @access Public
 */
exports.registerUser = handleAsync(async (req, res) => {
  const { username, password, email } = req.body;

  const emailUsed = await User.findOne({ email: email.toLowerCase() });
  if (emailUsed) {
    throw new Error("Someone is already using that email.");
  }

  const usernameUsed = await User.findOne({ username: username.toLowerCase() });
  if (usernameUsed) {
    throw new Error("Someone is already using that username.");
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    res.status(200).json({
      username: newUser.username,
      _id: newUser._id,
      token: generateToken(newUser._id),
    });
  } else {
    throw new Error("Please try again later.");
  }
});

/**
 * @param {Text} id
 * @returns {Token} JSON web token for the client
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
