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

  await fs.copy("tugas", "tugas-async-await");
  await fs.remove("tugas");
  const data2 = fs.readFile("tugas-async-await/backup.txt", "utf8");
  console.log(data2);
}

main();
