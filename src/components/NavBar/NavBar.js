import React from "react";
import "./NavBar.css";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import { Link } from "react-router-dom";
import { DefaultButton } from "../index.js";
import { useSelector } from "react-redux";
import { selectedPage } from "../../features/userSlice.js";
import { useDispatch } from "react-redux";
import { selectPage } from "../../features/userSlice";

const navData = [
  {
    link: "/",
    text: "Home",
  },
  {
    link: "/Class",
    text: "Class",
  },
  {
    link: "/Dolby",
    text: "Dolby",
  },
  {
    link: "/Schedule",
    text: "Schedule",
  },
  {
    link: "/Collaborate",
    text: "Collaborate",
  },
  {
    link: "/Privacy",
    text: "Privacy",
  },
];

function NavBar() {
  const pickSelectedPage = useSelector(selectedPage);
  const dispatch = useDispatch();

  const onNavClick = (nav) => {
    dispatch(selectPage(nav));
  };

  return (
    <div className="navBarWrapper">
      <div className="navBarLeft">
        <MenuBookTwoToneIcon />
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="navBarTitle">BrightStream</div>
        </Link>
        {navData.map((navData) =>
          navData.text === pickSelectedPage ? (
            <Link to={navData.link} style={{ textDecoration: "none" }}>
              <div className="navBarLinkSelected" onClick={onNavClick}>
                {navData.text}
              </div>
            </Link>
          ) : (
            <Link to={navData.link} style={{ textDecoration: "none" }}>
              <div
                className="navBarLink"
                onClick={() => onNavClick(navData.text)}
              >
                {navData.text}
              </div>
            </Link>
          )
        )}
      </div>
      <div className="navBarRight">
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <div className="navBarLink" onClick={() => onNavClick(null)}>
            Log In
          </div>
        </Link>
        <Link to="/GetStarted" style={{ textDecoration: "none" }}>
          <DefaultButton text="Get Started" onClick={() => onNavClick(null)} />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
