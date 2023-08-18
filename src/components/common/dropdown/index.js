import * as React from 'react';

import "./dropdown.css"

function Dropdown(props) {
  return (
    <div>
        <select name={props.name} id={props.id} onChange={props.onChange} className="select">
            <option value={0}>{props.label}</option>
                {props?.list?.map((item)=>{
                    return (
                        <option key={item?.id} value={item?.id}>
                            {item?.title}
                        </option>
                    )
                })}
        </select>

    </div>

  );
}

export default Dropdown;