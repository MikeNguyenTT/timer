const timeList = process.argv.slice(2);
if (timeList === undefined || timeList.length === 0) {
  return;
}
for (const time of timeList) {
  if (time < 0 || isNaN(time)) {
    continue;
  }

  let timeout = Number(time) * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
    console.log(time);
  }, timeout);
}
