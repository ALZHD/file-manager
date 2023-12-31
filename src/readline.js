import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

import { getUserName } from './user.js';
import { textReadLine, textInvalidImpit, textExit } from './text.js';

const userName = getUserName();
import handlerLogic from './handlerLogic.js'


const startReadline = async () => {
  textReadLine(userName);

  const rl = readline.createInterface({ input, output });

  rl.on('line', async (input) => {
    if (input === '.exit') {
      textReadLine(userName);
      rl.close();
    } else if (input.length > 0) {
      console.log(input);
      await handlerLogic(input);
    } else {
      textInvalidImpit(userName);
    }
  });

  rl.on('SIGINT', () => {
    textExit(userName);
    rl.close();
  });
};

export default startReadline;