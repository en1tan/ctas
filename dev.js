const fs = require('fs');

      let rootDir = './';

      let filenames = fs.readdirSync(rootDir);

      console.log('\nFilenames in directory');
      filenames.forEach((file) => {
        console.log(`File: ${file}`);
      });