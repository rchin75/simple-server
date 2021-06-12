const path = require('path');
const {start} = require('../../start');

const args = process.argv.slice(2);
const appPath = path.join(__dirname, '../app');

start(args, appPath);