import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchField = (props) => {
    const [text, setText] = useState("");
    return (
        <div className="searchField">
            <FontAwesomeIcon style={{color: "rgb(101, 62, 187)"}} icon={faMagnifyingGlass}/>
            <form style={{width: "100%"}} onSubmit={(e) => {
                e.preventDefault();
                props.handleSubmit(text);
            }}>
                <input className="searchInput" type="text" placeholder="Filter Images ..." value={text} onChange={(e) => {setText(e.target.value); props.handleOnChange(e.target.value)}} />
            </form>
            <button className="searchClear" onClick={() => {setText(""); props.handleOnChange('')}}>
                <FontAwesomeIcon style={{color: "rgb(101, 62, 187)", padding: "5px", display: text.length === 0 ? "none"  : 'block'}} icon={faX}/>
            </button>
        </div>
    )

}


export default SearchField;
