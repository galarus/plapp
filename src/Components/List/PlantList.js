// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import PlantItemModal from './PlantItemModal/PlantItemModal';
import type { PlantObject } from '../../Store/plant_data';
import PlantListItem from './PlantListItem';
import PlantListHeader from './PlantListHeader';
import ListHeaderItem from './ListHeaderItem';

const PlantListContainer = styled.div`
  height: 67vh;
  overflow: auto;
  display: ${props => props.show && 'none'};
`;

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

  renderItem(index: number, key: string) {
    const { searchResults } = this.props;
    const plants = searchResults;
    const plant = plants[index];
    console.log('rendering list');
    return (
      <PlantListItem
        key={key}
        viewFunction={this.openViewModal(plant)}
        plant={plant}      
      />
    );
  }

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
      <PlantListContainer show={this.props.show}>
        <PlantListHeader>
          <ListHeaderItem
            title="genus species"
            toggleFunction={this.toggleTraitSort('plant_genus')}
          />
          <ListHeaderItem title="leaf shape" toggleFunction={this.toggleTraitSort('lf_shape')} />
          <ListHeaderItem
            title="leaf arrangement"
            toggleFunction={this.toggleTraitSort('lf_arngmt')}
          />
          <ListHeaderItem title="leaf form" toggleFunction={this.toggleTraitSort('form')} />
          <ListHeaderItem title="leaf type" toggleFunction={this.toggleTraitSort('lf_type')} />
          <ListHeaderItem title="leaf group" toggleFunction={this.toggleTraitSort('lf_group')} />
          <ListHeaderItem title="habitat" toggleFunction={this.toggleTraitSort('habitat')} />
          <ListHeaderItem title="petals" toggleFunction={this.toggleTraitSort('petals')} />
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
      </PlantListContainer>
    );
  }
}
export default PlantList;
