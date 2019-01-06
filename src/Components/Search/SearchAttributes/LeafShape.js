// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import '../SearchContent.css';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};

type Props = {
  shapes: Shapes,
  onSearchChange: *
};
type State = {
  show: boolean
};

class LeafShape extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { shapes, onSearchChange } = this.props;
    const { show } = this.state;
    const shoulddisplay =
      !show &&
      css`
        display: none;
      `;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{show ? 'Leaf Shape -' : 'Leaf Shape +'}</FormTitle>
        <FormContent css={shoulddisplay}>
          <div className="form-item">
            <input name="ovate" type="checkbox" checked={shapes.ovate} onChange={onSearchChange} />
            <b>
              <i>ovate:</i>
            </b>
          </div>
          <div className="form-item">
            <input
              name="lanceolate"
              type="checkbox"
              checked={shapes.lanceolate}
              onChange={onSearchChange}
            />
            <b>
              <i> lanceolate:</i>
            </b>
          </div>
          <div className="form-item">
            <input
              name="obovate"
              type="checkbox"
              checked={shapes.obovate}
              onChange={onSearchChange}
            />
            <b>
              <i> obovate:</i>
            </b>
          </div>
          <div className="form-item">
            <input
              name="cordate"
              type="checkbox"
              checked={shapes.cordate}
              onChange={onSearchChange}
            />
            <b>
              <i> cordate:</i>
            </b>
          </div>
          <div className="form-item">
            <input
              name="linear"
              type="checkbox"
              checked={shapes.linear}
              onChange={onSearchChange}
            />
            <b>
              <i> linear:</i>
            </b>
          </div>
        </FormContent>
      </div>
    );
  }
}

export default LeafShape;
