import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Alldetails from "./Components/Alldetails/Alldetails.js";
import Adduser from "./Components/Adduser/Adduser.js";
import Edit from "./Components/edit user/Edit";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all" element={<Alldetails />} />
          <Route exact path="/add" element={<Adduser />} />
          <Route exact path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
