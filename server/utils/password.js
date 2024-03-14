const bcrypt = require("bcrypt");

const generateRandomPassword = () => {
  return Math.random().toString(36).slice(-8);
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const comparePassword = async (password, passwordHash) => {
  return await bcrypt.compare(password, passwordHash);
};

module.exports = {
  generateRandomPassword,
  hashPassword,
  comparePassword,
};
