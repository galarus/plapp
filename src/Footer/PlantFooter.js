// @flow
import * as React from 'react';
import AddBtn from '../svg/AddBtn';
import './PlantFooter.css';

type Props = *;
type State = {
  searching: boolean
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
          <div className={bodyClass}>trait search tbc</div>
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
