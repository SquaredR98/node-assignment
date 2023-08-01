const readline = require('readline/promises');

// Creating interface to readline from the command line
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// Function to return the sum of integers 
const returnSum = (data) => {
  return data.reduce((sum, num) => sum + parseInt(num));
}

// Final function for taking input cleaning and returning sum
const inputReq = async () => {
  const cliData = await rl.question('Enter an array of integers as mentioned [ 2, 3, 4, 5, 6 ]:');
  if (cliData[0] !== '[' || cliData[cliData.length - 1] !== ']') {
    console.log('Missing opening "[" or closing "]" brackets :(')
    process.exit(-1);
  };

  const data = cliData.split(',').filter(element => !isNaN(parseInt(element))).map(element => parseInt(element));
  const sum = returnSum(data);
  console.log(sum);
  return sum;
}

inputReq();
 

