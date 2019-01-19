// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
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
          <FormItem
            attribute={arrangements}
            inputName="alternate"
            SvgItem={<SvgArrangementAlternate />}
            description="One leaf, branch, or flower part attaches at each point or node on the stem, and leaves
            alternate direction, to a greater or lesser degree, along the stem."
            onSearchChange={onSearchChange}
          />
        </FormContent>
      </div>
    );
  }
}

export default LeafArrangement;
