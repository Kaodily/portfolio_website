import React from "react";
import { useNavigate } from "react-router-dom";

const goBackStyles = {
  fontWeight: "bold",
  margin: "20px 30px 0 30px",
};
const Back = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <p onClick={handleClick} style={goBackStyles}>
      Go Back
    </p>
  );
};

export default Back;
