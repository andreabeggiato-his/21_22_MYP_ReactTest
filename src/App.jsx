import React from 'react';

import { PlusIcon, MinusIcon } from '@heroicons/react/outline';

const breadPrice = 1.2;

const App = () => {

  const [breadCount, setBreadCount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const handleBreadPlus = () => {
    setBreadCount(1);
  };

  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-12">
          <h2 className="text-center">Cash Register</h2>
        </div>
      </div>
      <div className="row bg-success bg-opacity-10 py-3">
        <div className="col-6">
          <span className="display-6 align-middle">
            Bread:
          </span>
        </div>
        <div className="col-6">
          <div class="float-end">
              <span className="align-middle display-6">{breadCount}</span>
            <button
              onClick={handleBreadPlus}
              className="btn btn-primary ms-2"
            >
              <PlusIcon style={{ height: '40px', width: '40px'}}/>
            </button>
          </div>
        </div>
      </div>
      <div className="row bg-info bg-opacity-25 py-5">
        <div className="col-6">
          <span className="display-5 align-middle">
            Total:
          </span>
        </div>
        <div className="col-6 text-end">
          <span className="display-5">{total}</span>
        </div>
      </div>
    </div>
  )
};

export default App;
