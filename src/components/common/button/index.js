import * as React from 'react';
import Button from '@mui/material/Button';

import "./button.css"

function BasicButton(props) {
  return (
      <Button className={props?.className ? props?.className : "button-style"} variant={props?.variant}>
        {props?.title}
      </Button>
  );
}

export default BasicButton;