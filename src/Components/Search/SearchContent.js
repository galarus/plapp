// @flow
import * as React from 'react';
import './SearchContent.css';
import SvgArrangementAlternate from '../svg/SvgArrangementAlternate';
import SvgArrangementOpposite from '../svg/SvgArrangementOpposite';
import SvgArrangementBasal from '../svg/SvgArrangementBasal';
import SvgArrangementWhirled from '../svg/SvgArrangementWhirled';

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
          <b>
            <i>ovate:</i>
          </b>
          <p>ergseg srtg sg wth eyjeyhdfgh q4gt adfwyh rths hsrths r</p>
        </div>
        <div className="form-item">
          <input
            name="lanceolate"
            type="checkbox"
            checked={shapes.lanceolate}
            onChange={onSearchChange('shape')}
          />
          <b>
            <i> lanceolate:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="obovate"
            type="checkbox"
            checked={shapes.obovate}
            onChange={onSearchChange('shape')}
          />
          <b>
            <i> obovate:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="cordate"
            type="checkbox"
            checked={shapes.cordate}
            onChange={onSearchChange('shape')}
          />
          <b>
            <i> cordate:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="linear"
            type="checkbox"
            checked={shapes.linear}
            onChange={onSearchChange('shape')}
          />
          <b>
            <i> linear:</i>
          </b>
        </div>
      </form>
      <br />
      <h3 className="form-title">Leaf Arrangement</h3>
      <form className="form-content">
        <div className="form-item">
          <input
            name="alternate"
            type="checkbox"
            checked={arrangements.alternate}
            onChange={onSearchChange('arrangement')}
          />
          <SvgArrangementAlternate style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
          <b>
            <i>alternate: </i>
          </b>
          One leaf, branch, or flower part attaches at each point or node on the stem, and leaves
          alternate direction, to a greater or lesser degree, along the stem.
        </div>
        <div className="form-item">
          <input
            name="opposite"
            type="checkbox"
            checked={arrangements.opposite}
            onChange={onSearchChange('arrangement')}
          />
          <SvgArrangementOpposite style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
          <b>
            <i> opposite: </i>
          </b>
          Two leaves, branches, or flower parts attach at each point or node on the stem.
        </div>

        <div className="form-item">
          <input
            name="whirled"
            type="checkbox"
            checked={arrangements.whirled}
            onChange={onSearchChange('arrangement')}
          />
          <SvgArrangementWhirled style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
          <b>
            <i> whirled: </i>
          </b>
          Three or more leaves, branches, or flower parts attach at each point or node on the stem.
        </div>
        <div className="form-item">
          <input
            name="basal"
            type="checkbox"
            checked={arrangements.basal}
            onChange={onSearchChange('arrangement')}
          />
          <SvgArrangementBasal style={{ transform: 'scale(3, 3)', margin: '0.5em 1em' }} />
          <b>
            <i>basal: </i>
          </b>
          Arising from the base of the stem.
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
          <b>
            <i> grass:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="forb"
            type="checkbox"
            checked={forms.forb}
            onChange={onSearchChange('form')}
          />
          <b>
            <i> forb:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="tree"
            type="checkbox"
            checked={forms.tree}
            onChange={onSearchChange('form')}
          />
          <b>
            <i> tree:</i>
          </b>
        </div>
        <div className="form-item">
          <input
            name="parasite"
            type="checkbox"
            checked={forms.parasite}
            onChange={onSearchChange('form')}
          />
          <b>
            <i> parasite:</i>
          </b>
        </div>
      </form>
    </div>
  );
}

export default SearchContent;
