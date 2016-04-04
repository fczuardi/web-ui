import React from 'react';
import UserLabelWithIcon from 'components/users/UserLabelWithIcon';
import UserLabel from 'components/users/UserLabel';
import AnonymousUserIcon from 'components/icons/AnonymousUserIcon';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/users) UserLabelWithIcon', function() {
  it('Should render UserLabelWithIcon component', function() {
    const tree = sd.shallowRender(<UserLabelWithIcon />);
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-label-with-icon'}>
        <div className={'icon'}>
          <AnonymousUserIcon />
        </div>
        <div className={'label'}>
          <UserLabel title={''} subtitle={''}/>
        </div>
      </div>
    );
  });

  it('Should render UserLabelWithIcon component with title and subtitle properties', function() {
    const name = 'Emo Kylo Ren';
    const username = '@KyloR3n';

    const tree = sd.shallowRender(
      <UserLabelWithIcon
        title={name}
        subtitle={username}
      />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-label-with-icon'}>
        <div className={'icon'}>
          <AnonymousUserIcon />
        </div>
        <div className={'label'}>
          <UserLabel title={name} subtitle={username} />
        </div>
      </div>
    );
  });

  it('Should render UserLabelWithIcon with an extra icon if the boolean "notifications" is passed', function() {
    const name = 'Emo Kylo Ren';
    const username = '@KyloR3n';

    const tree = sd.shallowRender(
      <UserLabelWithIcon
        title={name}
        subtitle={username}
        notifications
      />
    );
    const vdom = tree.getRenderOutput();

    expect(vdom).to.equalJSX(
      <div className={'user-label-with-icon'}>
        <div className={'icon'}>
          <AnonymousUserIcon />
          <i className={'wg-help notification-icon'} />
        </div>
        <div className={'label'}>
          <UserLabel title={name} subtitle={username} />
        </div>
      </div>
    );
  });
});
