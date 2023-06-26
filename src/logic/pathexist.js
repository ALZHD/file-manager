import { stat } from 'fs/promises';

export const pathExist = async (str) => {
  try {
    await stat(str);
    return true;
  } catch (error) {
    return false;
  }
};
