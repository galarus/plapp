// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import FormContent from './Form/FormContent';
import FormTitle from './Form/FormTitle';

type Props = {
  title: string,
  children: *
};
type State = {
  show: boolean
};

class SearchAttribute extends React.Component<Props, State> {
  state = { show: false };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  render() {
    const { title, children } = this.props;
    const { show } = this.state;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{show ? `${title} -` : `${title} +`}</FormTitle>

        <FormContent display={show}>{children}</FormContent>
      </div>
    );
  }
}

export default SearchAttribute;
