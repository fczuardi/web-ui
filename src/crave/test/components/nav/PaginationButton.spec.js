import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import PaginationButton from 'components/nav/PaginationButton';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components) PaginationButton', function() {
  it('Should render PaginationButton component', function() {
    const html = renderToStaticMarkup(<PaginationButton />);
    expect(html).to.contain('</li>');
  });
});
