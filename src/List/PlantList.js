// @flow
import * as React from 'react';
import ReactList from 'react-list';
import './PlantList.css';
import type { PlantObject } from '../plant_data';
import plandivata from '../plant_data';

type Props = *; // no props(!)
type State = { plants: Array<PlantObject> };
class PlantList extends React.Component<Props, State> {
  state = { plants: [...plandivata] };

  renderItem = (index: number, key: string) => {
    const { plants } = this.state;

    return (
      <div key={key} className="row-container">
        <div>{plants[index].plant_genus}</div>
        <div>{plants[index].plant_species}</div>
        <div>{plants[index].form}</div>
        <div>{plants[index].habitat}</div>
      </div>
    );
  };

  toggleTraitSort = (trait: string) => {
    console.log('sorting by ' + trait);
  };

  render() {
    const { plants } = this.state;
    return (
      <div
        style={{
          margin: '1.5em 1em',
          overflow: 'auto',
          height: '350vh',
          width: '80vw'
        }}
      >
        <div className="header-container">
          <div
            role="button"
            tabIndex="-1"
            onKeyDown={this.toggleTraitSort('plant_genus')}
            onClick={this.toggleTraitSort('plant_genus')}
          >
            Genus
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={this.toggleTraitSort('plant_species')}
            onClick={this.toggleTraitSort('plant_species')}
          >
            Species
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={this.toggleTraitSort('form')}
            onClick={this.toggleTraitSort('form')}
          >
            Form
          </div>
          <div
            role="button"
            tabIndex="-2"
            onKeyDown={this.toggleTraitSort('habitat')}
            onClick={this.toggleTraitSort('habitat')}
          >
            Habitat
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'blue-gray',
            fontFamily: 'Roboto'
          }}
        >
          <ReactList itemRenderer={this.renderItem} length={plants.length} />
        </div>
      </div>
    );
  }
}
export default PlantList;
