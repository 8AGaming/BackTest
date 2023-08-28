// With God's Help
const userServices = require("../services/userServices");
const bcrypt = require("../../helpers/bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    const body = req.body;
    const email = body.email;
    const password = body.password;
    const user = userServices.findUser(users, email, password);
    if (user.isAdmin) {
      res.send(users);
      userServices.updateUsers(users);
    } else {
      res.send("Your are not admin! Only admin can view users details.");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const logIn = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    const body = req.body;
    const email = body.email;
    const password = body.password;
    const user = userServices.findUser(users, email, password);
    res.send("Successfully Logged In!");
    userServices.updateUsers(users);
  } catch (error) {
    res.status(401).send(error.message);
  }
};
const signUp = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    body = req.body;
    body.id = users.length + 1;
    body.password = bcrypt.bcryptHash(body.password);
    console.log(body);
    users.push(body);
    res.send("Successfully Signed Up!");
    userServices.updateUsers(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
// const getUserById = async (req, res) => {
//   const users = await userServices.getUsers();
//   const id = req.params.id;
//   const body = req.body;
//   const email = body.email;
//   const password = body.password;
//   const user = getUserById(users, id);
//   if ((user.email === email && email.password === password) || body.isAdmin) {
//     res.send(user);
//   }
// };
module.exports = { getUsers, logIn, signUp };
