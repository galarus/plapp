// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observer, inject } from 'mobx-react';

import SearchAttribute from './SearchAttribute/SearchAttribute';
import FormItem from './SearchAttribute/Form/FormItem';

import attributeItems from '../../Store/AttributeItems';

const SearchContainer = styled.div`
  text-align: left;
  margin-left: 0em;
  width: 90vw;
  height: 67vh;
  overflow: auto;
  background-color: hsla(${props => props.theme.ebonyClay}, 0);
  color: hsl(${props => props.theme.gallery});
  display: ${props => props.show && 'none'};
`;

const SearchContent = inject('plantStore')(
  observer(({ plantStore, show }) => {
    const { searchQuery, handleQueryChange } = plantStore;
    const { leafTypes, shapes, forms, arrangements, habitats, groups, petals } = searchQuery;
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
      <SearchContainer show={show}>
        <SearchAttribute title="Leaf Arrangement">
          {leafArrangementItems.map(item => (
            <FormItem
              key={item.name}
              attribute={arrangements}
              item={item}
              onSearchChange={handleQueryChange('arrangement')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Leaf Shape">
          {leafShapeItems.map(item => (
            <FormItem
              key={item.name}
              attribute={shapes}
              item={item}
              onSearchChange={handleQueryChange('shape')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Leaf Type">
          {leafTypeItems.map(item => (
            <FormItem
              key={item.name}
              attribute={leafTypes}
              item={item}
              onSearchChange={handleQueryChange('leafType')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Form">
          {plantFormItems.map(item => (
            <FormItem
              key={item.name}
              attribute={forms}
              item={item}
              onSearchChange={handleQueryChange('form')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Leaf Group">
          {leafGroupItems.map(item => (
            <FormItem
              key={item.name}
              attribute={groups}
              item={item}
              onSearchChange={handleQueryChange('group')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Habitat">
          {plantHabitatItems.map(item => (
            <FormItem
              key={item.name}
              attribute={habitats}
              item={item}
              onSearchChange={handleQueryChange('habitat')}
            />
          ))}
        </SearchAttribute>
        <SearchAttribute title="Petals">
          {plantPetalsItems.map(item => (
            <FormItem
              key={item.name}
              attribute={petals}
              item={item}
              onSearchChange={handleQueryChange('petals')}
            />
          ))}
        </SearchAttribute>
      </SearchContainer>
    );
  })
);

export default SearchContent;
