import { NavLink } from "react-router-dom";

const Polaroid = ({imageData, selected, handleOnClick}) => {
    return (
        <div className={selected ? "polaroid selected" : "polaroid"} onClick={() => handleOnClick(imageData.id)}>
            <img src={imageData.download_url} alt="" style={{height: '300px', width: '250px', objectFit: 'cover'}}/>
            <div style={{marginTop: '15px'}} onClick={(e) => e.stopPropagation()}>
                <NavLink to={`/item/${imageData.id}`}>
                {imageData.author}
                </NavLink>
            </div>
        </div>
    )
}


export default Polaroid;
