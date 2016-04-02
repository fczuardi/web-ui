#!/usr/bin/env node

// # Sync Crave
//
// Copy components, themes and tests written for a project codenamed **crave**.
//
// ## Components list:
//
// ### Navigation
//
// - Pagination
// - PaginationButton

require('shelljs/global');

const CURRENT_DIR = pwd();
const CRAVE_ROOT = process.env.CRAVE_ROOT;
const NAV_SET = 'components/nav';
const FILESETS = [
    {
        'commit': '16acaaf97cedf2a68b4761cd030baf6acf9b1c85',
        'from': `src/${NAV_SET}`,
        'to': `${CURRENT_DIR}/src/crave/${NAV_SET}`,
        'files': [
            'Pagination.js',
            'Pagination.scss',
            'PaginationButton.js',
            'PaginationButton.scss'
        ]
    }
];

cd(CRAVE_ROOT);
FILESETS.forEach( (snapshot) => {
    snapshot.files.forEach( (filename) => {
        mkdir('-p', `${snapshot.to}`);
        exec(
            `git show ${snapshot.commit}:${snapshot.from}/${filename}`, {silent:true}
        ).output.to(`${snapshot.to}/${filename}`);
    });
});
