const fs = require('fs');
const path = require('path');

const pathToNodeModilesCache = path.resolve(__dirname, '..', 'node_modules', '.cache');

function deleteNodeModulesCache(pathToFolder) {
  if (fs.existsSync(pathToFolder)) {
    fs.readdirSync(pathToFolder).forEach((file) => {
      const curPath = path.join(pathToFolder, file);

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteNodeModulesCache(curPath);
      } else {
        fs.unlinkSync(curPath);
      }
    });

    fs.rmdirSync(pathToFolder);
  } else {
    console.log('Папка .cache не существует');
  }
}

deleteNodeModulesCache(pathToNodeModilesCache);
