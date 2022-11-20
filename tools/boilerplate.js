const fs = require('fs');
const { execSync } = require('child_process');

const _directory = `packages/${process.argv[2]}`;
fs.stat(_directory, (err) => {
  if (err) {
    if (err.errno === -2) {
      fs.mkdirSync(_directory);
      console.log(`Directory ${_directory} created`);

      process.chdir(_directory);
      execSync('npm init --scope=@ygles-es -y -f');

      const config = JSON.parse(fs.readFileSync('package.json'));
      config.author = 'YglesEyes';
      config.version = '1.0.0-rc.0';
      config.type = 'module';
      config.repository = {
        type: 'git',
        url: 'git+git@github.com:YglesWare/ygles-es.git',
        directory: _directory,
      };
      config.scripts = {
        generate_doc: 'jsdoc2md -c ../../.jsdoc *.mjs > README.md',
      };

      fs.writeFileSync('package.json', JSON.stringify(config, '', '  '));
      fs.writeFileSync('index.mjs', 'throw new Error(\'**** Package entry point ****\')');
      const branchName = _directory;
      execSync(`git checkout -b ${branchName}`);
      execSync(`git push --set-upstream origin ${branchName}`);
    } else {
      throw new Error(`Impossible to create "${_directory}"`, err);
    }
  } else {
    throw new Error(`Directory "${_directory}" already exists`);
  }
});

