import "./dropdown.css"

const Dropdown = ({ label, list, ...rest }) => (
    <div className="select-div">
        <select {...rest} className="select">
            <option value={0}>{label}</option>
            {list?.map((item) =>
            (
                <option key={item?.id} value={item?.id}>
                    {item?.title}
                </option>
            )
            )}
        </select>
    </div>
);

export default Dropdown;