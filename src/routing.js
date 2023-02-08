import React from 'react'
import Tab from "../src/tab";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//  import Home from "../src/Components/Users/addUser"
const routing = () => {
  return (
   <>
   <BrowserRouter>
      <Routes>
      {/* <Route path="/" element={<Home />}> */}
      <Route path="tab" element={<Tab />} >
      </Route>
      </Routes>
    </BrowserRouter></>
  )
}

export default routing