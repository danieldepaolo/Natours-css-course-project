import fs from "fs";

const DIST_PATH = 'dist/';

fs.readFile("src/index.html", "utf8", (err, html) => {
  if (err) {
    return console.log(err);
  }

  // Remove some stuff for prod
  const toRemove = '<link rel="stylesheet" href="css/icon-font/icon-font.css">';
  html = html.replace(toRemove, "");

  // Replace with minified css
  const toReplace = '<link rel="stylesheet" href="css/style.css">';
  const minifiedLink = '<link rel="stylesheet" href="css/style.min.css">';
  html = html.replace(toReplace, minifiedLink);

  // write file back
  fs.writeFile("dist/index.html", html, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
