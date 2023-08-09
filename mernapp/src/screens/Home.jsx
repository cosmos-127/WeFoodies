import React, { useState, useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import NewCard from "../components/NewCard";
import Footer from "../components/Footer";
import ControlledCarousel from "../components/ControlledCarousel";

const Home = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setFoodItem(data[0]);
        setFoodCat(data[1]);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <NewNavbar />
      </div>
      <div>
        <ControlledCarousel />
      </div>
      <div className="container">
        {foodCat !== []
          ? foodCat.map((data) => {
              return (
                <div className="row mb-3">
                  <div key={data._id} className="fs-4 m-3">
                    {data.CategoryName}
                  </div>
                  <hr />
                  {foodItem !== [] ? (
                    foodItem
                      .filter((item) => item.CategoryName === data.CategoryName)
                      .map((filterItems) => {
                        return (
                          <div
                            key={filterItems._id}
                            className="col-12 col-md-6 col-lg-3"
                          >
                            <NewCard
                              foodName={filterItems.name}
                              options={filterItems.options}
                              imgSrc={filterItems.img}
                              description={filterItems.description}
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No such Data is found</div>
                  )}
                </div>
              );
            })
          : ""}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
