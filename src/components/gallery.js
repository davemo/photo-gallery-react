import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import SearchField from "./Searchfield";
import Polaroid from "./Polaroid";


export async function getImages() {
  const res = await fetch('https://picsum.photos/v2/list')
  return await res.json()
}


export function Gallery() {
  const [filteredImages, setFilteredImages] = useState([])
  const [selectedImageIds, setSelectedImageIds] = useState([])
  const imageQuery = useQuery(['galleryImages'], getImages)

  useEffect(() => {
    let selectedImgs = JSON.parse(localStorage.getItem('selectedImageIds'));
    if (selectedImgs) {
      setSelectedImageIds(selectedImgs)
    }
  }, [])
  useEffect(() => imageQuery.status === 'success' ? setFilteredImages(imageQuery.data) : null, [imageQuery.status, imageQuery.data])
  

  const handleOnChange = (searchInput) => {
    setFilteredImages(imageQuery.data?.filter((img) => img.author.toLowerCase().includes(searchInput.toLowerCase())))
  }

  const handleOnClick = (imageId) => {
    let selection = [];
    if (selectedImageIds.includes(imageId)) {
      selection = selectedImageIds.filter((id) => id !== imageId);
    } else {
      selection = [...selectedImageIds, imageId];
    }
    localStorage.setItem('selectedImageIds', JSON.stringify(selection));
    setSelectedImageIds(selection);
  }

  const clearSelection = () => {
    localStorage.setItem('selectedImageIds', JSON.stringify([]));
    setSelectedImageIds([]);
  }

  return (
    <>
      <SearchField handleOnChange={handleOnChange}/>
      {
        selectedImageIds.length > 0 &&
        <div className="selectedChip">
          {selectedImageIds.length} Selected
          <button className="selectionClear" onClick={() => clearSelection()}>
            <FontAwesomeIcon style={{color: "rgb(11, 111, 11)", padding: "3px", width: '11px', height: '11px'}} icon={faX}/>
          </button>
        </div>
      }
      
      <div className="imageGrid">
        {filteredImages?.map((img) => (
          <Polaroid key={img.id} imageData={img} selected={selectedImageIds.includes(img.id)} handleOnClick={handleOnClick}/>
        ))}
      </div>
    </>
  );
}
