//import statements
import Package from '../models/package.model';
const shell = require('shelljs');
const zlib = require('zlib');
const fs = require('fs');
const moment = require('moment');

//declare statements
const gzip = zlib.createGzip();
const currentDate = moment().format('DD-MM-YYYY');

const MEMOIZE = {
  currentVersion: null
};

async function insertPackageData(data) {
    const pack = await Package.create(data);
    if (!pack) throw new Error(pack);
}
//Criar a constante do caminho relativo do diretorio dos pacotes
//inserir o caminho relativo para o diretorio dos pacotes sem zip
export const createPackage = (inputPath, req, res) => {
  req.body.location = `./package/${currentDate}/package-2.0.0`;
  const packageDir = `/packages/${currentDate}/package-${req.body.version}.zip`;
  try{
      insertPackageData(req.body);
      shell.cd('/home/joaop-oliveira/Documents/node_js/packager-2.0/src/lib/');
      if (shell.exec(`zip -r -9 ../../packages/${currentDate}/package-${req.body.version}.zip  ./${inputPath}`).code === 0) {
          res.status(200).send({
              message: `Pacakage created successfully within ${__dirname}${packageDir}` });
      } else{
          res.send({
              message: "could not compress the directory"
          });
      }
  } catch(e) {
      console.log(e);
  }
};

async function checkVersion() {
  const lastVersion = await Package.find({})
    .sort({ created_at: 'desc' })
    .select('version');
  if (!lastVersion) throw new Error(lastVersion);
  return lastVersion;
}

export const buildGzip = async (inputFile, req, res) => {
  // if (MEMOIZE.currentVersion === null) {
  //   // const nextVersion = checkVersion();
  // }
  const bigFile = fs.createReadStream(__dirname + inputFile);
  shell.mkdir('-p', `./packages/${currentDate}`);
  const gzipedFile = fs.createWriteStream(`./packages/${currentDate}/package-${req.body.version}.gz`);
  bigFile.pipe(gzip).pipe(gzipedFile);
  res.send({ message: 'file created' });
};

// function createFile(fileName) {
//   fs.appendFile(fileName, content, function(err) {
//     if (err) throw new Error(err);
//     console.log('file saved!!');
//   });
// }



