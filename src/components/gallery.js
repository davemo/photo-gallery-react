import React from "react";
import { NavLink } from "react-router-dom";

export function Gallery() {
  const images = [
    {
      id: 1,
      title: "abc",
    },
    {
      id: 2,
      title: "def",
    },
    {
      id: 3,
      title: "ghi",
    },
  ];

  return (
    <ul className="nav flex-column">
      {images.map((img) => (
        <li className="nav-item" key={img.id}>
          <NavLink to={`/item/${img.id}`} className="nav-link">
            #{img.id} {img.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
