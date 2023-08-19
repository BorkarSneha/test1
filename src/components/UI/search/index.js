import "./search.css"

function Search({ ...rest }) {
  return (
    <div>
      <input className="input" {...rest} />
    </div>

  );
}

export default Search;