const db = require("../config/dbConfig");

async function findUserByUsername(username) {
  const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
    username
  ]);
  return rows[0];
}

async function createUser(username, hashedPassword) {
  const [
    result
  ] = await db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    hashedPassword
  ]);
  return result.insertId;
}

module.exports = {
  findUserByUsername,
  createUser
};
