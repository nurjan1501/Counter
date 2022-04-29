import React, { useState } from "react";

const Receipts = () => {
  const [receipts, setReceipts] = useState("");

  return (
    <form>
      <div className="radio">
        <label>
          <input type="radio" value="option1" checked={true} />
          Lagman
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option2" checked={false} />
          Manty
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" value="option3" checked={false} />
          Pizza
        </label>
      </div>
    </form>
  );
};

export default Receipts;
