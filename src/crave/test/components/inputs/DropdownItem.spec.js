import React from 'react';
import DropdownItem from 'components/inputs/DropdownItem';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/inputs) DropdownItem', function() {
  it('Should render DropdownItem component', function() {
    const tree = sd.shallowRender(<DropdownItem />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <li className={'dropdown-item'}>
        <a className={'dropdown-item-link'} href={'#'} onClick={null} />
      </li>
    );
  });
});
