import React from "react";
import Navbar from "../components/LoginPageComponents/Navbar";
import Footer from "../components/LoginPageComponents/Footer";
import SideNavbar from "../components/HomePageComponents/SideNavbar";
import MainMovie from "../components/HomePageComponents/MainMovie";
import LatestRelease from "../components/HomePageComponents/LatestRelease";

const HomePage = () => {
  return (
    <div className="bg-[#0F1014]">
      <Navbar />
      <SideNavbar />
      <LatestRelease />
      <MainMovie />
      <Footer />
    </div>
  );
};

export default HomePage;
