

const textGreeting = (userName) => {console.log(`Welcome to the File Manager, ${userName}!`)}
const textCurrentDir = (currentDir) => {console.log(`You are currently in ${currentDir}`)}
const textExit = (userName) => {console.log(`Thank you for using File Manager, ${userName}, goodbye!`)}
const textNoUser = () => {console.log('Unknown User')}
const textReadLine = () => {console.log('Please type your command.\n')}
const textInvalidImpit = () => {console.log(`Invalid input.\n'`)}


export {textGreeting, textCurrentDir,textExit ,textNoUser, textReadLine, textInvalidImpit}