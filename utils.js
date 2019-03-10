const fs = require('fs'); 

// creating a function to read files
const readJsonFile = (fileName) => {
    let contents = fs.readFileSync(fileName);
    return JSON.parse(contents);
};
// creating a function to write json files
const writeJsonFile = (fileName,data) => {
    let json = JSON.stringify(data, null, 2);    
    fs.writeFileSync(fileName, json);
};
// Creating a function to do get today's date
const getDate = () => {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return today.toString()
}
module.exports  = { 
    readJsonFile : readJsonFile,
    writeJsonFile : writeJsonFile,
    getDate : getDate
    
};
