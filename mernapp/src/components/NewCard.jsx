import React from "react";
import Card from "react-bootstrap/Card";

const NewCard = () => {
  return (
    <div>
      <Card style={{ width: "18rem", maxHeight: "360px" }} >
        <Card.Img variant="top" src="https://media.istockphoto.com/id/693946394/photo/paneer-tikka-kabab-tandoori-indian-cheese-skewers-or-barbecue-paneer-selective-focus.jpg?s=1024x1024&w=is&k=20&c=FyZaA2fwPVwQ1g65ykXByBrsiZQjSFboB-tzXSDO-Cs=" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title
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
