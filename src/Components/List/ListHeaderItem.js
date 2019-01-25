// @flow
import * as React from 'react';

type Props = {
  title: string,
  toggleFunction: string => *
};

const ListHeaderItem = (props: Props) => {
  const { title, toggleFunction } = props;

  return (
    <div role="button" tabIndex="0" onKeyDown={toggleFunction} onClick={toggleFunction}>
      {title}
    </div>
  );
};

export default ListHeaderItem;
