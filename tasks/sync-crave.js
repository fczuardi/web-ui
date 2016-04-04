#!/bin/sh
//bin/false || `which node || which nodejs` --harmony_destructuring --harmony_sloppy_let << `tail -n +2 $0`

// # Sync Crave
//
// Copy components, themes and tests written for a project codenamed **crave**.

require('shelljs/global');

const CURRENT_DIR = pwd();
const CRAVE_ROOT = process.env.CRAVE_ROOT;
const NAV_SET = 'components/nav';
const INPUTS_SET = 'components/inputs';
const USERS_SET = 'components/users';
const ICONS_SET = 'components/icons';
const SNAPSHOTS = [
    {
        'commit': '43031332677381b90c57d0af39902ff1ef854fab',
        'branch': 'personal-master',
        'sets': [
            {
                path: USERS_SET,
                names: [
                    'UserLabel',
                    'UserLabelWithIcon',
                    'UserMenu'
                ]
            },
            {
                path: ICONS_SET,
                names: [
                    'AnonymousUserIcon'
                ]
            },
            {
                path: INPUTS_SET,
                names: [
                    'Dropdown',
                    'DropdownItem',
                    'DropdownNotificationItem'
                ]
            },
            {
                path: NAV_SET,
                names: [
                    'Pagination',
                    'PaginationButton'
                ]
            },

        ]
    }
];

cd(CRAVE_ROOT);
SNAPSHOTS.forEach(({commit, branch, sets}) => {
    sets.forEach(({path, names}) => {
        names.forEach((name) => {
            let codeSrc = `src/${path}`;
            let testSrc = `tests/${path}`;
            let codeDest = `${CURRENT_DIR}/src/crave/src/${path}`;
            let testDest = `${CURRENT_DIR}/src/crave/test/${path}`;
            let codeFilename = `${name}.js`;
            let testFilename = `${name}.spec.js`;
            mkdir('-p', [codeDest, testDest]);
            exec(
                `git checkout ${branch}`, {silent:true}
            );
            console.log(`${codeDest}/${codeFilename}`);
            exec(
                `git show ${commit}:${codeSrc}/${codeFilename}`, {silent:true}
            ).output.to(`${codeDest}/${codeFilename}`);
            console.log(`${testDest}/${testFilename}`);
            exec(
                `git show ${commit}:${testSrc}/${testFilename}`, {silent:true}
            ).output.to(`${testDest}/${testFilename}`);
        });
    });
});
