import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

import { getImages } from "./gallery";

export function GalleryItem() {
  const { id } = useParams();

  const {data} = useQuery(['galleryImages'], getImages)
  const imageData = data?.filter((img) => img.id === id)[0]

  return (
    <div>
      <img src={imageData?.download_url} alt="" style={{width: '500px'}}/>
      <pre>
        {JSON.stringify(imageData, null, 2)}
      </pre>
    </div>
  );
}
