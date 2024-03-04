import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../../assets/images/logo.png";
export const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <h1>THIS IS HOME!</h1>
    </>
  );
};
