import React, { useState, useEffect } from "react";
import NewNavbar from "../components/NewNavbar";
import NewCard from "../components/NewCard";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import Carousel from "react-bootstrap/Carousel";
import CarouselImageGenerator from "../components/CarouselImageGenerator";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const [foodItems, categories] = await response.json();
        setFoodItem(foodItems);
        setFoodCat(categories);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <NewNavbar />
      <Carousel fade style={{ objectFit: "contain !important" }}>
        <Carousel.Item>
          <CarouselImageGenerator text="burger" />
          <Carousel.Caption>
            <div>
              <Form className="d-flex mb-5 justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search your Delicious meal"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Form>
            </div>
            <h3>Burger</h3>
            <p>
              TheBurger was first invented in SEYMOUR FAIR, WISCONSIN, in 1885
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImageGenerator text="pizza" />
          <Carousel.Caption>
            <div>
              <Form className="d-flex mb-5 justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search your Delicious meal"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Form>
            </div>
            <h3>Pizza</h3>
            <p>About 350 slices of Pizza are consumed every second in the US</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselImageGenerator text="taco" />
          <Carousel.Caption>
            <div>
              <Form className="d-flex mb-5 justify-content-center">
                <Form.Control
                  type="search"
                  placeholder="Search your Delicious meal"
                  className="me-2"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
              </Form>
            </div>
            <h3>Taco</h3>
            <p>
              The biggest taco ever made was constructed on November 20th, 2011
              in Queretaro, Mexico.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-4 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem
                .filter(
                  (item) =>
                    item.CategoryName === data.CategoryName &&
                    item.name.toLowerCase().includes(search.toLocaleLowerCase())
                )
                .map((filterItems) => (
                  <div
                    key={filterItems._id}
                    className="col-12 col-md-6 col-lg-3"
                  >
                    <NewCard
                      foodName={filterItems.name}
                      options={filterItems.options[0]}
                      imgSrc={filterItems.img}
                      description={filterItems.description}
                    />
                  </div>
                ))}
            </div>
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
