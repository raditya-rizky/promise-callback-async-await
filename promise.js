const fs = require("fs-extra");

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Promise")
    .then(() => {
      return fs.copy("tugas/contoh.txt", "tugas/backup.txt");
    })
    .then(() => {
      return fs.appendFile(
        "tugas/backup.txt",
        `\nIni file backup\ndibuat pada: ${new Date()}`
      );
    })
    .then(() => {
      return fs.readFile("tugas/backup.txt", "utf8");
    })
    .then((data) => {
      console.log(data);
    })
    .then(() => {
      return fs.copy("tugas", "tugas-promise");
    })
    .then(() => {
      return fs.remove("tugas");
    })
    .then(() => {
      return fs.readFile("tugas-promise/backup.txt", "utf8");
    })
    .then((data2) => {
      console.log(data2);
    });
}

main();
