import React from "react";
import onePice from "../assets/download.jpeg";
import AOT from "../assets/attack.jpeg";
import Vinland from "../assets/vinland.jpeg";

const info = [
  {
    image: onePice,
    genre: "Big three",
    title: "One Piece",
    timeline: "20 October 1999 - Now",
    description: `Follows the adventures of Monkey D. Luffy and his pirate crew in
  order to find the greatest treasure ever left by the legendary
  Pirate, Gold Roger. The famous mystery treasure named "One Piece".
`,
  },
  {
    image: AOT,
    genre: "Adventure",
    title: "Attack on Titan",
    timeline: "2013 - 2023",
    description: `After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.`,
  },
  {
    image: Vinland,
    genre: "Action",
    title: "Vinland Sage",
    timeline: "2019 - 2023",
    description: `Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father an homage.`,
  },
];

export default info;
