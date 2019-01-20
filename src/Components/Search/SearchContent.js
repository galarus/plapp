// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';

import SearchAttribute from './SearchAttribute/SearchAttribute';
import FormItem from './SearchAttribute/Form/FormItem';
import type { SearchQuery } from '../../SearchQuery';

import attributeItems from './AttributeItems';

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0.2em;
  width: 75vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
`;

type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};
function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { leafTypes, shapes, forms, arrangements } = searchQuery;
  const {
    leafArrangementItems,
    leafShapeItems,
    leafTypeItems,
    plantFormItems,
    leafGroupItems,
    plantHabitatItems,
    plantPetalsItems
  } = attributeItems;
  return (
    <SearchContainer>
      <SearchAttribute title="Leaf Arrangement">
        {leafArrangementItems.map(item => (
          <FormItem
            attribute={arrangements}
            item={item}
            onSearchChange={onSearchChange('arrangement')}
          />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Leaf Shape">
        {leafShapeItems.map(item => (
          <FormItem attribute={shapes} item={item} onSearchChange={onSearchChange('shape')} />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Leaf Type">
        {leafTypeItems.map(item => (
          <FormItem attribute={leafTypes} item={item} onSearchChange={onSearchChange('leafType')} />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Form">
        {plantFormItems.map(item => (
          <FormItem attribute={forms} item={item} onSearchChange={onSearchChange('form')} />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Leaf Group">
        {leafGroupItems.map(item => (
          <FormItem attribute={shapes} item={item} onSearchChange={onSearchChange('lf_group')} />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Habitat">
        {plantHabitatItems.map(item => (
          <FormItem attribute={leafTypes} item={item} onSearchChange={onSearchChange('habitat')} />
        ))}
      </SearchAttribute>
      <SearchAttribute title="Petals">
        {plantPetalsItems.map(item => (
          <FormItem attribute={forms} item={item} onSearchChange={onSearchChange('petals')} />
        ))}
      </SearchAttribute>
    </SearchContainer>
  );
}

export default SearchContent;
