import React, { useState } from "react";
import { Button } from "react-bootstrap";
import product from "../Product";

function Price() {
  const [bought, setBought] = useState(false);

  function handleBuy() {
    // simple purchase confirmation — replace with real checkout later
    alert(`Purchased ${product.name} for ${product.price}`);
    setBought(true);
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h4 style={{ margin: 0 }}>{product.price}</h4>
      <Button variant="primary" size="sm" onClick={handleBuy} disabled={bought}>
        {bought ? "Purchased" : "Buy"}
      </Button>
    </div>
  );
}

export default Price;
