// @flow
import * as React from 'react';
import './PlantFooter.css';

type Props = *;
type State = {
  searching: boolean
};

class PlantFooter extends React.Component<Props, State> {
  state = {
    searching: true
  };

  toggleSearching = () => {
    const { searching } = this.state;
    this.setState({ searching: !searching });
  };

  render() {
    const { searching } = this.state;
    return (
      <div className="App">
        <div className="footer">
          <div className="searchHead" onClick={this.toggleSearching}>
            Search ^
          </div>
          {searching ? <div className="searchBody">trait search tbc</div> : null}
        </div>
      </div>
    );
  }
}

export default PlantFooter;
