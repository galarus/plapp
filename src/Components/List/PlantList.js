// @flow
import * as React from 'react';
import PlantItemModal from './PlantItemModal/PlantItemModal';
import type { PlantObject } from '../../plant_data';
import PlantListItem from './PlantListItem';
import PlantListHeader from './PlantListHeader';

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
      <PlantListItem
        key={key}
        role="button"
        tabIndex="-1"
        onKeyDown={this.openViewModal(plant)}
        onClick={this.openViewModal(plant)}
      >
        <div>{`${plant.plant_genus} ${plant.plant_species}`}</div>
        <div>{plant.lf_shape}</div>
        <div>{plant.lf_arngmt}</div>
        <div>{plant.form}</div>
        <div>{plant.lf_type}</div>
        <div>{plant.lf_group}</div>
        <div>{plant.habitat}</div>
        <div>{plant.petals}</div>
      </PlantListItem>
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
      <div style={{ height: '67vh', overflow: 'auto' }}>
        <PlantListHeader>
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
          <div
            role="button"
            tabIndex="-5"
            onKeyDown={this.toggleTraitSort('lf_type')}
            onClick={this.toggleTraitSort('lf_type')}
          >
            leaf type
          </div>
          <div
            role="button"
            tabIndex="-6"
            onKeyDown={this.toggleTraitSort('lf_group')}
            onClick={this.toggleTraitSort('lf_group')}
          >
            leaf group
          </div>
          <div
            role="button"
            tabIndex="-7"
            onKeyDown={this.toggleTraitSort('habitat')}
            onClick={this.toggleTraitSort('habitat')}
          >
            habitat
          </div>
          <div
            role="button"
            tabIndex="-8"
            onKeyDown={this.toggleTraitSort('petals')}
            onClick={this.toggleTraitSort('petals')}
          >
            petals
          </div>
        </PlantListHeader>
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
