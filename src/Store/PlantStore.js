// @flow
import { observable, computed, action } from 'mobx';

import plantData from './plant_data';
import filterResults from './SearchUtils';
import type { PlantObject } from './plant_data';

import type { AttributeItems } from './AttributeItems';

type SearchQuery = {
  [string]: {
    [string]: boolean
  }
};

class PlantStore {
  constructor(attributes: AttributeItems) {
    // set up search query
    this.searchQuery = {};
    const mapItemToQuery = (attr, itemName) => {
      this.searchQuery[attr][itemName] = false;
    };
    const getItemsOfAttr = attr => {
      this.searchQuery[attr] = {};
      attributes[attr].items.map(item => mapItemToQuery(attr, item.name));
    };
    Object.keys(attributes).map(attr => getItemsOfAttr(attr));
  }

  @observable searching: boolean = true;

  @observable searchQuery: SearchQuery;

  @computed get searchResults(): Array<PlantObject> {
    return filterResults(this.searchQuery, plantData);
  }

  @action.bound
  toggleSearch() {
    this.searching = !this.searching;
  }

  @action.bound
  handleQueryChange = (trait: string) => (event: SyntheticInputEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.searchQuery[trait] = { ...this.searchQuery[trait], [name]: value };
  };
}

export default PlantStore;
