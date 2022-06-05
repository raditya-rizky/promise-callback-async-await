const fs = require("fs-extra");

function main() {
  fs.outputFileSync("tugas/contoh.txt", "Ini dibuat pakai sync");
  fs.copySync("tugas/contoh.txt", "tugas/backup.txt");
  fs.appendFileSync(
    "tugas/backup.txt",
    `\nIni file backup\ndibuat pada: ${new Date()}`
  );

  const data = fs.readFileSync("tugas/backup.txt", "utf8");
  console.log(data);

  fs.copySync("tugas", "tugas-sync");
  fs.removeSync("tugas");
  const data2 = fs.readFileSync("tugas-sync/backup.txt", "utf8");
  console.log(data2);
}

main();
