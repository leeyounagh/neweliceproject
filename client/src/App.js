import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Main from "./component/main/Main";
import About from "./component/about/About";
import Project from "./component/project/Project";
import Footer from "./component/footer/Footer";
import MbtiDetail from "./component/about/MbtiDetail";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/:id" element={<MbtiDetail />}></Route>
        <Route exact path="/project" element={<Project />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
