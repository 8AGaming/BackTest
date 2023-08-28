// With God's Help
const jsonfile = require("../../helpers/jsonfile");
const bcrypt = require("../../helpers/bcrypt");

const users = [
  {
    id: 1,
    email: "aa@aa.com",
    password: "1234abcA",
    isAdmin: true,
  },
  {
    id: 2,
    email: "aa1@aa.com",
    password: "1234abcA",
    isAdmin: false,
  },
  {
    id: 3,
    email: "aa2@aa.com",
    password: "1234abcA",
    isAdmin: false,
  },
];

const getUsers = async () => {
  try {
    const loadedUsers = await jsonfile.jsonLoader("./users.json", "users");
    return Promise.resolve(loadedUsers);
  } catch {
    try {
      users.map((user) => (user.password = bcrypt.bcryptHash(user.password)));
      jsonfile.jsonWriter("./users.json", users, "users");
      return Promise.resolve(users);
    } catch (error) {
      Promise.reject(error.message);
    }
  }
};
const updateUsers = (users) => {
  jsonfile.jsonWriter("users.json", users, "users");
};
module.exports = { getUsers, updateUsers };
