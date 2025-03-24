import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Coursedetails from "./Coursedetails";
import MainSec from "../components/MainSec";

const Allroute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/course" element={<Coursedetails />} />
      </Routes>
    </>
  );
};

export default Allroute;
