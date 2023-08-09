import React from "react";
import Card from "react-bootstrap/Card";

const NewCard = (props) => {
  return (
    <div className="mb-3">
      <Card style={{ width: "16rem", maxHeight: "400px" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.foodName}</Card.Title>
          <Card.Text style={{ fontSize: "13px", color: "#E1E1D9" }}>
            {props.description}
          </Card.Text>
          <div className="container w-100">
            <select className="m-2 h-100 rounded bg-dark text-bg-dark">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 rounded bg-dark text-bg-dark">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
          </div>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewCard;
