import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
