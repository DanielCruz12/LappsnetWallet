//import logo from './logo.svg';
import { Routes, Route, Link} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Landing from "./pages/Landing";
import assets from "./assets";
import "./styles/App.css";

function App() {
  //const linkProject = "https://web.lappsnet.io/"
  return (
    <>
    <Routes>
    <Route path="/" element={<LandingPage
        title="What is Lappsnet?"
        description=" It's an experimental smart contract network that can easily
              be used by lightning network users. You can purchase and redeem ESAT tokens from"  
      
        mockupImg={assets.first}
        banner="banner"
      />}/>

      <Route path="/landing" element={<Landing title="How does the wallet work?"
        description=" The wallet generates a key, which is encrypted using a security
              device, such as your screen lock. The encrypted key is stored in
              the browser."
        mockupImg={assets.first}
        reverse/>}/>
        </Routes>
    </>
  );
}

export default App;
