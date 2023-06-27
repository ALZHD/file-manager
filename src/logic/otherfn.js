import { dirname, join, parse } from 'path';
import { writeFile, rename,  createWriteStream , createReadStream} from 'fs';
import { pipeline } from 'node:stream/promises';
import { unlink } from 'node:fs/promises';

import { pathExist } from './pathexist.js';
import { createReadableStr } from './readable.js';
import { createPathToFile , updateCurrentDir} from '../currentdir.js';


export const Cat = async (path) => {
  if (path.length < 1) {
    console.log('!Invalid input.')
  } else {
    const currentPath = await createPathToFile(path);

    if (await pathExist(currentPath)){
      console.log(await createReadableStr(currentPath));
    } else {
      console.log('!!Invalid input.')
    }
  }
}

export const Add = async (path) => {
  if (path.length < 1) {
    console.log('Invalid input.')
  } else {
    writeFile(join(await updateCurrentDir(), path), '', (err) => {
      if (err) console.log('Operation failed.');
    });
  }
}

export const Rn = async (filePath, newName) => {
  if (filePath < 1 || newName.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentPath = await createPathToFile(filePath);

    if (await pathExist(currentPath)){
      const __dirname = dirname(currentPath);

      rename(currentPath, join(__dirname, newName.replace(/^["'](.+(?=["']$))["']$/, '$1')), (err) => {
        if (err) console.log('Operation failed.');
      })

    } else {
      console.log('Invalid input.')
    }
  }
}

export const Cp = async (filePath, dirPath) => {
  if (filePath < 1 || dirPath.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExist(currentFilePath)){
      const { base } = parse(currentFilePath);

      const readableStream = createReadableStr(currentFilePath);
      const writeableStream = createWriteStream(join(await createPathToFile(dirPath), base));

      await pipeline(readableStream, writeableStream);

    } else {
      console.log('Invalid input.')
    }
  }
}

export const Mv = async (filePath, dirPath) => {
  if (filePath < 1 || dirPath.length < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExists(currentFilePath)){
      const { base } = parse(currentFilePath);

      const readableStream = createReadStream(currentFilePath);
      const writeableStream = createWriteStream(join(await createPathToFile(dirPath), base));

      await pipeline(readableStream, writeableStream).then(() => unlink(currentFilePath));

    } else {
      console.log('Invalid input.')
    }
  }
}

export const Rm = async (filePath) => {
  if (filePath < 1) {
    console.log('Invalid input.')
  } else {
    const currentFilePath = await createPathToFile(filePath);

    if (await pathExist(currentFilePath)){
      unlink(currentFilePath);

    } else {
      console.log('!Invalid input.')
    }
  }
}