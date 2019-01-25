// @flow
import * as React from 'react';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core';

import type { PlantObject } from '../../../Store/plant_data';

const PlantModal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const zoom = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const ModalContent = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: ${zoom};
  animation-duration: 0.4s;
`;
const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: hsla(${props => props.theme.keppel}, 1);
  color: hsla(${props => props.theme.gallery}, 1);
`;

const ModalBody = styled.div`
  padding: 2px 16px;
  background-color: hsla(${props => props.theme.oasisStream}, 1);
  color: hsla(${props => props.theme.shipsOfficer}, 1);
`;

const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: hsla(${props => props.theme.keppel}, 1);
  color: hsla(${props => props.theme.gallery}, 1);
`;
const Close = styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;

  :hover,
  :focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
type Props = {
  show: boolean,
  onClose: *,
  plant: PlantObject
};

const PlantItemModal = (props: Props) => {
  const { show, plant, onClose } = props;

  return (
    <PlantModal style={show === true ? { display: 'block' } : { display: 'none' }}>
      <ModalContent>
        <ModalHeader>
          <Close onClick={onClose} onKeyDown={onClose} role="button" tabIndex="-1">
            &times;
          </Close>
          <h2>{`${plant.plant_genus} ${plant.plant_species}`}</h2>
        </ModalHeader>
        <ModalBody>
          {plant.abundance && `abundance: ${plant.abundance} `}
          <br />
          {plant.form && ` form: ${plant.form}`}
          <br />
          {plant.habitat && `habitat: ${plant.habitat}`}
          <br />
          {plant.aroma && `aroma: ${plant.aroma}`}
          <br />
        </ModalBody>
        <ModalFooter>
          <h3>{`${plant.species_code} ${plant.jepson_code}`}</h3>
        </ModalFooter>
      </ModalContent>
    </PlantModal>
  );
};

export default PlantItemModal;
