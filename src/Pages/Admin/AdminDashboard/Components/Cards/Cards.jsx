import data from "./data";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="dashboard-cards">
      {data.map((item) => {
        const {
          head,
          logo1,
          logo2,
          logo3,
          name1,
          name2,
          name3,
          count1,
          count2,
          count3,
        } = item;
        return (
          <div className="dashboard-card">
            <h4>{head}</h4>
            <div className="card-data">
              <div className="right">
                <div className="right-data">
                  <img src={logo1} alt="" />
                  <p>{name1}</p>
                </div>
                <div className="right-data">
                  <img src={logo2} alt="" />
                  <p>{name2}</p>
                </div>
                <div className="right-data">
                  <img src={logo3} alt="" />
                  <p>{name3}</p>
                </div>
              </div>
              <div className="left">
                <p>{count1}</p>
                <p>{count2}</p>
                <p>{count3}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
