import "./TestimonialCards.scss";
// import "./JoinourEventCards.scss";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const TestimonialCards = () => {
  const [file, setFile] = useState("");
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    name: "",
    designation: "",
    date: "",
    img: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { name, review, img, designation } = data;

  function changeHandle() {
    setArr([...arr, { name, review, img, designation}]);
    setData({ name: "", review: "", img: "", designation: "" });
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
        <h2>Testimonials</h2>
        <div className="eventDetails">
          <div className="eventCard">
            <div className="event-card-details">
              <div className="event-data choosing">
                <label htmlFor="file" id="image">
                  <p className="uploading-image">
                    {" "}
                    <DriveFolderUploadOutlinedIcon
                      sx={{ cursor: "pointer" }}
                      className="uploading-icon"
                    />
                  </p>
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <p>Profile</p>
              </div>
              <div className="event-data">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="event-data">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  value={data.designation}
                  onChange={handleChange}
                />
              </div>

              <div className="event-data">
                <label>Review</label>
                <textarea
                  type="text"
                  name="review"
                  value={data.review}
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
                  <div className="event-render-data choosing">
                    
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : ""
                      }
                      alt=""
                    />
                    <label>Profile</label>
                  </div>
                  <div className="event-render-data">
                    <label>Name</label>
                    <p>{item.name}</p>
                  </div>
                  <div className="event-render-data">
                    {" "}
                    <label>Designation</label>
                    <p>{item.designation}</p>
                  </div>
                  <div className="event-render-data">
                    <label>Review</label>
                    <p>{item.review}</p>
                  </div>
                  <button onClick={() => handleDelete(item)} id="delete-card">
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

export default TestimonialCards;
