// @flow
import * as React from 'react';
import './PlantList.css';
import type { PlantObject } from '../plant_data';

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
      <div className="modal" style={show === true ? { display: 'block' } : { display: 'none' }}>
        <div className="modal-content">
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
        </div>
      </div>
    );
  }
}

export default PlantItemModal;
