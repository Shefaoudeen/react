import React from "react";
import onePice from "../assets/download.jpeg";
import Anime from "./Anime";
import AOT from "../assets/attack.jpeg";
import Vinland from "../assets/vinland.jpeg";
import info from "./info";

function mapFunction(item) {
  return (
    <Anime
      image={item.image}
      genre={item.genre}
      title={item.title}
      timeline={item.timeline}
      description={item.description}
    />
  );
}

function Hero() {
  return <div>{info.map(mapFunction)}</div>;
}

export default Hero;
