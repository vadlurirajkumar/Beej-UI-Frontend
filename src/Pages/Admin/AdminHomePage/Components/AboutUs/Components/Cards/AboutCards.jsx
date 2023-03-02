import React from "react";
import "./AboutCardsStyle.scss";
import { useState } from "react";

const AboutCards = () => {
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    subhead: "",
    tagline: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { subhead, tagline } = data;

  function changeHandle() {
    setArr([...arr, { subhead, tagline }]);
    setData({ subhead: "", tagline: "" });
    console.log(arr);
  }

  return (
    <>
      <div className="aboutCard">
        <div className="cardData">
          <div className="cardLeft">
            <h4>Icon</h4>
            <h4>Sub Heading</h4>
            <h4>Tagline</h4>
          </div>
          <div className="cardRight">
            <img src={require("../../../../../../../Assets/leaf-1.png")} alt="" />{" "}
            <input
              type="text"
              style={{ width: "8em" }}
              name="subhead"
              value={data.subhead}
              onChange={handleChange}
            />
            <textarea
              name="tagline"
              style={{ width: "8em" }}
              value={data.tagline}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button onClick={changeHandle}>Add</button>
      </div>
    </>
  );
};

export default AboutCards;
