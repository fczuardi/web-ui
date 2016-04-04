import React from 'react';
import Dropdown from 'components/inputs/Dropdown';
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
});
