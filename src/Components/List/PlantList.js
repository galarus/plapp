// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observable } from 'mobx';
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

@inject('plantStore')
@observer
class PlantList extends React.Component<Props, *> {
  @observable sortAttr: string = 'plant_genus';

  @observable sortDir: number = 0;

  @observable viewing: boolean = true;

  @observable viewingPlant: ?PlantObject = null;

  openViewModal = (plant: PlantObject) => (e: Event) => {
    e.stopPropagation();
    this.viewing = true;
    this.viewingPlant = plant;
  };

  closeViewModal = (e: Event) => {
    e.stopPropagation();
    this.viewing = false;
  };

  // sort list only if direction has changed
  sortList = (): Array<PlantObject> => {
    const { searchResults } = this.props;
    const plants = searchResults;
    if (this.sortDir === 1) {
      return plants.sort((a, b) => a[this.sortAttr].toString().localeCompare(b[this.sortAttr]));
    }
    if (this.sortDir === -1) {
      return plants.sort((a, b) => b[this.sortAttr].toString().localeCompare(a[this.sortAttr]));
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
    const newDirection =
      this.sortDir === 0 || this.sortDir === -1 || this.sortAttr !== attr ? 1 : -1;
    console.log(`calling toggle sort from ${this.sortDir} to ${newDirection}`);
    this.sortAttr = attr;
    this.sortDir = newDirection;
  };

  render() {
    const plants = this.sortList();
    const { attrNames, attrTitles } = (this.props.plantStore: any);
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
        {this.viewingPlant && (
          <PlantItemModal
            show={this.viewing}
            plant={this.viewingPlant}
            onClose={this.closeViewModal}
          />
        )}
      </PlantListContainer>
    );
  }
}
export default PlantList;
