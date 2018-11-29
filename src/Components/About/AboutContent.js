// @flow
import * as React from 'react';
import AboutBtn from './AboutBtn';

type Props = *;
type State = {
  show: boolean
};
class AboutContent extends React.Component<Props, State> {
  state = {
    show: true
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
        <span
          style={{
            position: 'absolute',
            right: '0em',
            top: '-2.3em',
            boxShadow: '10em'
          }}
          role="button"
          tabIndex="-100"
          onKeyDown={this.toggleShowAbout}
          onClick={this.toggleShowAbout}
        >
          <AboutBtn />
        </span>
        <div>
          {show ? (
            <div
              style={{
                width: '60%',
                margin: 'auto',
                padding: '0px 40px',
                border: '1px dashed black',
                borderRadius: '2em'
              }}
            >
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
                characteristics. Click on the selections and you’ll filter the database to only show
                species that match your selections.
              </p>
            </div>
          ) : (
            <div>nothing</div>
          )}
        </div>
      </div>
    );
  }
}
export default AboutContent;
