const fs = require('fs');
const { merge } = require('ramda');

const config = require('../app.json');
const { version } = require('../package.json');

const [file] = process.argv.slice(2);

const travisConfig = {
  expo: merge(config.expo, {
    version,
    packagerOpts: {
      nonPersistent: true
    }
  })
};

fs.writeFileSync(file, JSON.stringify(travisConfig, null, 2));
