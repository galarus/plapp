// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import type { PlantObject } from '../../Store/plant_data';
import attributeItems from '../../Store/AttributeItems';

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 108, 57, 0);
  overflow: auto;
  width: 90vw;
  margin: 0.2em;
  padding: 0em 2em 0em 0.1em;
  border-radius: 0.3em;
  color: ${props => props.theme.fallingStar};

  div {
    width: 15em;
    margin: 0.3em;
    padding: 0.1em;
    text-align: center;
    line-height: 0.85em;
    font-size: 0.7em;
  }

  :nth-of-type(odd) {
    background-color: hsla(${props => props.theme.ebonyClay}, 0.8);
  }

  :nth-of-type(odd) > div {
    border: 1px;
    border-color: black;
  }
`;

type Props = {
  viewFunction: *,
  plant: PlantObject,
  attrNames: Array<string>
};

const PlantListItem = (props: Props) => {
  const { viewFunction, plant, attrNames } = props;
  const renderPlantCell = attrName => <div>{plant[attrName]}</div>;

  return (
    <ListItemContainer role="button" tabIndex="0" onKeyDown={viewFunction} onClick={viewFunction}>
      <div>{`${plant.plant_genus} ${plant.plant_species}`}</div>

      {attrNames.map(attrName => renderPlantCell(attrName))}
    </ListItemContainer>
  );
};

export default PlantListItem;
