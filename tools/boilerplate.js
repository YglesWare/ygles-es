const fs = require('fs');
const { execSync } = require('child_process');

const _pkgName = process.argv[2];
const _directory = `packages/${_pkgName}`;
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
      execSync('mkdir -p src/client src/server specs tests story')
      fs.writeFileSync('specs/dbSpec.json', 
`{
  "yglesware-software-db": "spec_manager",
  "ProjectData": {
    "name": "${_pkgName}",
    "trigramme": "",
    "rootDirectory": "${process.cwd()}"
  },
  "SRS": {
    "revision": "A",
    "history": [
      {
        "author": "TDB",
        "date": "TDB",
        "pages": ["All"],
        "updates": "Creation"
      }
    ],
    "applicableDocuments": [
      {
        "name": "AD-1",
        "url": "N/A"
      }
    ],
    "referenceDocuments": [
      {
        "name": "RD-1",
        "url": "N/A"
      }
    ],
    "terminology": [
      {
        "name": "EX",
        "description": "Example"
      }
    ],
    "description": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "synopsis": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "requirements": [
      {
        "section": "",
        "uid": "",
        "revision": "",
        "title": "",
        "covered": [],
        "covers": [],
        "text": "",
        "figures": [
          {
            "file": "",
            "legend": ""
          }
        ]
      }
    ],
    "sectionOrder": []
  },
  "SDD": {
    "revision": "A",
    "history": [
      {
        "author": "TDB",
        "date": "TDB",
        "pages": ["All"],
        "updates": "Creation"
      }
    ],
    "applicableDocuments": [
      {
        "name": "AD-1",
        "url": "N/A"
      }
    ],
    "referenceDocuments": [
      {
        "name": "RD-1",
        "url": "N/A"
      }
    ],
    "terminology": [
      {
        "name": "EX",
        "description": "Example"
      }
    ],
    "description": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "synopsis": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "requirements": [
      {
        "section": "",
        "uid": "",
        "revision": "",
        "title": "",
        "covered": [],
        "covers": [],
        "text": "",
        "figures": [
          {
            "file": "",
            "legend": ""
          }
        ]
      }
    ],
    "sectionOrder": []
  },
  "TU": {
    "revision": "A",
    "history": [
      {
        "author": "TDB",
        "date": "TDB",
        "pages": ["All"],
        "updates": "Creation"
      }
    ],
    "applicableDocuments": [
      {
        "name": "AD-1",
        "url": "N/A"
      }
    ],
    "referenceDocuments": [
      {
        "name": "RD-1",
        "url": "N/A"
      }
    ],
    "terminology": [
      {
        "name": "EX",
        "description": "Example"
      }
    ],
    "description": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "synopsis": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "requirements": [
      {
        "section": "",
        "uid": "",
        "revision": "",
        "title": "",
        "covered": [],
        "covers": [],
        "text": "",
        "figures": [
          {
            "file": "",
            "legend": ""
          }
        ]
      }
    ],
    "sectionOrder": []
  },
  "E2E": {
    "revision": "A",
    "history": [
      {
        "author": "TDB",
        "date": "TDB",
        "pages": ["All"],
        "updates": "Creation"
      }
    ],
    "applicableDocuments": [
      {
        "name": "AD-1",
        "url": "N/A"
      }
    ],
    "referenceDocuments": [
      {
        "name": "RD-1",
        "url": "N/A"
      }
    ],
    "terminology": [
      {
        "name": "EX",
        "description": "Example"
      }
    ],
    "description": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "synopsis": {
      "text": "",
      "figures": [
        {
          "file": "",
          "legend": ""
        }
      ]
    },
    "requirements": [
      {
        "section": "",
        "uid": "",
        "revision": "",
        "title": "",
        "covered": [],
        "covers": [],
        "text": "",
        "figures": [
          {
            "file": "",
            "legend": ""
          }
        ]
      }
    ],
    "sectionOrder": []
  }
}
`
      );
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

