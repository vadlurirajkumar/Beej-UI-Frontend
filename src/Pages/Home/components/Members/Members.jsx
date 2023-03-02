import React, { Fragment, useState } from "react";
import "./Members.scss";


const Members = () => {
  const [toggleTab, setToggleTab] = useState();

  const toggleState = (index) => {
    setToggleTab(index);
  };

  return (
    <>
      <Fragment>
        <div className="members-section">
          <h5 className="head-testmonal">Why our members love us?</h5>
          <div className="container-testmonal">
            <div className="testimonials">
              <div
                className={
                  toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(1)}
              ></div>

              <div
                className={
                  toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(2)}
              ></div>

              <div
                className={
                  toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(3)}
              ></div>

              <div
                className={
                  toggleTab === 4 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(4)}
              ></div>
              <div
                className={
                  toggleTab === 5 ? "single-tab active-tab" : "single-tab"
                }
                onClick={() => toggleState(5)}
              ></div>
            </div>

            <div className="tab-content">
              {/* tap1 content */}
              <div
                className={
                  toggleTab === 1 ? "content active-content" : "content"
                }
              >
                <div className="user-text">
                  <p>
                    “Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts”
                  </p>
                  <h4>Kenneth Silva</h4>
                  <h6>Apple Inc.</h6>
                </div>
              </div>

              <div
                className={
                  toggleTab === 2 ? "content active-content" : "content"
                }
              >
                <div className="user-text">
                  <p>
                    “far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind
                    texts”countries Vokalia and Consonantia, there live the
                    blind texts
                  </p>
                  <h4>Don Snider</h4>
                  <h6>Fathom</h6>
                </div>
              </div>

              <div
                className={
                  toggleTab === 3 ? "content active-content" : "content"
                }
              >
                <div className="user-text">
                  <p>
                    “Far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts”
                  </p>
                  <h4>Jasmine Tillery</h4>
                  <h6>Brightline</h6>
                </div>
              </div>

              <div
                className={
                  toggleTab === 4 ? "content active-content" : "content"
                }
              >
                <div className="user-text">
                  <p>
                    “Far behind the word mountains, far from the countries
                    Vokalia and Consonantia, there live the blind texts”
                  </p>
                  <h4>Queenie Daves</h4>
                  <h6>Apple Inc.</h6>
                </div>
              </div>

              <div
                className={
                  toggleTab === 5 ? "content active-content" : "content"
                }
              >
                <div className="user-text">
                  <p>
                    “Far far way, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts”
                  </p>
                  <h4>Fred Gordon</h4>
                  <h6>Lemonade</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default Members;
