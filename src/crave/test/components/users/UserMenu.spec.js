import React from 'react';
import UserMenu from 'components/users/UserMenu';
import Dropdown from 'components/inputs/Dropdown';
import DropdownItem from 'components/inputs/DropdownItem';
import DropdownNotificationItem from 'components/inputs/DropdownNotificationItem';
import UserLabelWithIcon from 'components/users/UserLabelWithIcon';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/users) UserMenu', function() {
  it('Should render UserMenu component', function() {
    const tree = sd.shallowRender(<UserMenu />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-menu'}>
        <Dropdown
          header={(
            <div className={'user-menu-header'}>
              <UserLabelWithIcon
                notifications={false}
                title={''}
                subtitle={''}
              />
            </div>
          )}
        />
      </div>
    );
  });

  it('Should render UserMenu component with user header and menuitems', function() {
    const user = {
      name: 'Sérgio Malandro',
      type: 'beginner'
    };
    const items = [
      {label: 'foo'},
      {label: 'bar', href: 'http://www.example.com'}
    ];
    const tree = sd.shallowRender(
      <UserMenu
        title={user.name}
        subtitle={user.type}
        items={items}
      />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-menu'}>
        <Dropdown
          header={(
            <div className={'user-menu-header'}>
              <UserLabelWithIcon
                title={user.name}
                subtitle={user.type}
                notifications={false}
              />
            </div>
          )}
        >
          <DropdownItem key={'i_0'}>foo</DropdownItem>
          <DropdownItem key={'i_1'} href={'http://www.example.com'}>bar</DropdownItem>
        </Dropdown>
      </div>
    );
  });

  it('Should render UserMenu component with user header, menuitems and notifications', function() {
    const user = {
      name: 'Sérgio Malandro',
      type: 'beginner'
    };
    const items = [
      {label: 'foo'},
      {label: 'bar', href: 'http://www.example.com'}
    ];
    const notifications = [
      {label: 'Please, confirm your Email address…'}
    ];
    const tree = sd.shallowRender(
      <UserMenu
        title={user.name}
        subtitle={user.type}
        items={items}
        notifications={notifications}
      />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-menu'}>
        <Dropdown
          header={(
            <div className={'user-menu-header'}>
              <UserLabelWithIcon
                title={user.name}
                subtitle={user.type}
                notifications
              />
            </div>
          )}
        >
          <DropdownNotificationItem key={'n_0'}>
            {notifications[0].label}
          </DropdownNotificationItem>
          <DropdownItem key={'i_0'}>foo</DropdownItem>
          <DropdownItem key={'i_1'} href={'http://www.example.com'}>bar</DropdownItem>
        </Dropdown>
      </div>
    );
  });
});
