import "./CommunityCards.scss";
import { useState } from "react";

const CommunityCards = () => {
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    liveDeals: "",
    investors: "",
    cities: "",
    startups: "",
  });

  const [arr1, setArr1] = useState([]);

  const [data1, setData1] = useState({
    engagement: "",
    reviews: "",
    questions: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { liveDeals, investors, cities, startups } = data;

  function changeHandle() {
    setArr([...arr, { liveDeals, investors, cities, startups }]);
    setData({ liveDeals: "", investors: "", cities: "", startups: "" });
    console.log(arr);
  }

  function handleChange1(x) {
    setData1({ ...data1, [x.target.name]: x.target.value });
  }
  let { engagement, reviews, questions } = data1;

  function changeHandle1() {
    setArr1([...arr1, { engagement, reviews, questions }]);
    setData1({ engagement: "", reviews: "", questions: "" });
    console.log(arr1);
  }

  

  return (
    <div className="community-cards">
      <div className="community-card">
        <h3>Community</h3>
        <div className="input-field-data">
          <div className="input-fields">
            <div className="field">
              <p>Live Deals</p>
              <input
                type="text"
                name="liveDeals"
                value={data.liveDeals}
                placeholder="21"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <p>Investors</p>
              <input
                type="text"
                name="investors"
                value={data.investors}
                placeholder="3002"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <p>Cities</p>
              <input
                type="text"
                name="cities"
                value={data.cities}
                placeholder="25"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <p>Startups</p>
              <input
                type="text"
                name="startups"
                value={data.startups}
                placeholder="595"
                onChange={handleChange}
              />
            </div>
           
          </div>
         <div className="text-area">
            <p>Description</p>
            <textarea placeholder="This world of ours must avoid becoming a community of dreadful fear and hate..." />
          </div> 
        </div>
        <button onClick={changeHandle}>Update</button>
      </div>
      <div className="community-card">
        <h3>Business Engagement</h3>
        <div className="input-field-data">
          <div className="input-fields">
            <div className="field">
              <p>Engagement</p>
              <input
                type="text"
                placeholder="21"
                name="engagement"
                value={data.engagement}
                onChange={handleChange1}
              />
            </div>
            <div className="field">
              <p>Reviews</p>
              <input
                type="text"
                placeholder="3002"
                name="reviews"
                value={data.reviews}
                onChange={handleChange1}
              />
            </div>
            <div className="field">
              <p>Questions</p>
              <input
                type="text"
                placeholder="25"
                name="questions"
                value={data.questions}
                onChange={handleChange1}
              />
            </div>
          </div>
          <div className="text-area" id="second">
            <p>Description</p>
            <textarea
            placeholder="This world of ours must avoid becoming a community of dreadful fear and hate..." />
          </div>
        </div>
        <button onClick={changeHandle1}>Update</button>
      </div>
    </div>
  );
};

export default CommunityCards;
