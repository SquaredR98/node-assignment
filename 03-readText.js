const fs = require('fs');

const readFile = (fileName) => {
  return fs.readFileSync(fileName).toString();
}

const returnNumOfWords = (data) => {
  return data.split(' ').length;
}

const readAndReturnResponse = () => {
  const fileName = process.argv[2];

  const fileData = readFile(fileName);

  const numOfWords = returnNumOfWords(fileData);

  console.log(numOfWords);
  return numOfWords;
}

readAndReturnResponse();