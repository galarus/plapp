// @flow
import type { PlantObject } from './plant_data';
import type { AttributeItems } from './AttributeItems';

type SearchQuery = {
  [string]: {
    [string]: boolean
  }
};

// return array of the names of true attributes
const getAttrQ = (attributeQueryObject): Array<string> => {
  let result = Object.entries(attributeQueryObject)
    .filter(attr => attr[1])
    .map(attr => attr[0]);
  if (result.length === 0) {
    result = Object.entries(attributeQueryObject).map(attr => attr[0]);
  }
  return result;
};

// check if plant meets criteria for one attribute
const checkHasAttr = (plant: PlantObject, attr: string, attrQ: Array<string>): boolean => {
  for (let i = 0; i < attrQ.length; i++) {
    if (plant[attr] === attrQ[i]) return true;
  }
  return false;
};

class Util {
  filterResults = (newQuery: SearchQuery, plantData: Array<PlantObject>): Array<PlantObject> => {
    const attrNames = Object.keys(newQuery);

    const attrQs = Object.entries(newQuery).map(attr => getAttrQ(attr[1]));

    const hasAttrs = attrQs.map((attrQ, i) => (plant: PlantObject): boolean =>
      checkHasAttr(plant, attrNames[i], attrQ)
    );

    return plantData.filter(plant => {
      let result = true;
      hasAttrs.forEach(hasAttr => {
        if (hasAttr(plant) === false) result = false;
      });
      return result;
    });
  };

  createSearchQuery = (attributes: AttributeItems): SearchQuery => {
    const newQ = {};
    const mapItemToQuery = (attr, itemName) => {
      newQ[attr][itemName] = false;
    };
    const getItemsOfAttr = attr => {
      newQ[attr] = {};
      attributes[attr].items.map(item => mapItemToQuery(attr, item.name));
    };
    Object.keys(attributes).map(attr => getItemsOfAttr(attr));
    return newQ;
  };
}
export default Util;