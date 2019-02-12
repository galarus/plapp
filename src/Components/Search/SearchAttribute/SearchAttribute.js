// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import FormTitle from './Form/FormTitle';

const FormContent = styled.div`
  width: 100%;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: hsla(${props => props.theme.ebonyClay}, 0.5);
  @media (max-width: 777px) {
    display: ${props => (props.show ? 'block' : 'none')};
  }
`;

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

        <FormContent show={show}>{children}</FormContent>
      </div>
    );
  }
}

export default SearchAttribute;
