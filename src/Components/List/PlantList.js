// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observer, inject } from 'mobx-react';

import PlantItemModal from './PlantItemModal/PlantItemModal';
import type { PlantObject } from '../../Store/plant_data';
import PlantListItem from './PlantListItem';
import PlantListHeader from './PlantListHeader';
import type PlantStore from '../../Store/PlantStore';

const PlantListContainer = styled.div`
  height: 67vh;
  overflow: auto;
  display: ${props => props.show && 'none'};
`;

type Props = {
  searchResults: Array<PlantObject>,
  show: boolean,
  plantStore?: PlantStore
};
type State = {
  sortAttr: string,
  sortDir: number,
  viewing: boolean,
  viewingPlant: ?PlantObject
};

@inject('plantStore')
@observer
class PlantList extends React.Component<Props, State> {
  state = {
    sortAttr: 'plant_genus',
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

  renderItem = (plant: PlantObject, attrNames: Array<string>) => (
    <PlantListItem
      key={plant.jepson_code.toString()}
      viewFunction={this.openViewModal(plant)}
      plant={plant}
      attrNames={attrNames}
    />
  );

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

  render() {
    const { viewing, viewingPlant } = this.state;
    const plants = this.sortList();
    const { attrNames, attrTitles } = this.props.plantStore;
    return (
      <PlantListContainer show={this.props.show}>
        <PlantListHeader
          sortFunction={this.toggleTraitSort}
          attrNames={attrNames}
          attrTitles={attrTitles}
        />
        <div
          style={{
            backgroundColor: 'blue-gray',
            fontFamily: 'Roboto'
          }}
        >
          {plants.map(plant => this.renderItem(plant, attrNames))}
        </div>
        {viewingPlant && (
          <PlantItemModal show={viewing} plant={viewingPlant} onClose={this.closeViewModal} />
        )}
      </PlantListContainer>
    );
  }
}
export default PlantList;
