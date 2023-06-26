import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { homedir } from 'os';

const homeDir = homedir();

const showCurrentDir = async () => {
  let currentDir = homeDir;

  return currentDir;
}

let currentDir = await showCurrentDir();

export default currentDir;