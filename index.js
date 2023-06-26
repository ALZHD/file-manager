import startReadline from './src/readline.js';
import { textGreeting, textCurrentDir } from "./src/text.js";
import { getUserName } from "./src/user.js";
import currentDir from './src/currentdir.js';
const userName = getUserName()

const startApp = async () => {
   textGreeting(userName)
   textCurrentDir(currentDir)
   await startReadline();
  }

  startApp();