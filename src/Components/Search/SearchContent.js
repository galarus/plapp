// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import LeafShape from './SearchAttributes/LeafShape';
import LeafArrangement from './SearchAttributes/LeafArrangement';
import PlantForm from './SearchAttributes/PlantForm';
import LeafType from './SearchAttributes/LeafType';


type LeafTypes = {
  broadleaf: boolean,
  none: boolean,
  needles: boonlean
};
type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean,
  none: boolean
};

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};

type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes,
  leafTypes: LeafTypes
};
type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0.2em;
  width: 75vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
`;

function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { leafTypes, shapes, forms, arrangements } = searchQuery;
  return (
    <SearchContainer>
      <LeafShape shapes={shapes} onSearchChange={onSearchChange('shape')} />
      <LeafArrangement arrangements={arrangements} onSearchChange={onSearchChange('arrangement')} />
      <PlantForm forms={forms} onSearchChange={onSearchChange('form')} />
      <LeafType leafTypes={leafTypes} onSearchChange={onSearchChange('leafType')} />
    </SearchContainer>
  );
}

export default SearchContent;
