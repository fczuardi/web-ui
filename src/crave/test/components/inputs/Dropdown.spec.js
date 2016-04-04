import React from 'react';
import Dropdown from 'components/inputs/Dropdown';
import DropdownItem from 'components/inputs/DropdownItem';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/inputs) Dropdown', function() {
  it('Should render Dropdown component', function() {
    const tree = sd.shallowRender(<Dropdown />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'dropdown'}>
        <ol className={'dropdown-body'}>
        </ol>
      </div>
    );
  });
  it('Should render Dropdown component with a header when header is passed', function() {
    const header = (
      <div style={{padding: 10}}>
        <h3>Foobar</h3>
        <h4>A simple header</h4>
      </div>
    );
    const tree = sd.shallowRender(
      <Dropdown
        header={header}
      >
        <DropdownItem>Hello</DropdownItem>
        <DropdownItem>World</DropdownItem>
      </Dropdown>
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'dropdown'}>
        <div className={'dropdown-header'}>
          {header}
        </div>
        <ol className={'dropdown-body'}>
          <DropdownItem>Hello</DropdownItem>
          <DropdownItem>World</DropdownItem>
        </ol>
      </div>
    );
  });
});
