import React from 'react';
import DropdownNotificationItem from 'components/inputs/DropdownNotificationItem';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/inputs) DropdownNotificationItem', function() {
  it('Should render DropdownNotificationItem component', function() {
    const tree = sd.shallowRender(<DropdownNotificationItem />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <li className={'dropdown-item dropdown-notification-item'}>
        <a className={'dropdown-item-link dropdown-notification-item-link'}
          href={'#'}
          onClick={null}
        >
          <i className={'wg-help dropdown-notification-item-icon'} />
        </a>
      </li>
    );
  });
});
