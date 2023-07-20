import React from "react";
import NewNavbar from "../components/NewNavbar";
import NewCard from "../components/NewCard";
import Footer from "../components/Footer";
import ControlledCarousel from "../components/ControlledCarousel";

const Home = () => {
  return (
    <div>
      <div>
        <NewNavbar />
      </div>
      <div>
        <ControlledCarousel/>
      </div>
      <div className="m-3">
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
