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
    <div
      style={{
        textAlign: 'left',
        marginLeft: '10%',
        marginRight: '10em',
        marginTop: '1em',
        width: '60vw',
        height: '50vh',
        overflow: 'auto',
        padding: '0.2em 2em 2em 2em',
        backgroundColor: '#4FA2BE',
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
            onChange={onSearchChange('shape')}
          />
        </div>
        <div>
          lanceolate:
          <input
            name="lanceolate"
            type="checkbox"
            checked={shapes.lanceolate}
            onChange={onSearchChange('shape')}
          />
        </div>
        <div>
          obovate:
          <input
            name="obovate"
            type="checkbox"
            checked={shapes.obovate}
            onChange={onSearchChange('shape')}
          />
        </div>
        <div>
          cordate:
          <input
            name="cordate"
            type="checkbox"
            checked={shapes.cordate}
            onChange={onSearchChange('shape')}
          />
        </div>
        <div>
          linear:
          <input
            name="linear"
            type="checkbox"
            checked={shapes.linear}
            onChange={onSearchChange('shape')}
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
            onChange={onSearchChange('arrangement')}
          />
        </div>
        <div>
          whirled:
          <input
            name="whirled"
            type="checkbox"
            checked={arrangements.whirled}
            onChange={onSearchChange('arrangement')}
          />
        </div>
        <div>
          alternate:
          <input
            name="alternate"
            type="checkbox"
            checked={arrangements.alternate}
            onChange={onSearchChange('arrangement')}
          />
        </div>
        <div>
          opposite:
          <input
            name="opposite"
            type="checkbox"
            checked={arrangements.opposite}
            onChange={onSearchChange('arrangement')}
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
            onChange={onSearchChange('form')}
          />
        </div>
        <div>
          forb:
          <input
            name="forb"
            type="checkbox"
            checked={forms.forb}
            onChange={onSearchChange('form')}
          />
        </div>
        <div>
          tree:
          <input
            name="tree"
            type="checkbox"
            checked={forms.tree}
            onChange={onSearchChange('form')}
          />
        </div>
        <div>
          parasite:
          <input
            name="parasite"
            type="checkbox"
            checked={forms.parasite}
            onChange={onSearchChange('form')}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchContent;
