import React from "react";
import { useParams } from "react-router-dom";

export function GalleryItem() {
  const { id } = useParams();

  return <div>Render the image with id: {id}</div>;
}
