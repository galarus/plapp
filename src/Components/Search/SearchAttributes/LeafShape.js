// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import '../SearchContent.css';
import SvgArrangementAlternate from '../../svg/SvgArrangementAlternate';
import SvgArrangementOpposite from '../../svg/SvgArrangementOpposite';
import SvgArrangementBasal from '../../svg/SvgArrangementBasal';
import SvgArrangementWhirled from '../../svg/SvgArrangementWhirled';

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
          Leaf Shape
        </h3>
        <form className="form-content" css={shoulddisplay}>
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
        </form>
      </div>
    );
  }
}

export default LeafShape;
