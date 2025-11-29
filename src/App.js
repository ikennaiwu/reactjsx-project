import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";

const firstName = ""; // <- Add your name here: "Pius"

function App() {
  return (
    <>
      <div className="App" style={{ width: "350px", margin: "40px auto" }}>
        <Card style={{ padding: "20px", boxShadow: "0 0 10px #ccc" }}>
          <Image />
          <Card.Body>
            <Name />
            <Price />
            <Description />
          </Card.Body>
        </Card>

        {/* Greeting Message */}
        <h2 style={{ marginTop: "20px", textAlign: "center" }}>
          Hello, {firstName ? firstName : "there!"}
        </h2>

        {/* Display Image if name exists */}
        {firstName && (
          <img
            src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            alt="hello avatar"
            style={{ width: "120px", display: "block", margin: "20px auto" }}
          />
        )}
      </div>
    </>
  );
}

export default App;
