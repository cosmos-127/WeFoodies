import React from "react";
import NewNavbar from "../components/NewNavbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div>
      <div>
        <NewNavbar />
      </div>
      <div>
        <Card style={{ width: "18rem", maxHeight: "360px" }} className="mt-3">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title
            </Card.Text>
            <div className="container w-100">
              <select className="m-2 h-100 w-100 ">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
