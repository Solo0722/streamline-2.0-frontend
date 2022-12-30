import React from "react";
import styled from "styled-components";

const ThemeSwitcher = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
};

export default ThemeSwitcher;
