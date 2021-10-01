const fs = require("fs");

const errorHandler = (err) => {
  if (err) console.error(err);
  else console.log("Done!");
};

const commands = {
  mkdir: (dirname) => fs.mkdir(dirname, errorHandler),
  write: (filename, content) => fs.writeFile(filename, content, errorHandler),
  append: (filename, content) => fs.appendFile(filename, content, errorHandler),
  read: (filename) =>
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) console.error(err);
      else console.log(data);
    }),
  rename: (src, dest) => fs.rename(src, dest, errorHandler),
  rm: (filename) => fs.rm(filename, errorHandler),
  rmdir: (dirname) => fs.rmdir(dirname, errorHandler),
};

const requiresTwoArguments = ["write", "rename", "append"];
function getNumberOfArguments(command) {
  if (requiresTwoArguments.indexOf(command) == -1) {
    return 1;
  } else {
    return 2;
  }
}

const args = process.argv.slice(2);

if (args.length == 0) {
  console.log("Usage: node files.js COMMAND arg1 [arg2]");
  console.log("COMMAND is one of mkdir, write, read, rename, rm, rmdir");
  process.exit();
}

const [command, ...parameters] = args;
if (!commands[command]) {
  console.error(`Command ${command} not found!`);
  process.exit(-1);
}
if (parameters.length != getNumberOfArguments(command)) {
  console.error(`Invalid number of arguments!`);
  process.exit(-1);
}
commands[command](...parameters);