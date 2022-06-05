const fs = require("fs-extra");

function main() {
  fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai callback", () => {
    fs.copy("tugas/contoh.txt", "tugas/backup.txt", () => {
      fs.appendFile(
        "tugas/backup.txt",
        `\nIni file backup\ndibuat pada: ${new Date()}`,
        () => {
          fs.readFile("tugas/backup.txt", "utf8", (err, data) => {
            console.log(data);
            fs.copy("tugas", "tugas-callback", () => {
              fs.remove("tugas", () => {
                fs.readFile(
                  "tugas-callback/backup.txt",
                  "utf8",
                  (err, data2) => {
                    console.log(data2);
                  }
                );
              });
            });
          });
        }
      );
    });
  });
}

main();
