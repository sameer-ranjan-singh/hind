import {BrowserRouter as Router, Routes, Route} from  "react-router-dom";
import LandingPage from "./pages/LandingPage";
import {RecoilRoot} from 'recoil';
import Navbar from "./components/Navbar";

function App(){

 return (
  <div style={{
      width:"100vw",
      height:"100vh",
    //   background:"#80b918",
   }}>
      <RecoilRoot>
          <Router>
              <Navbar/>
              <Routes>
                  <Route path="/" element = {<LandingPage/>}/>
              </Routes>
              {/* <Footer/> */}
          </Router>
      </RecoilRoot>
  </div>
 )
}

export default App