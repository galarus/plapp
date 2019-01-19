// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';
import FormItem from './Form/FormItem';

type LeafTypes = {
  broadleaf: boolean,
  none: boolean,
  needles: boolean
};
type Props = {
  leafTypes: LeafTypes,
  onSearchChange: *
};
type State = {
  show: boolean
};

class LeafType extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { leafTypes, onSearchChange } = this.props;
    const { show } = this.state;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{show ? 'Leaf Types -' : 'Leaf Types +'}</FormTitle>
        <FormContent display={show} />
      </div>
    );
  }
}

export default LeafType;
