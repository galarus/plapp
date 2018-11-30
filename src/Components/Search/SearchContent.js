// @flow
import * as React from 'react';

type Shapes = {
  ovate: boolean,
  lanceolate: boolean,
  obovate: boolean,
  cordate: boolean,
  linear: boolean
};
type Arrangements = {
  basal: boolean,
  whirled: boolean,
  alternate: boolean,
  opposite: boolean
};
type Forms = {
  grass: boolean,
  forb: boolean,
  tree: boolean,
  parasite: boolean
};
type Props = *;
type State = {
  shapes: Shapes,
  arrangements: Arrangements,
  forms: Forms
};
class SearchContent extends React.Component<Props, State> {
  state = {
    shapes: {
      ovate: false,
      lanceolate: false,
      obovate: false,
      cordate: false,
      linear: false
    },
    arrangements: {
      basal: false,
      whirled: false,
      alternate: false,
      opposite: false
    },
    forms: {
      grass: false,
      forb: false,
      tree: false,
      parasite: false
    }
  };

  handleShapeChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      shapes: { [name]: value }
    });
  };

  handleArrangementChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      arrangements: { [name]: value }
    });
  };

  handleFormChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      forms: { [name]: value }
    });
  };

  render() {
    const { shapes, arrangements, forms } = this.state;
    return (
      <div
        style={{
          textAlign: 'left',
          marginLeft: '10em',
          marginRight: '10em',
          marginTop: '1em',
          width: '60vw',
          padding: '0.5em 2em',
          backgroundColor: 'blue',
          borderWidth: '2px',
          borderStyle: 'inset'
        }}
      >
        <h3>Leaf Shape</h3>
        <form>
          <div>
            ovate:
            <input
              name="ovate"
              type="checkbox"
              checked={shapes.ovate}
              onChange={this.handleShapeChange}
            />
          </div>
        </form>
        <h3>Leaf Arrangement</h3>
        <form>
          <div>
            basal:
            <input
              name="basal"
              type="checkbox"
              checked={arrangements.basal}
              onChange={this.handleArrangementChange}
            />
          </div>
        </form>
        <h3>Form</h3>
        <form>
          <div>
            grass:
            <input
              name="grass"
              type="checkbox"
              checked={forms.grass}
              onChange={this.handleFormChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SearchContent;
