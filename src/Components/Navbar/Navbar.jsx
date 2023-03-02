import { useState } from "react";
import "./Navbar.scss";
import Buttons from "../Buttons/Buttons";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";

const Navbar = () => {

  const { user } = useAuthContext()
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }



  const [navbar, setNavbar] = useState(false);
  const changebackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);



  return (
    <div className={navbar ? "navbar nav-active" : "navbar"}>

      <div className="logo">
        <Link to="/"> <img
          id="largescreenlogo"
          src={require("../../Assets/beejLogo.png")}
          alt=""
        /></Link>

      </div>

      <div className="buttons">

        {
          !user && (
            <>
              <Link to="/login">
                <Buttons type="login" />
              </Link>
              <Link to="/signup">
                <Buttons type="signup" />
              </Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
