// @flow
import * as React from 'react';
import AddBtn from '../svg/AddBtn';
import PlantList from '../List/PlantList';
import './PlantFooter.css';
import type { PlantObject } from '../plant_data';

type Props = {
  searchResults: Array<PlantObject>
};
type State = {
  searching: boolean,
  adding: boolean
};

class PlantFooter extends React.Component<Props, State> {
  state = {
    searching: false,
    adding: false
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
      <div className="App">
        <div className={footerClass}>
          <div
            role="button"
            tabIndex="-10"
            className="searchHead"
            onKeyDown={this.toggleSearching}
            onClick={this.toggleSearching}
          >
            {searching ? 'Close ↓' : 'Search ↑'}
          </div>
          <div className={bodyClass}>
            {searchResults && searchResults.length ? (
              <PlantList searchResults={searchResults} key={searchResults.length} />
            ) : (
              <p>There are no plants matching your given search criteria.</p>
            )}
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            right: '0%',
            bottom: '0%',
            boxShadow: '10em',
            transform: 'scale(0.7)'
          }}
        >
          <AddBtn />
        </div>
      </div>
    );
  }
}

export default PlantFooter;
