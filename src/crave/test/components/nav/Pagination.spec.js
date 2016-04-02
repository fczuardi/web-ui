import React from 'react';
import Pagination from 'components/nav/Pagination';
import {getVisibleRange, getVisibleRangeWithElipsis, partialDisplayHelper} from 'components/nav/Pagination';
import PaginationButton from 'components/nav/PaginationButton';
import sd from 'skin-deep';

import equalJSX from 'chai-equal-jsx';
chai.use(equalJSX);

describe('(Components/nav) Pagination', function() {
  it('Should use functions that return correct slice ranges', function() {
    expect(getVisibleRange(100, 7, 5)).to.eql([2, 9]);
    expect(getVisibleRangeWithElipsis(100, 7, 5)).to.eql([3, 8]);
  });
  it('Should render Pagination component', function() {
    var tree = sd.shallowRender(<Pagination />);
    var vdom = tree.getRenderOutput();

    expect(vdom).to.have.property('type', 'nav');
    expect(vdom).to.equalJSX(
      <nav className={'pagination'}>
        <ol>
          <PaginationButton label={'←'} disabled previous />
          <PaginationButton label={'→'} disabled next />
        </ol>
      </nav>
    );
  });
  it('Should display a right-hand side ellipsis button when the number of pages is bigger than the limit',
    function() {
      const pages = [{}, {}, {}, {}, {}];
      const props = {
        displaySize: 4,
        pages: pages
      };
      let {ellipsisRight} = partialDisplayHelper(props, (<div/>));
      expect(pages.length).to.equal(5);
      expect(ellipsisRight).to.not.be.null;
      const tree = sd.shallowRender(<Pagination {...props} />);
      const vdom = tree.getRenderOutput();
      expect(vdom).to.includeJSX(<PaginationButton label={'…'} more />);
    }
  );
  it('Should display ellipsis on both sides when the selected page is far from the beginning or end',
    function() {
      const pages = [...Array(100)].map((item, i) => ({}));
      const props = {
        pages: pages,
        displaySize: 3,
        selectedIndex: 94
      };
      const tree = sd.shallowRender(<Pagination {...props} />);
      const vdom = tree.getRenderOutput();
      expect(vdom).to.equalJSX(
        <nav className={'pagination'}>
          <ol>
            <PaginationButton label={'←'} previous disabled={false}/>
            <PaginationButton label={'…'} more />
            <PaginationButton label={'94'} selected />
            <PaginationButton label={'…'} more />
            <PaginationButton label={'→'} next disabled={false}/>
          </ol>
        </nav>
      );
    }
  );
  it('Should not display right-hand side ellipsis when the last page is in range',
    function() {
      const pages = [...Array(100)].map((item, i) => ({}));
      const props = {
        pages: pages,
        displaySize: 6,
        selectedIndex: 97
      };
      const tree = sd.shallowRender(<Pagination {...props} />);
      const vdom = tree.getRenderOutput();
      expect(vdom).to.equalJSX(
        <nav className={'pagination'}>
          <ol>
            <PaginationButton label={'←'} previous disabled={false}/>
            <PaginationButton label={'…'} more />
            <PaginationButton label={'95'} selected={false} />
            <PaginationButton label={'96'} selected={false} />
            <PaginationButton label={'97'} selected />
            <PaginationButton label={'98'} selected={false} />
            <PaginationButton label={'99'} selected={false} />
            <PaginationButton label={'→'} next disabled={false}/>
          </ol>
        </nav>
      );
    }
  );
  it('Should not display left-hand side ellipsis when the first page is in range',
    function() {
      const pages = [...Array(100)].map((item, i) => ({}));
      const props = {
        pages: pages,
        displaySize: 6,
        selectedIndex: 2
      };
      const tree = sd.shallowRender(<Pagination {...props} />);
      const vdom = tree.getRenderOutput();
      expect(vdom).to.equalJSX(
        <nav className={'pagination'}>
          <ol>
            <PaginationButton label={'←'} previous disabled={false}/>
            <PaginationButton label={'0'} selected={false} />
            <PaginationButton label={'1'} selected={false} />
            <PaginationButton label={'2'} selected />
            <PaginationButton label={'3'} selected={false} />
            <PaginationButton label={'4'} selected={false} />
            <PaginationButton label={'…'} more />
            <PaginationButton label={'→'} next disabled={false}/>
          </ol>
        </nav>
      );
    }
  );
});
