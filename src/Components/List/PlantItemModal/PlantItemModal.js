// @flow
import * as React from 'react';
import './PlantList.css';
import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

import type { PlantObject } from '../../../plant_data';

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

type Props = {
  show: boolean,
  onClose: *,
  plant: PlantObject
};
type State = *;

class PlantItemModal extends React.Component<Props, State> {
  state = null;

  render() {
    const { show, plant, onClose } = this.props;

    return (
      <PlantModal style={show === true ? { display: 'block' } : { display: 'none' }}>
        <ModalContent>
          <div className="modal-header">
            <span
              className="close"
              onClick={onClose}
              onKeyDown={onClose}
              role="button"
              tabIndex="-1"
            >
              &times;
            </span>
            <h2>{`${plant.plant_genus} ${plant.plant_species}`}</h2>
          </div>
          <div className="modal-body">
            {plant.abundance && `abundance: ${plant.abundance} `}
            <br />
            {plant.form && ` form: ${plant.form}`}
            <br />
            {plant.habitat && `habitat: ${plant.habitat}`}
            <br />
            {plant.aroma && `aroma: ${plant.aroma}`}
            <br />
          </div>
          <div className="modal-footer">
            <h3>{`${plant.species_code} ${plant.jepson_code}`}</h3>
          </div>
        </ModalContent>
      </PlantModal>
    );
  }
}

export default PlantItemModal;
