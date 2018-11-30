// @flow
import * as React from 'react';
import PlantList from '../List/PlantList';
import './PlantFooter.css';
import type { PlantObject } from '../../plant_data';

type Props = {
  searchResults: Array<PlantObject>
};
type State = {
  searching: boolean
};

class PlantFooter extends React.Component<Props, State> {
  state = {
    searching: false
  };

  toggleSearching = () => {
    const { searching } = this.state;
    this.setState({ searching: !searching });
  };

  render() {
    const { searching } = this.state;
    const { searchResults } = this.props;
    const bodyClass = searching ? 'searchBody searchBody-show' : 'searchBody';
    const footerClass = searching ? 'footer z-show' : 'footer';

    return (
      <div className={footerClass}>
        <div
          role="button"
          tabIndex="-10"
          className="searchHead"
          onKeyDown={this.toggleSearching}
          onClick={this.toggleSearching}
        >
          {searching ? 'Search' : 'Close'}
        </div>
        <div className={bodyClass}>
          {searchResults && searchResults.length ? (
            <div className="resultsList">
              <PlantList searchResults={searchResults} key={searchResults.length} />
            </div>
          ) : (
            <p>There are no plants matching your given search criteria.</p>
          )}
        </div>
      </div>
    );
  }
}

export default PlantFooter;
