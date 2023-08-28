// With God's Help
const jsonfile = require("jsonfile");

const jsonLoader = (file,dir) =>
  new Promise((resolve, reject) => {
    jsonfile.readFile(`${dir}/DAL/${file}`, (err, obj) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(obj);
    });
  });
const jsonWriter = (file, data,dir) => {
  console.log("in json writer");
  jsonfile
    .writeFile(`${dir}/DAL/${file}`, data, { spaces: 4 })
    .then((res) => {
      console.log("Write complete");
    })
    .catch((error) => console.error(error));
};
module.exports = { jsonLoader, jsonWriter };
