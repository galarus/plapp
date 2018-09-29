// @flow
import * as React from 'react';
import ReactList from 'react-list';
import './PlantList.css';
import type { PlantObject } from '../plant_data';
import plantData from '../plant_data';

type Props = void;
type State = {
  plants: Array<PlantObject>
};
class PlantList extends React.Component<Props, State> {
  state = { plants: [...plantData] };

  renderItem = (index: number, key: string) => {
    const { plants } = this.state;

    return <div key={key}>{plants[index].species_code}</div>;
  };

  render() {
    const { plants } = this.state;
    return (
      <div>
        <h1>Accounts</h1>
        <div style={{ overflow: 'auto', maxHeight: 400 }}>
          <ReactList itemRenderer={this.renderItem} length={plants.length} />
        </div>
      </div>
    );
  }
}
export default PlantList;
