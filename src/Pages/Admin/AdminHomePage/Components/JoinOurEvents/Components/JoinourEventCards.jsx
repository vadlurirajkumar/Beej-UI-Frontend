import React from "react";
import "./JoinourEventCards.scss";
import { useState } from "react";

const JoinourEventCards = () => {
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    name: "",
    investor: "",
    date: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { name, investor, date } = data;

  function changeHandle() {
    setArr([...arr, { name, investor, date }]);
    setData({ name: "", investor: "", date: "" });
    console.log(arr);
  }
  const handleDelete = (item) => {
    let updatedArray = arr.filter((index) => {
      return index !== item;
    });
    setArr(updatedArray);
  }; 
  return (
    <>
      <div className="events">
        <h2>Join our events</h2>
        <div className="eventDetails">
          <div className="eventCard">
            <div className="event-card-details">
              <div className="event-data">
                <label>Event Date</label>
                <input
                  type="date"
                  name="date"
                  value={data.date}
                  onChange={handleChange}
                />
              </div>

              <div className="event-data">
                <label>Event name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="event-data">
                <label>About event</label>
                <textarea
                  type="text"
                  name="investor"
                  value={data.investor}
                  onChange={handleChange}
                />
              </div>
            </div>
            <button onClick={changeHandle}>Add</button>
          </div>

          <div className="displayCard">
            {arr.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <div className="event-render-data">
                    <label>Event Date</label>
                    <p>{item.date}</p>
                  </div>
                  <div className="event-render-data">
                    <label>Event name</label>
                    <p>{item.name}</p>
                  </div>
                  <div className="event-render-data">
                    <label>About event</label>
                    <p>{item.investor}</p>
                  </div>
                  <button onClick={() => handleDelete(item)}>
                  Delete
                </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinourEventCards;
