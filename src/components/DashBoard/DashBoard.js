import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import SideBar from "./SideBar.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

function DashBoard() {
  const user_id = useSelector(selectUser).user;
  const docRef = doc(db, "users", user_id);
  const [userName, setUserName] = useState("name");

  async function getUserData() {
    const userdata = await getDoc(docRef);
    if (userdata.exists()) {
      const data = userdata.data();
      setUserName(data.name);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="dashBoardWrapper">
      <div className="dashBoardContainer">
        <SideBar />
        <div className="dashBoardMain">
          <div className="dashBoardTitle">Welcome {userName}</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
