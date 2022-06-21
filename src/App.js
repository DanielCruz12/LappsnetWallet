//import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Wallet from './pages/Wallet'
import "./styles/App.css";

function App() {
  //const linkProject = "https://web.lappsnet.io/"
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet/>} />
      </Routes>
    </>
  );
}

export default App;
