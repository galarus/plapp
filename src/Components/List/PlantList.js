// @flow
import * as React from 'react';
import PlantItemModal from './PlantItemModal';
import './PlantList.css';
import type { PlantObject } from '../../plant_data';

type Props = {
  searchResults: Array<PlantObject>
};
type State = {
  sortAttr: string,
  sortDir: number,
  viewing: boolean,
  viewingPlant: ?PlantObject
};
class PlantList extends React.Component<Props, State> {
  state = {
    sortAttr: '',
    sortDir: 0,
    viewing: true,
    viewingPlant: null
  };

  openViewModal = (plant: PlantObject) => (e: Event) => {
    e.stopPropagation();
    this.setState({ viewing: true, viewingPlant: plant });
  };

  closeViewModal = (e: Event) => {
    e.stopPropagation();
    this.setState({ viewing: false });
  };

  // sort list only if direction has changed
  sortList = (): Array<PlantObject> => {
    const { sortAttr, sortDir } = this.state;
    const { searchResults } = this.props;
    const plants = searchResults;
    if (sortDir === 1) {
      return plants.sort((a, b) => a[sortAttr].toString().localeCompare(b[sortAttr]));
    }
    if (sortDir === -1) {
      return plants.sort((a, b) => b[sortAttr].toString().localeCompare(a[sortAttr]));
    }
    return plants;
  };

  renderItem = (index: number, key: string) => {
    const { searchResults } = this.props;
    const plants = searchResults;
    const plant = plants[index];
    console.log('rendering list');
    return (
      <div
        key={key}
        className="row-container"
        role="button"
        tabIndex="-1"
        onKeyDown={this.openViewModal(plant)}
        onClick={this.openViewModal(plant)}
      >
        <div>{`${plant.plant_genus} ${plant.plant_species}`}</div>
        <div>{plant.lf_shape}</div>
        <div>{plant.lf_arngmt}</div>
        <div>{plant.form}</div>
      </div>
    );
  };

  toggleTraitSort = (attr: string) => (e: Event) => {
    e.stopPropagation();
    const { sortAttr, sortDir } = this.state;
    const newDirection = sortDir === 0 || sortDir === -1 || sortAttr !== attr ? 1 : -1;
    console.log(`calling toggle sort from ${sortDir} to ${newDirection}`);
    this.setState({
      sortAttr: attr,
      sortDir: newDirection
    });
  };

  listRef: ?ReactList;

  render() {
    const { viewing, viewingPlant } = this.state;
    const plants = this.sortList();

    return (
      <div style={{ maxHeight: '67vh', overflow: 'auto' }}>
        <div className="header-container">
          <div
            role="button"
            tabIndex="-1"
            onKeyDown={this.toggleTraitSort('plant_genus')}
            onClick={this.toggleTraitSort('plant_genus')}
          >
            genus species
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={this.toggleTraitSort('lf_shape')}
            onClick={this.toggleTraitSort('lf_shape')}
          >
            leaf shape
          </div>
          <div
            role="button"
            tabIndex="-3"
            onKeyDown={this.toggleTraitSort('lf_arngmt')}
            onClick={this.toggleTraitSort('lf_arngmt')}
          >
            leaf arrangement
          </div>
          <div
            role="button"
            tabIndex="-4"
            onKeyDown={this.toggleTraitSort('form')}
            onClick={this.toggleTraitSort('form')}
          >
            leaf form
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'blue-gray',
            fontFamily: 'Roboto'
          }}
        >
          {plants.map((plant, i) => this.renderItem(i, plant.jepson_code))}
        </div>

        {viewingPlant && (
          <PlantItemModal show={viewing} plant={viewingPlant} onClose={this.closeViewModal} />
        )}
      </div>
    );
  }
}
export default PlantList;
