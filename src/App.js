//import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Docs from "./pages/Docs";
import Home from './pages/Home'
import Wallet from './pages/Wallet'

function App() {
  //const linkProject = "https://web.lappsnet.io/"
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/docs" element={<Docs/>} />
      </Routes>
    </>
  );
}

export default App;
