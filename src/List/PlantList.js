// @flow
import * as React from 'react';
import ReactList from 'react-list';
import './PlantList.css';
import type { PlantObject } from '../plant_data';
import plantData from '../plant_data';

type Props = *; // no props(!)
type State = {
  plants: Array<PlantObject>,
  sortAttr: string,
  sortDir: number
};
class PlantList extends React.Component<Props, State> {
  state = {
    plants: [...plantData],
    sortAttr: 'jepson_code',
    sortDir: 0
  };

  // sort list only if direction has changed
  sortList = (sortAttr: string, sortDir: number): Array<PlantObject> => {
    const { plants } = this.state;
    if (sortDir === 1) {
      return plants.sort(
        (a, b) =>
          sortAttr === 'jepson_code'
            ? a[sortAttr] - b[sortAttr]
            : a[sortAttr].toString().localeCompare(b[sortAttr])
      );
    }
    if (sortDir === -1) {
      return plants.sort(
        (a, b) =>
          sortAttr === 'jepson_code'
            ? b[sortAttr] - a[sortAttr]
            : b[sortAttr].toString().localeCompare(a[sortAttr])
      );
    }
  };

  renderItem = (index: number, key: string) => {
    const { plants } = this.state;
    console.log('rendering list');
    return (
      <div key={key} className="row-container">
        <div>{plants[index].plant_genus}</div>
        <div>{plants[index].plant_species}</div>
        <div>{plants[index].form}</div>
        <div>{plants[index].habitat}</div>
      </div>
    );
  };

  toggleTraitSort = (attr: string) => {
    const { sortAttr, sortDir } = this.state;
    const newDirection = sortDir === 0 || sortDir === -1 || sortAttr !== attr ? 1 : -1;
    console.log(`calling toggle sort from ${sortDir} to ${newDirection}`);
    const newPlants = this.sortList(attr, newDirection);
    this.setState({
      sortAttr: attr,
      sortDir: newDirection,
      plants: newPlants
    });
  };
  // Se

  listRef: ?HTMLElement;

  render() {
    const { plants } = this.state;
    return (
      <div
        style={{
          margin: '1.5em 1em',
          overflow: 'auto',
          height: '350vh',
          width: '80vw'
        }}
      >
        <a
          style={{ position: 'fixed', zIndex: 1, top: '15%' }}
          onClick="listRef.scrollTo(0)"
          href="/#"
        >
          Scroll To Top ↑
        </a>
        <div className="header-container">
          <div
            role="button"
            tabIndex="-1"
            onKeyDown={() => this.toggleTraitSort('plant_genus')}
            onClick={() => this.toggleTraitSort('plant_genus')}
          >
            Genus
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={() => this.toggleTraitSort('plant_species')}
            onClick={() => this.toggleTraitSort('plant_species')}
          >
            Species
          </div>
          <div
            role="button"
            tabIndex="-3"
            onKeyDown={() => this.toggleTraitSort('form')}
            onClick={() => this.toggleTraitSort('form')}
          >
            Form
          </div>
          <div
            role="button"
            tabIndex="-4"
            onKeyDown={() => this.toggleTraitSort('habitat')}
            onClick={() => this.toggleTraitSort('habitat')}
          >
            Habitat
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'blue-gray',
            fontFamily: 'Roboto'
          }}
        >
          <ReactList itemRenderer={this.renderItem} length={plants.length} type="uniform" />
        </div>
      </div>
    );
  }
}
export default PlantList;
