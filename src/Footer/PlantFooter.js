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
    searching: false
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
            Search ^
          </div>
          <div className={bodyClass}>trait search tbc</div>
        </div>
        <AddBtn />
      </div>
    );
  }
}

export default PlantFooter;
