import React, { useState } from "react";
import { Activity } from "./activity";
import "./style.css";
function Userinput() {
  const [serviceList, setServiceList] = useState([]);
  // [
  //  {eventName: 'rishabh', noOfDays: 0, },
  //  {eventName: '', noOfDays: 0, },
  //  {eventName: '', noOfDays: 0, },
  // ]

  const handleServiceChange = (e, index) => {
    // console.log(e.target.timer);
    // console.log(e.target.value);
    // console.log(index);

    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
    // console.log(serviceList);
  };

  const handleServiceRemove = (e, index) => {
    e.preventDefault();
    // console.log(index);
    let modArray = serviceList.filter((val, idx) => {
      // console.log(idx);
      return idx !== index;
    });
    // console.log(modArray);
    setServiceList([...modArray]);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  const myFunction = (e) => {
    e.preventDefault();
    window.location = "https://www.timeanddate.com/calendar/";
  };
  return (
    <div className="main">
      <h2>Schedule Creator</h2>
      <hr className="line" />
      <div className="form-row">
        <div className="form-group col-md-5 div2">
          <label htmlFor="inputEmail4">
            <strong>Event Name</strong>
          </label>
          <br />
          <input
            type="text"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter event Name"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-2 div2">
          <label htmlFor="inputEmail4">
            <strong>No of Days</strong>
          </label>
          <input
            type="number"
            className="form-control"
            id="inputEmail4"
            placeholder="0"
          />
        </div>
      </div>
      <div className="form-group col-md-2 st_col">
        <label htmlFor="dt">
          <strong>Start date:</strong>
        </label>
        <input type="date" className="form-control" id="dt"></input>
      </div>
      <br />
      <h5> Add Your Activities...</h5>
      <form className="App" autoComplete="off">
        <div className="form-field">
          {serviceList.map((singleService, index) => (
            <Activity
              key={index}
              index={index}
              value={singleService.service}
              deleteActivity={handleServiceRemove}
              handleServiceChange={handleServiceChange}
            />
          ))}
          <button
            type="button"
            onClick={handleServiceAdd}
            className="buttonAdd"
          >
            Add
          </button>
        </div>
      </form>
      <br />
      <button
        type="button"
        className="btn btn-primary submitBT"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Submit
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered " role="document">
          <div className="modal-content pop">
            <div className="modal-header pop">
              <h5 className="modal-title pop" id="exampleModalLongTitle">
                Thank You!!!
              </h5>
              <button
                type="button"
                className="close pop"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="pop" aria-hidden="true">
                  &times;
                </span>
              </button>
            </div>
            <div className="modal-body pop">
              Do you want to schedule events ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                NO
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={myFunction}
              >
                YES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userinput;
