const fs = require('fs')
const path = require('path')
// const { join: joinPath } = require('path');

const pathToNodeModilesCache = path.resolve(__dirname, '..', 'node_modules', '.cache')

function deleteNodeModulesCache(pathToFolder) {
  if (fs.existsSync(pathToFolder)) {
    fs.readdirSync(pathToFolder).forEach((file) => {
      const curPath = path.join(pathToFolder, file)

      if (fs.lstatSync(curPath).isDirectory()) {
        deleteNodeModulesCache(curPath)
      } else {
        fs.unlinkSync(curPath)
      }
    })

    fs.rmdirSync(pathToFolder)

    console.log('Папка .cache успешно удалена')
  } else {
    console.log('Папки .cache не существует')
  }
}

deleteNodeModulesCache(pathToNodeModilesCache)

//* Можно написать так
// const cacheDir = joinPath(__dirname, '..', 'node_modules', '.cache');
// fs.rmSync(cacheDir, { force: true, recursive: true });
