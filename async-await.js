const fs = require("fs-extra");

async function main() {
  await fs.outputFile("tugas/contoh.txt", "Ini dibuat pakai Async Await");
  await fs.copy("tugas/contoh.txt", "tugas/backup.txt");
  await fs.appendFile(
    "tugas/backup.txt",
    `\nIni file backup\ndibuat pada: ${new Date()}`
  );

  const data = await fs.readFile("tugas/backup.txt", "utf8");
  console.log(data);

  await fs.copySync("tugas", "tugas-async-await");
  await fs.removeSync("tugas");
  const data2 = fs.readFileSync("tugas-async-await/backup.txt", "utf8");
  console.log(data2);
}

main();
