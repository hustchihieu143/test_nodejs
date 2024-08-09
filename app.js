// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// utils.js
function duplicateLogicInTwoPlaces(param1, param2) {
  // Duplicate logic that could be extracted to a function
  if (param1 > param2) {
    return param1;
  } else {
    return param2;
  }
}

function duplicateLogicInTwoPlaces2(param1, param2) {
  // Duplicate logic that could be extracted to a function
  if (param1 > param2) {
    return param1;
  } else {
    return param2;
  }
}