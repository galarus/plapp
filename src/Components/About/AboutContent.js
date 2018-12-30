// @flow
import * as React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import AboutBtn from './AboutBtn';

const AboutContainer = styled.div(props => ({
  width: '60%',
  margin: '0% 12%',
  padding: '0px 40px',
  border: '1px dashed black',
  borderRadius: '2em',
  backgroundColor: `hsla(${props.theme.georgiaPeach}, 1)`,
  position: 'fixed',
  zIndex: 2
}));

type Props = *;
type State = {
  show: boolean
};
class AboutContent extends React.Component<Props, State> {
  state = {
    show: false
  };

  toggleShowAbout = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  };
  // sort list only if direction has changed

  render() {
    const { show } = this.state;
    return (
      <div style={{ postion: 'relative' }}>
        <AboutBtn toggleShowAbout={this.toggleShowAbout} />
        <div>
          {show && (
            <AboutContainer>
              <div style={{ opacity: '1' }}>
                <span
                  role="button"
                  tabIndex="-1"
                  onKeyDown={this.toggleShowAbout}
                  onClick={this.toggleShowAbout}
                  style={{
                    float: 'right',
                    marginRight: '6vw',
                    marginTop: '6vh',
                    borderRadius: '10px',
                    width: '20px',
                    height: '20px',
                    border: '1px solid black'
                  }}
                >
                  &#10005;
                </span>
                <br />
                <br />

                <p style={{ textAlign: 'left' }}>
                  <span style={{ paddingLeft: '2em' }} />
                  This app will help you identify plants that you see based on entering their
                  characteristics. Click on the selections and you’ll filter the database to only
                  show species that match your selections.
                </p>
              </div>
            </AboutContainer>
          )}
        </div>
      </div>
    );
  }
}
export default AboutContent;
