import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CarouselForm = () => {
  return (
    <div>
      <Form className="d-flex mb-5">
        <Form.Control
          type="search"
          placeholder="Search your Delicious meal"
          className="me-2"
          aria-label="Search"
        />
        <Button className="card">Search</Button>
      </Form>
    </div>
  );
};

export default CarouselForm;
