import { join, parse } from 'path';
import { homedir } from 'os';
import { pathExist } from './logic/pathexist.js';

const homeDir = homedir();
const rootDir = parse(process.cwd()).root;
let currentDir = null;

export const updateCurrentDir = async (path) => {
  if (currentDir === null) {
    currentDir = homeDir;
  }

  if(path === 'up'){

    if (currentDir === rootDir) return;
    currentDir = join(currentDir, '..');

  } else if (typeof path === 'string'){

    if (path.startsWith('.')) {
      const interimPath = join(currentDir, path.replace(/^["'](.+(?=["']$))["']$/, '$1'));

      if (!(await pathExist(interimPath))) {
        console.log('Operation failed');
        return;
      };

      currentDir = interimPath;

    } else {

      const interimPath = path.replace(/^["'](.+(?=["']$))["']$/, '$1');
      if (!(await pathExist(interimPath))) {
        console.log('Operation failed');
        return;
      };

      currentDir = interimPath;
    }
  }

  return currentDir;
}
