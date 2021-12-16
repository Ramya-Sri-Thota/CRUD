import React, { useState } from "react";

export const Compaign = () => {
  const [state, setstate] = useState("");
  const [inputs, setinputs] = useState([]);
  const handleChange = (e) => {
    setstate(e.target.value);
  };
  const handleSubmit = () => {
    setinputs((inputs) => {
      return [...inputs, state];
    });
  };
  console.log(inputs);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-9">
            <div className="text-center">Compaign List</div>
          </div>
          <div className="col-md-3">Set Compaign</div>
        </div>
        <div className="row row-cols-1 row-cols-lg-4 g-2 g-lg-1 mt-4">
          <div className="col">
            <div className="p-3 border bg-light text-center">
              Test Compaign
              <div className="col">
                <div className="p-3 border bg-light d-flex">
                  <div>
                    <span>Send Mail </span>
                    <h6>Yes</h6>
                  </div>
                  <div>
                    <span>Send Sms </span>
                    <h6>Yes</h6>
                  </div>
                  <div>
                    <span>Send Push Notification </span>
                    <h6>Yes</h6>
                  </div>
                </div>
                <div className="btn-group mt-3">
                  <button type="button" className="btn btn-outline-primary">
                    Edit
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Delete
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    Paused
                  </button>
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Comment"
                    aria-label="Comment"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <button className="mt-3">Comment</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Test Compaign 2</div>
            {inputs.map((val, index) => {
              return <h2 key={index}>{val}</h2>;
            })}
          </div>
          <div className="col">
            <div className="p-3 border bg-light">Test Compaign 3</div>
          </div>
          <div className="col">
            <div className="p-3 border bg-light">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Text Compaign 4"
                aria-label="Text Compaign 4"
                aria-describedby="basic-addon1"
              />
              <div className="mt-3">
                <span>Send Email To Clients:</span>
                <div
                  className="btn-group ms-2 btn-group-sm"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    Yes
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <span>Send SMS To Clients:</span>
                <div
                  className="btn-group ms-2 btn-group-sm"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio3"
                  >
                    Yes
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio4"
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <span>Send Push Notifications To Clients:</span>
                <div
                  className="btn-group ms-2 btn-group-sm"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio5"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio5"
                  >
                    Yes
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio6"
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio6"
                  >
                    No
                  </label>
                </div>
                <div>
                  <button className="mt-3" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
