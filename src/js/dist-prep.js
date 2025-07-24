import fs from "fs";

const DIST_PATH = 'dist/';

const createPaths = ['css', 'img', 'js'];

if (!fs.existsSync(DIST_PATH)) {
  createPaths.forEach(path => {
    const fullPath = `${DIST_PATH}/${path}`;
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Directory '${fullPath}' created`);
  });
}
