import React from 'react';
import AnonymousUserIcon from 'components/icons/AnonymousUserIcon';
import EllipseIcon from 'components/icons/EllipseIcon';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/icons) AnonymousUserIcon', function() {
  it('Should render AnonymousUserIcon component', function() {
    const tree = sd.shallowRender(<AnonymousUserIcon />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <EllipseIcon className={'wg-user anonymous-user-icon'} />
    );
  });
});
