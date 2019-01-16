// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import '../SearchContent.css';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';
import FormItem from './Form/FormItem';

type LeafTypes = {
    broadleaf: boolean,
    none: boolean,
    needles: boonlean
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
        <FormContent display={show}>
          <FormItem>
            <input name="broadleaf" type="checkbox" checked={leafTypes.broadleaf} onChange={onSearchChange} />
            <b>
              <i> broadleaf:</i>
            </b>
          </FormItem>
          <FormItem>
            <input name="needles" type="checkbox" checked={leafTypes.needles} onChange={onSearchChange} />
            <b>
              <i> needles:</i>
            </b>
          </FormItem>
          <FormItem>
            <input name="none" type="checkbox" checked={leafTypes.none} onChange={onSearchChange} />
            <b>
              <i> none:</i>
            </b>
          </FormItem>
        </FormContent>
      </div>
    );
  }
}

export default LeafType;
