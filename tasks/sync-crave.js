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
const USERS_SET = 'components/users';
const ICONS_SET = 'components/icons';
const FILESETS = [
    {
        'commit': '34e9f20fa7bb5f30133d8d6c05f4c9b3f64e2b1a',
        'from': `src/${USERS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/${USERS_SET}`,
        'files': [
            'UserLabel.js',
            'UserLabelWithIcon.js',
            'UserMenu.js',
            'UserLabel.scss',
            'UserLabelWithIcon.scss',
            'UserMenu.scss'
        ]
    },
    {
        'commit': '34e9f20fa7bb5f30133d8d6c05f4c9b3f64e2b1a',
        'from': `tests/${USERS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/test/${USERS_SET}`,
        'files': [
            'UserLabel.spec.js',
            'UserLabelWithIcon.spec.js',
            'UserMenu.spec.js'
        ]
    },
    {
        'commit': '34e9f20fa7bb5f30133d8d6c05f4c9b3f64e2b1a',
        'from': `src/${ICONS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/${ICONS_SET}`,
        'files': [
            'AnonymousUserIcon.js',
            'AnonymousUserIcon.scss'
        ]
    },
    {
        'commit': '34e9f20fa7bb5f30133d8d6c05f4c9b3f64e2b1a',
        'from': `tests/${ICONS_SET}`,
        'to': `${CURRENT_DIR}/src/crave/test/${ICONS_SET}`,
        'files': [
            'AnonymousUserIcon.spec.js'
        ]
    },
    {
        'commit': '02b58ea27ac6bfa82217bbc9be1fb2b1825fee28',
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
        'commit': '02b58ea27ac6bfa82217bbc9be1fb2b1825fee28',
        'from': `tests/${INPUTS_SET}`,
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
