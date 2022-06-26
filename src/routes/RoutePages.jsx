import React from 'react'
import { Routes, Route} from "react-router-dom";
import Docs from "../pages/Docs";
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';

const RoutePages = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wallet" element={<Wallet/>} />
      <Route path="/docs" element={<Docs/>} />
    </Routes>
  </>
  )
}

export default RoutePages