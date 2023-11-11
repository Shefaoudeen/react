import React from "react";

function Anime(props) {
  return (
    <div>
      <div className="anime">
        <div>
          <img className="animeImage" src={props.image}></img>
        </div>
        <div>
          <div className="genre">
            <i className="fa fa-film"></i>
            <p>{props.genre}</p>
          </div>
          <h1>{props.title}</h1>
          <h6>{props.timeline}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Anime;
