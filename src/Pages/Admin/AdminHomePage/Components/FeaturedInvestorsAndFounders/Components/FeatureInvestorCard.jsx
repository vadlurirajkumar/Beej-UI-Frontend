import React from "react";
import { useState } from "react";
import "./FeatureInvestorCard.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const FeatureInvestorCard = ({ type }) => {
  // const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [arr, setArr] = useState([]);

  const [data, setData] = useState({
    name: "",
    investor: "",
    img: "",
  });

  function handleChange(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  let { name, investor, img } = data;

  function changeHandle() {
    setArr([...arr, { name, investor, img }]);
    setData({ name: "", investor: "", img: "" });
  }
  console.log(arr);

  const handleDelete = (item) => {
    let updatedArray = arr.filter((index) => {
      return index !== item;
    });
    setArr(updatedArray);
  }; 

  const convert2base64 = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result.toString());
    };
    reader.readAsDataURL(file);
  };

  let head;
  switch (type) {
    case "invest":
      head = {
        name: "Featured Investors",
        label: "Invested Companies",
      };
      break;
    case "found":
      head = {
        name: "Featured Founders",
        label: "Company Name",
      };
      break;

    default:
      break;
  }

  return (
    <>
      <div className="investCard">
        <h2>{head.name}</h2>
        <div className="usercardDetails">
          <div className="formCard">
            <div className="usercard">
              <div className="img-upload">
                <label htmlFor="file" id="f-image">
                  <p className="uploading-image">
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
                  onChange={(e) => convert2base64(e)}
                  // onChange={(e) => setFile(e.target.files[0])}
                  // ref={this.myFiles}
                  // onChange={this.fileUpload}
                />
                <p>Upload Picture</p>
              </div>
              <div className="label-data">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
              <div className="label-data">
                <label>{head.label}</label>
                <input
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
            {arr &&
              arr.map((item, index) => {
                if (arr.length > 1) {
                  return (
                    <div className="card" key={index}>
                      <div>
                        <img src={image} alt="" />
                        <div className="renderData">
                          <label>Name</label>
                          <p className="username">{item.name}</p>
                          <label>Invested Companies</label>
                          <p className="username">{item.investor}</p>
                          <button onClick={() => handleDelete(item)}>
                            delete
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="card" key={index}>
                      {/* {image ? <img src={image} alt="" /> : <img src="" alt="" />} */}
                      {/* <img src={file ? URL.createObjectURL(file) : ""} alt="" /> */}
                      {/* <img src={image ? image : ""} alt="" /> */}
                      <img src={image} alt="" />
                      <div className="renderData">
                        <label>Name</label>
                        <p className="username">{item.name}</p>

                        <label>Invested Companies</label>
                        <p className="username">{item.investor}</p>

                        <button onClick={() => handleDelete(item)}>
                          delete
                        </button>
                      </div>
                    </div>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureInvestorCard;
