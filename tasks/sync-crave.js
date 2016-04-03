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
const INPUTS_SET = 'components/inputs';
const FILESETS = [
    {
        'commit': '193ca6352a8e4f4b0ac00ba06d78e744dc444333',
        'from': `src/${INPUTS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/${INPUTS_SET}`,
        'files': [
            'Dropdown.js',
            'Dropdown.scss',
            'DropdownItem.js',
            'DropdownItem.scss',
            'DropdownNotificationItem.js',
            'DropdownNotificationItem.scss'
        ]
    },
    {
        'commit': '193ca6352a8e4f4b0ac00ba06d78e744dc444333',
        'from': `src/${INPUTS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/test/${INPUTS_SET}`,
        'files': [
            'Dropdown.spec.js',
            'DropdownItem.spec.js',
            'DropdownNotificationItem.spec.js'
        ]
    },
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
    },
    {
        'commit': '16acaaf97cedf2a68b4761cd030baf6acf9b1c85',
        'from': `tests/${NAV_SET}`,
        'to': `${CURRENT_DIR}/src/crave/test/${NAV_SET}`,
        'files': [
            'Pagination.spec.js',
            'PaginationButton.spec.js'
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
