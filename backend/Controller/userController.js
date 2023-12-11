const user = require("../Model/userModel");
const bcrypt = require("bcrypt");

//for registering user//

exports.userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const register = await user.create({
      name,
      email,
      password,
    });
    return res.status(200).json({
      message: "user registerd sucessfully",
      register,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//for login the user//
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user based on the provided email entere by user
    const foundUser = await user.findOne({ email: email });

    if (!foundUser) {
      return res
        .status(401)
        .json({ success: false, message: "User not found" });
    }

    // Compare the entered password with the stored hashed password
    const isPasswordMatch = await foundUser.comparePassword(password);

    if (!isPasswordMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password" });
    }

    // If the password is correct then generate a token here
    const token = foundUser.getToken();

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: foundUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
