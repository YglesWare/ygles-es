const { readFileSync, writeFileSync } = require('fs');

const inputData = JSON.parse(readFileSync(process.argv[2]).toString());

for(const elem of inputData) {
  let text = `
  <details id='${elem.name}'>
    <summary>
      <h3>${elem.name}</h3>
    </summary>
    <p>
      <a href="${elem.url}">${elem.url}</a>
    </p>
    <p style="margin-top: 10px">${elem.description}</p>
  </details>
  `;

  writeFileSync('./toto.md', text, {flag: 'a+'});
}