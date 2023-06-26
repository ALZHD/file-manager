import startReadline from './src/readline.js';
import { textGreeting, textCurrentDir } from "./src/text.js";
import { getUserName } from "./src/user.js";
import {updateCurrentDir} from './src/currentdir.js';
const userName = getUserName()

const updatedDit = await updateCurrentDir()

const startApp = async () => {
   textGreeting(userName)
   textCurrentDir(updatedDit)
   await startReadline();
  }

  startApp();