// @flow
import * as React from 'react';
import './SearchContent.css';

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
type SearchQuery = {
  forms: Forms,
  arrangements: Arrangements,
  shapes: Shapes
};
type Props = {
  searchQuery: SearchQuery,
  onSearchChange: *
};

function SearchContent(props: Props) {
  const { searchQuery, onSearchChange } = props;
  const { shapes, forms, arrangements } = searchQuery;
  return (
    <div className="search-content">
      <h3 className="form-title">Leaf Shape</h3>
      <form className="form-content">
        <div className="form-item">
          <input
            name="ovate"
            type="checkbox"
            checked={shapes.ovate}
            onChange={onSearchChange('shape')}
          />
          ovate:
          <p>ergseg srtg sg wth eyjeyhdfgh q4gt adfwyh rths hsrths r</p>
        </div>
        <div className="form-item">
          <input
            name="lanceolate"
            type="checkbox"
            checked={shapes.lanceolate}
            onChange={onSearchChange('shape')}
          />
          lanceolate:
        </div>
        <div className="form-item">
          <input
            name="obovate"
            type="checkbox"
            checked={shapes.obovate}
            onChange={onSearchChange('shape')}
          />
          obovate:
        </div>
        <div className="form-item">
          <input
            name="cordate"
            type="checkbox"
            checked={shapes.cordate}
            onChange={onSearchChange('shape')}
          />
          cordate:
        </div>
        <div className="form-item">
          <input
            name="linear"
            type="checkbox"
            checked={shapes.linear}
            onChange={onSearchChange('shape')}
          />
          linear:
        </div>
      </form>
      <br />
      <h3 className="form-title">Leaf Arrangement</h3>
      <form className="form-content">
        <div className="form-item">
          <input
            name="basal"
            type="checkbox"
            checked={arrangements.basal}
            onChange={onSearchChange('arrangement')}
          />
          basal:
        </div>
        <div className="form-item">
          <input
            name="whirled"
            type="checkbox"
            checked={arrangements.whirled}
            onChange={onSearchChange('arrangement')}
          />
          whirled:
        </div>
        <div className="form-item">
          <input
            name="alternate"
            type="checkbox"
            checked={arrangements.alternate}
            onChange={onSearchChange('arrangement')}
          />
          alternate:
        </div>
        <div className="form-item">
          <input
            name="opposite"
            type="checkbox"
            checked={arrangements.opposite}
            onChange={onSearchChange('arrangement')}
          />
          opposite:
        </div>
      </form>
      <h3 className="form-title">Form</h3>
      <form className="form-content">
        <div className="form-item">
          <input
            name="grass"
            type="checkbox"
            checked={forms.grass}
            onChange={onSearchChange('form')}
          />
          grass:
        </div>
        <div className="form-item">
          <input
            name="forb"
            type="checkbox"
            checked={forms.forb}
            onChange={onSearchChange('form')}
          />
          forb:
        </div>
        <div className="form-item">
          <input
            name="tree"
            type="checkbox"
            checked={forms.tree}
            onChange={onSearchChange('form')}
          />
          tree:
        </div>
        <div className="form-item">
          <input
            name="parasite"
            type="checkbox"
            checked={forms.parasite}
            onChange={onSearchChange('form')}
          />
          parasite:
        </div>
      </form>
    </div>
  );
}

export default SearchContent;
