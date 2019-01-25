// @flow
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import type { PlantObject } from '../../Store/plant_data';

const ListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 108, 57, 0);
  overflow: visible;
  width: 75vw;
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

  :nth-child(odd) {
    background-color: hsla(${props => props.theme.ebonyClay}, 0.8);
  }

  :nth-child(odd) > div {
    border: 1px;
    border-color: black;
  }
`;

type Props = {
  viewFunction: *,
  plant: PlantObject
};

const PlantListItem = (props: Props) => {
  const { viewFunction, plant } = props;

  return (
    <ListItemContainer role="button" tabIndex="0" onKeyDown={viewFunction} onClick={viewFunction}>
      <div>{`${plant.plant_genus} ${plant.plant_species}`}</div>
      <div>{plant.lf_shape}</div>
      <div>{plant.lf_arngmt}</div>
      <div>{plant.form}</div>
      <div>{plant.lf_type}</div>
      <div>{plant.lf_group}</div>
      <div>{plant.habitat}</div>
      <div>{plant.petals}</div>
    </ListItemContainer>
  );
};

export default PlantListItem;
