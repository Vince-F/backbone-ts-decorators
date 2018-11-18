const path = require('path');

module.exports = {
  entry: './dist/main.js',
  output: {
    path: path.resolve(__dirname, '../exampleOut'),
    filename: 'bundle.js'
  }
};