import React from "react";

const Language = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <div className="cards">
          <h2>{props.title}</h2>
          <img src={props.imgsrc} />
          <p>{props.desc}</p>

          <button>{props.btn}</button>

          <hr />
        </div>
      </div>
    </>
  );
};
export default Language;
