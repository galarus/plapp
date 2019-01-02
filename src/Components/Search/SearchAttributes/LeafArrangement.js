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

type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean,
  none: boolean
};
type Props = {
  arrangements: Arrangements,
  onSearchChange: *
};
type State = {
  show: boolean
};

class LeafArrangement extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { arrangements, onSearchChange } = this.props;
    const { show } = this.state;
    const shoulddisplay =
      !show &&
      css`
        display: none;
      `;
    return (
      <div>
        <h3 className="form-title" onClick={this.toggleShow}>
          {show ? 'Leaf Arrangement -' : 'Leaf Arrangement +'}
        </h3>

        <form className="form-content" css={shoulddisplay}>
          <div className="form-item">
            <input
              name="alternate"
              type="checkbox"
              checked={arrangements.alternate}
              onChange={onSearchChange}
            />
            <SvgArrangementAlternate style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
            <b>
              <i>alternate: </i>
            </b>
            One leaf, branch, or flower part attaches at each point or node on the stem, and leaves
            alternate direction, to a greater or lesser degree, along the stem.
          </div>
          <div className="form-item">
            <input
              name="opposite"
              type="checkbox"
              checked={arrangements.opposite}
              onChange={onSearchChange}
            />
            <SvgArrangementOpposite style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
            <b>
              <i> opposite: </i>
            </b>
            Two leaves, branches, or flower parts attach at each point or node on the stem.
          </div>

          <div className="form-item">
            <input
              name="whirled"
              type="checkbox"
              checked={arrangements.whirled}
              onChange={onSearchChange}
            />
            <SvgArrangementWhirled style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
            <b>
              <i> whirled: </i>
            </b>
            Three or more leaves, branches, or flower parts attach at each point or node on the
            stem.
          </div>
          <div className="form-item">
            <input
              name="basal"
              type="checkbox"
              checked={arrangements.basal}
              onChange={onSearchChange}
            />
            <SvgArrangementBasal style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
            <b>
              <i>basal: </i>
            </b>
            Arising from the base of the stem.
          </div>
          <div className="form-item">
            <input
              name="none"
              type="checkbox"
              checked={arrangements.none}
              onChange={onSearchChange}
            />
            <b>
              <i>none </i>
            </b>
          </div>
        </form>
      </div>
    );
  }
}

export default LeafArrangement;
