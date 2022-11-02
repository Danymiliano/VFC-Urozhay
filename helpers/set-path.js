const path = require('path');

const setPath = (page) => path.resolve(__dirname, '../views', `${page}.ejs`)

module.exports = setPath;