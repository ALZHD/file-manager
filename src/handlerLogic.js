import { updateCurrentDir } from "./currentdir.js";
import { Ls, Up, Cd } from  './logic/nav.js'
import { Cat, Add,Cp,Mv,Rm } from "./logic/otherfn.js";


const handlerLogic = async (command) => {
  try {
    const commandBase = command.split(' ')[0];
    const commandArgs = command.toString().trim().split(' ').slice(1).filter(e => e);

    console.log("args in handleCommand", commandBase, commandArgs);

    switch (commandBase) {
      case 'ls':
        console.log("works")
        await Ls(await updateCurrentDir());
        break;
      case 'up':
        await Up();
        break;
      case 'cd':
        await Cd(commandArgs[0]);
        break;
      case 'cat':
        await Cat(commandArgs[0]);
        break;
      case 'add':
        await Add(commandArgs[0]);
        break;
        case 'rn':
        await Rn(commandArgs[0], commandArgs[1]);
        break;
        case 'cp':
        await Cp(commandArgs[0], commandArgs[1]);
        break;
        case 'mv':
        await Mv(commandArgs[0], commandArgs[1]);
        break;
      case 'rm':
        await Rm(commandArgs[0]);
        break;
      default:
      console.log('!Invalid input.\n');
    }

  } catch (error){
    console.error(error);
  }

  console.log(`You are currently in ${await updateCurrentDir()}\n`);
}

export default handlerLogic;