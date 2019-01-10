// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import '../SearchContent.css';
import SvgArrangementAlternate from '../../svg/arrangements/SvgArrangementAlternate';
import SvgArrangementOpposite from '../../svg/arrangements/SvgArrangementOpposite';
import SvgArrangementBasal from '../../svg/arrangements/SvgArrangementBasal';
import SvgArrangementWhirled from '../../svg/arrangements/SvgArrangementWhirled';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';
import FormItem from './Form/FormItem';

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
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>
          {show ? 'Leaf Arrangement -' : 'Leaf Arrangement +'}
        </FormTitle>

        <FormContent display={show}>
          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>

          <FormItem>
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
          </FormItem>
          <FormItem>
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
          </FormItem>
          <FormItem>
            <input
              name="none"
              type="checkbox"
              checked={arrangements.none}
              onChange={onSearchChange}
            />
            <b>
              <i>none </i>
            </b>
          </FormItem>
        </FormContent>
      </div>
    );
  }
}

export default LeafArrangement;
