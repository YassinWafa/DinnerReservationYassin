// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";

function App() {
  const header = (
    <header>
      <div>
        <h1>Dinner reservation</h1>
      </div>
    </header>
  );

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [personCount, setPersonCount] = useState(1);
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  function formSubmit(e) {
    e.preventDefault();
    let timeArr = time.split("T");
    let dateArr = timeArr[0].split("-");
    let formattedDate = dateArr[2] + "." + dateArr[1] + "." + dateArr[0];

    // alert(
    //   'First Name: ' + firstName + '\n' +
    //   'Last Name: ' + lastName + '\n' +
    //   'Phone Number: ' + phone + '\n' +
    //   'Email: ' + email + '\n' +
    //   'No. of attendees: ' + personCount + '\n' +
    //   'Date and time of reservation: ' + formattedDate + ' at ' + timeArr[1] + '\n' +
    //   'Comment: ' + comment
    // );

    alert(
      " Dear " +
        firstName +
        " " +
        lastName +
        " thank you for making a dinner reservation. A table for " +
        personCount +
        " will be reserved on the " +
        formattedDate +
        " at " +
        timeArr[1] +
        ". If there are any changes on your reservation, we will contact you wither at " +
        email +
        " or on " +
        phone +
        '. We will try to pay as much attention to your comment as possible: "' +
        comment +
        '"'
    );
  }

  document.body.style =
    'background-image: url("https://media.blogto.com/articles/20170920-bluebloodsteakhouse-05.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70"); ' +
    "background-repeat: no-repeat; " +
    "background-position: absolute; " +
    "background-size:cover";

  return (
    <div className="container">
      {header}
      <hr />
      <form onSubmit={formSubmit}>
        <Row>
          <Col>
            <div className="form-group">
              <label>First Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label>Last Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </Col>

          <Col>
            <div className="form-group">
              <label>Phone:</label>
              <br />
              <input
                className="form-control"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label>Email:</label>
              <br />
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={6}>
            <div className="form-group">
              <label>Time:</label>
              <br />
              <input
                className="form-control"
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></input>
            </div>
          </Col>

          <Col xs={6}>
            <div className="form-group">
              <label>Attendee Count:</label>
              <br />
              <input
                className="form-control"
                type="number"
                min="1"
                max="12"
                value={personCount}
                onChange={(e) => setPersonCount(e.target.value)}
              ></input>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <div className="form-group">
              <label>Comment:</label>
              <br />
              <textarea
                className="form-control"
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
          </Col>
        </Row>
        <hr />
        <Button className="btn-secondary alert-success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
