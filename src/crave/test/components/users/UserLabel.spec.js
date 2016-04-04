import React from 'react';
import UserLabel from 'components/users/UserLabel';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/users) UserLabel', function() {
  it('Should render UserLabel component', function() {
    const tree = sd.shallowRender(<UserLabel />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div>
        <p className={'user-label-title'} />
        <p className={'user-label-subtitle'} />
      </div>
    );
  });

  it('Should render UserLabel component with title and subtitle properties', function() {
    const name = 'Anonymous Coward';
    const userRank = 'N00b';

    const tree = sd.shallowRender(<UserLabel title={name} subtitle={userRank} />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div>
        <p className={'user-label-title'}>{name}</p>
        <p className={'user-label-subtitle'}>{userRank}</p>
      </div>
    );
  });
});
