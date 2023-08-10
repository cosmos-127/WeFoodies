import React from "react";
import Card from "react-bootstrap/Card";

const NewCard = (props) => {
  const { options, imgSrc, foodName, description } = props;

  // Extracting the keys from the options object and storing them in the priceOptions array.
  const priceOptions = Object.keys(options);

  return (
    <div className="mb-3 ">
      <Card style={{ width: "16rem", height: "410px" }}>
        <Card.Img
          variant="top"
          src={imgSrc}
          style={{ height: "180px", objectFit: "fill" }}
        />
        <Card.Body>
          <Card.Title>
            {" "}
            <b>{foodName}</b>{" "}
          </Card.Title>
          <Card.Text style={{ fontSize: "12px", color: "#E1E1D9" }}>
            {description}
          </Card.Text>

          <div className="container w-100 ">
            {/* Array.from(...): Turn this empty list[Array(6)] into a real array and do something with each slot. */}
            <select className="m-2 h-100 rounded bg-dark text-bg-dark">
              {Array.from(Array(6), (value, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Dropdown for selecting price options */}
            <select className="m-2 h-100 rounded bg-dark text-bg-dark">
              {priceOptions.map((data) => (
                <option key={data} value={data}>
                  {data}
                </option>
              ))}
            </select>
          </div>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewCard;
