import React from "react";
import { useNavigate } from "react-router-dom";

const goBackStyles = {
  width: "100px",
  height: "30px",
  border: "2px solid gray",
  display: "flex",
  justifyContent: "center",
  padding: "18px",
  alignItems: "center",
  margin: "20px 30px 0 30px",
  borderRadius: "3px",
};
const Back = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div onClick={handleClick} style={goBackStyles}>
      Back
    </div>
  );
};

export default Back;
