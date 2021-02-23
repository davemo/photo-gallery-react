import React from "react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Photo Gallery</h1>
      </Link>
    </header>
  );
}
