// @flow
import { observable, computed, action } from 'mobx';
import Util from './PlantUtils';
import type { PlantObject } from './plant_data';
import type { AttributeItems } from './AttributeItems';

type SearchQuery = {
  [string]: {
    [string]: boolean
  }
};

class PlantStore {
  util = {};

  constructor(plantData: Array<PlantObject>, attributes: AttributeItems) {
    // set up search query
    this.util = new Util();
    this.plantData = plantData;
    this.attributeItems = attributes;
    this.searchQuery = this.util.createSearchQuery(attributes);
  }

  @observable plantData: Array<PlantObject>;

  @observable attributeItems: AttributeItems;

  @observable searchQuery: SearchQuery;

  @observable searching: boolean = true;

  @computed get attrItemsArray(): Array<any> {
    return Object.entries(this.attributeItems);
  }

  @computed get attrNames(): Array<string> {
    return this.attrItemsArray.map(item => item[0]);
  }

  @computed get attrTitles(): Array<string> {
    return this.attrItemsArray.map(item => item[1].title);
  }

  @computed get searchResults(): Array<PlantObject> {
    return this.util.filterResults(this.searchQuery, this.plantData);
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
