import { createReadStream } from "fs";

export const createReadableStr = async (path) => {
  const stream = createReadStream(path, 'utf-8');

  return new Promise((res, rej) => {
    stream.on('data', (data) => {res(data)});
    stream.on('error', (err) => rej(err));
  });
}