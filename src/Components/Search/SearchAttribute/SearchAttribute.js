// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
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

@observer
class SearchAttribute extends React.Component<Props, *> {
  @observable show: boolean = false;

  toggleShow = () => {
    this.show = !this.show;
  };

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <FormTitle onClick={this.toggleShow}>{this.show ? `${title} -` : `${title} +`}</FormTitle>

        <FormContent show={this.show}>{children}</FormContent>
      </div>
    );
  }
}

export default SearchAttribute;
