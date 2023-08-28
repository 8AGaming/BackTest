// With God's Help
const userDal = require("../DAL/userDal");
const bcrypt = require("../../helpers/bcrypt");

const getUsers = async () => {
  try {
    const users = userDal.getUsers();
    return Promise.resolve(users);
  } catch (error) {
    return Promise.reject(error.message);
  }
};
const findUser = (users, email, password) => {
  const user = users.find(
    (user) =>
      user.email === email &&
      (user.password === password ||
        bcrypt.comparePassword(password, user.password))
  );
  console.log(user);
  if (!user) {
    throw new Error(
      "Your email or your password is incorrect. Please try again. "
    );
  } else {
    return user;
  }
};
const updateUsers = (users) => {
  userDal.updateUsers(users);
};
const getUserById = (users, id) => {
  const user = users.find((user) => user.id == id);
  return user;
};
module.exports = { getUsers, findUser, updateUsers, getUserById };
