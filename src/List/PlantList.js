// @flow
import * as React from 'react';
import ReactList from 'react-list';
import './PlantList.css';
import type { PlantObject } from '../plant_data';
import plandivata from '../plant_data';

type Props = *; // no props(!)
type State = { plants: Array<PlantObject> };
class PlantList extends React.Component<Props, State> {
  state = { plants: [...plandivata] };

  renderItem = (index: number, key: string) => {
    const { plants } = this.state;

    return (
      <div key={key} className="row-container">
        <div>{plants[index].plant_genus}</div>
        <div>{plants[index].plant_species}</div>
        <div>{plants[index].abundance}</div>
        <div>{plants[index].form}</div>
        <div>{plants[index].habitat}</div>
      </div>
    );
  };

  render() {
    const { plants } = this.state;
    return (
      <div style={{ margin: '1em 2em', overflow: 'auto' }}>
        <div className="header-container">
          <div>Genus</div>
          <div>Species</div>
          <div>Abundance</div>
          <div>Form</div>
          <div>Habitat</div>
        </div>
        <div
          style={{
            overflow: 'auto',
            maxHeight: '50vh',
            backgroundColor: 'blue-gray',
            fontFamily: 'Roboto'
          }}
        >
          <ReactList itemRenderer={this.renderItem} length={plants.length} />
        </div>
      </div>
    );
  }
}
export default PlantList;
