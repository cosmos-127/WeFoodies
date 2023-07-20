import Carousel from "react-bootstrap/Carousel";
import CarouselImageGenerator from "./CarouselImageGenerator";

import CarouselForm from "./CarouselForm";

function ControlledCarousel() {
  return (
    <Carousel fade style={{objectFit: "contain !important"}}>
      <Carousel.Item>
        <CarouselImageGenerator text="burger" />
        <Carousel.Caption>
          <CarouselForm />
          <h3>Burger</h3>
          <p>
            TheBurger was first invented in SEYMOUR FAIR, WISCONSIN, in 1885
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImageGenerator text="pizza" />
        <Carousel.Caption>
        <CarouselForm />
          <h3>Pizza</h3>
          <p>About 350 slices of Pizza are consumed every second in the US</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImageGenerator text="taco" />
        <Carousel.Caption>
        <CarouselForm />
          <h3>Taco</h3>
          <p>
            The biggest taco ever made was constructed on November 20th, 2011 in
            Queretaro, Mexico.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
