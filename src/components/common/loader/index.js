import CircularProgress from "@mui/material/CircularProgress";

import "./loader.css";

function Loader () {
  return (
    <div className="loader" data-testid="loader">
      <CircularProgress />
    </div>
  );
};

export default Loader;
