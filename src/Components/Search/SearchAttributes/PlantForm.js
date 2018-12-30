// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import '../SearchContent.css';

type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type Props = {
  forms: Forms,
  onSearchChange: *
};
type State = {
  show: boolean
};

class PlantForm extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { forms, onSearchChange } = this.props;
    const { show } = this.state;
    const shoulddisplay = show
      ? css`
          display: block;
        `
      : css`
          display: none;
        `;
    return (
      <div>
        <h3 className="form-title" onClick={this.toggleShow}>
          Form
        </h3>
        <form className="form-content" css={shoulddisplay}>
          <div className="form-item">
            <input name="grass" type="checkbox" checked={forms.grass} onChange={onSearchChange} />
            <b>
              <i> grass:</i>
            </b>
          </div>
          <div className="form-item">
            <input name="forb" type="checkbox" checked={forms.forb} onChange={onSearchChange} />
            <b>
              <i> forb:</i>
            </b>
          </div>
          <div className="form-item">
            <input name="tree" type="checkbox" checked={forms.tree} onChange={onSearchChange} />
            <b>
              <i> tree:</i>
            </b>
          </div>
          <div className="form-item">
            <input
              name="parasite"
              type="checkbox"
              checked={forms.parasite}
              onChange={onSearchChange}
            />
            <b>
              <i> parasite:</i>
            </b>
          </div>
        </form>
      </div>
    );
  }
}

export default PlantForm;
