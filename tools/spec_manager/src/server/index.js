const os = require('os');
const fs = require('fs');
const path = require('path');
const {execSync} = require('child_process');
const express = require('express');
const ws = require('ws');

// Need Linux or MacOs
if (os.platform() === 'win32') throw new Error('Server is not compatible for win32 platform');

// Read server config file
const config = JSON.parse(fs.readFileSync(process.argv[2])) || {};
// Move to root directory
if (config.specRootDirectory) process.chdir(config.specRootDirectory);

// Search all specification files base on config fileFilter array
const fileList = [];
for (const filter of config.fileFilter) {
  const currentList = execSync(`find . -name "${filter}"`).toString().split('\n');
  fileList.push(...currentList.filter(filename => filename !== ''));
}

// Create file reference object
const fileReference = {};
for (const file of fileList) {
  const fileContent = JSON.parse(fs.readFileSync(file).toString());
  if (fileContent['yglesware-software-db'] === 'spec_manager') {
    fileReference[fileContent.ProjectData.name] = fileContent.ProjectData.rootDirectory;
  }
}

// Start http and ws server
const app = express()
const port = config.port || 3850;
app.get('/', express.static(path.join(__dirname, '../client/')));
const server = app.listen(port, () => {
  console.log(`Specification manager run: http://localhost:${port}`)
});

const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', _msg => {
    const msg = JSON.parse(_msg.toString());

    if (msg.getList) {
      socket.send(JSON.stringify(Object.keys(fileReference)));
    }
  });
});

server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});