  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!');
      process.exit();
    }
    if (key === "b") {
      process.stdout.write('\x07');
    }
    else if (!isNaN(key)){
      console.log(`setting timer for ${key} seconds...`)
      setTimeout(() => {
        process.stdout.write('\x07');
      }, key*1000);
    }
  });


