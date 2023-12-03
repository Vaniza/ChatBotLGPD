// src/controllers/authController.js

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

async function registerUser(req, res) {
  const { username, password } = req.body;
  const user = await userModel.findUserByUsername(username);

  if (user) {
    return res.status(409).send("Usuário já existe.");
  }

  const hashedPassword = await bcrypt.hash(password, 8);
  await userModel.createUser(username, hashedPassword);

  res.status(201).send("Usuário registrado com sucesso.");
}

async function loginUser(req, res) {
  const { username, password } = req.body;
  const user = await userModel.findUserByUsername(username);

  if (!user || !await bcrypt.compare(password, user.password)) {
    return res.status(401).send("Credenciais inválidas.");
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
  res.json({ token });
}

module.exports = {
  registerUser,
  loginUser
};
