// @flow
import * as React from 'react';
import * as ReactList from 'react-list';
import PlantItemModal from './PlantItemModal';
import './PlantList.css';
import type { PlantObject } from '../plant_data';

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
    sortAttr: 'jepson_code',
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
        <div>{plant.plant_genus}</div>
        <div>{plant.plant_species}</div>
        <div>{plant.form}</div>
        <div>{plant.habitat}</div>
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
      <div>
        <a
          style={{ position: 'fixed', zIndex: 1, top: '15%' }}
          // onClick={this.listRef && this.listRef.scrollTo(-5)}
          href="/#"
        >
          Scroll To Top ↑
        </a>
        <div className="header-container">
          <div
            role="button"
            tabIndex="-1"
            onKeyDown={this.toggleTraitSort('plant_genus')}
            onClick={this.toggleTraitSort('plant_genus')}
          >
            Genus
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={this.toggleTraitSort('plant_species')}
            onClick={this.toggleTraitSort('plant_species')}
          >
            Species
          </div>
          <div role="button" tabIndex="-3">
            Form
          </div>
          <div role="button" tabIndex="-4">
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

        {viewingPlant && (
          <PlantItemModal show={viewing} plant={viewingPlant} onClose={this.closeViewModal} />
        )}
      </div>
    );
  }
}
export default PlantList;
