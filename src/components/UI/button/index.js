import Button from '@mui/material/Button';

import "./button.css"

const BasicButton = ({ className, variant, title }) => (
  <Button className={className ? className : "button-style"} variant={variant}>
    {title}
  </Button>
);

export default BasicButton;