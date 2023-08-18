import * as React from 'react';

import "./search.css"

function Search(props) {
  return (
    <div>
        <input className="input" type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
    </div>

  );
}

export default Search;