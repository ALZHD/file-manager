const getUserName = () => {
    return process.argv.find(el => el.startsWith('--username'))
    ? process.argv.find(el => el.startsWith('--username')).split('=').pop()
    : 'Dear User';
  }

 export {getUserName}