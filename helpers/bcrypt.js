const bcrypt = require("bcrypt");

const bcryptHash = (data) => {
  return bcrypt.hashSync(data, 10);
};
const comparePassword = (password, encryptedPassword) => {
  return bcrypt.compareSync(password, encryptedPassword);
};

module.exports = { bcryptHash, comparePassword };
