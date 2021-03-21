import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const Prices = () => {
  const [priceLookupKey, setPriceLookupKey] = useState(null);

  if (priceLookupKey) {
    return <Redirect to={{
      pathname: '/subscribe',
      state: { priceLookupKey }
    }} />
  }

  return (
    <div>
      <h1>Select a plan</h1>

      <div className="price-list">
        <div>
          <h3>Product X1</h3>

          <p>
            $10.00
          </p>
          <p>
            Free Trail Period : 1 day
          </p>

          <button onClick={setPriceLookupKey.bind(null, "basic")}>
            Select
          </button>
        </div>

        <div>
          <h3>Product X2</h3>

          <p>
            $20.00
          </p>
          <p>
            Free Trail Period : 2 days
          </p>

          <button onClick={setPriceLookupKey.bind(null, "premium")}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Prices);
