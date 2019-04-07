const fs = require("fs");
// const book = {
//   title: "Ego is the Enemy",
//   author: "Rayn Holiday"
// };

// const bookJSON = JSON.stringify(book);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);

// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString(); // translate data read from json file
// const data = JSON.parse(dataJSON);
// console.log(data.title);
const readAndParse = () => {
  const dataBuffer = fs.readFileSync("1-json.json");
  const jsonString = dataBuffer.toString();
  const data = JSON.parse(jsonString);

  return data;
};

const data = readAndParse();

const myInfo = { ...data, name: "Roben", age: 39 };
const newString = JSON.stringify(myInfo);
fs.writeFileSync("1-json.json", newString);

const newData = readAndParse();

console.log(newData);
