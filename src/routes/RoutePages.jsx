import React from 'react'
import { Routes, Route} from "react-router-dom";
import Docs from "../pages/Docs";
import Home from '../pages/Home';
import Wallet from '../pages/Wallet';
import Redeem from '../pages/Redeem';

const RoutePages = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs/>} />

{/*       router.get('/auth', function(req, res, next) {
            // Note: this redirect will not work if port must be specified (e.g. localhost:3000)
            let URL = require('url').URL
            let newUrl = new URL(`${req.protocol}://${req.hostname}${req.originalUrl}`)
            newUrl.pathname = 'wallet'
            res.redirect(newUrl.href)
}); */}

      <Route path="/wallet" element={<Wallet />}/>
      <Route path='/redeem' element={<Redeem/>} />
    </Routes>
  </>
  )
}

export default RoutePages