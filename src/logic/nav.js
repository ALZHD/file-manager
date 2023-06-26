import { readdir } from 'fs/promises';
import { updateCurrentDir } from '../currentdir.js';

export const Ls = async (folder) => {

    const items = await readdir(folder, {
      withFileTypes: true,
    });
    console.log("+",items[2].isDirectory());

    const typedItems = await Promise.all(items.map((item) => ({
        Name: item.name,
        Type: item.isDirectory() ? 'directory' : 'file',
      })));

      typedItems.sort((a, b) => {
        if (a.Type > b.Type) {
          return 1;
        }
        if (a.Type < b.Type) {
          return -1;
        }
        return 0;
      });


    console.table(typedItems);
  } ;

export const Up = async () => {
  await updateCurrentDir('up');
};

export const Cd = async (newPath) => {
  await updateCurrentDir(newPath.toString().trim());
};

