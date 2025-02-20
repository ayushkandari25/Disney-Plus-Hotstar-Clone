import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import Error404 from "./components/HomePageComponents/Error404";
import About from "./components/HomePageComponents/About";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/Error404" element={<Error404 />}/>
        <Route path="information" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App
