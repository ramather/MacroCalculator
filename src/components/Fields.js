import React, { useState } from "react";
import Calculations from "./Calculations";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Screen from "./Screen";
import Button from "react-bootstrap/Button";

const Fields = () => {

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState(1);
  const [sex, setSex] = useState(5);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
  }

  return (
    <div style={{ paddingTop: "50px" }}>
      <div className="wrapper">
        <Screen value={total} />
        <Form>
          <div className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Height</Form.Label>
              <Form.Control
                onChange={(event) => {
                  setHeight(event.target.value);
                }}
                type="text"
              />
            </Form.Group>
          </div>
          <div className="inputs">
            <Form.Group className="mb-3">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                className="inputs"
                type="text"
                onChange={(event) => {
                  setWeight(event.target.value);
                }}
              />
            </Form.Group>
          </div>

          <div className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                onChange={(event) => {
                  if (event.target.value < 18) {
                    setAge(18);
                  } else if (event.target.value > 80) {
                    setAge(80);
                  } else {
                    setAge(event.target.value);
                  }
                }}
                type="text"
              />
            </Form.Group>
          </div>
          <Row>
            <Col>
              <div style={{ paddingLeft: "15px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Sex</Form.Label>
                  <Form.Select
                    defaultValue="Choose..."
                    onChange={(event) => {
                      setSex(event.target.value);
                    }}
                  >
                    <option value="5">male</option>
                    <option value="-161">female</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div style={{ paddingRight: "15px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Activity Level</Form.Label>
                  <Form.Select
                    onChange={(event) => {
                      setRate(event.target.value);
                    }}
                  >
                    <option value="1">Basal Metabolic Rate (BMR)</option>
                    <option value="1.2">
                      Sedentary: little or no exercise
                    </option>
                    <option value="1.375">
                      Light: exercise 1-3 times/week
                    </option>
                    <option value="1.465">
                      Moderate: exercise 4-5 times/week
                    </option>
                    <option value="1.55">
                      Active: daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value="1.725">
                      Very Active: intense exercise 6-7 times/week
                    </option>
                    <option value="1.9">
                      Extra Active: very intense exercise daily, or physical job
                    </option>{" "}
                  </Form.Select>
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Button
            variant="secondary"
            style={{ width: "60%" }}
            onClick={() => {
              if (age === 0 || weight === 0 || height === 0) {
                alert("Please fill out the fields");
              } else {
                setTotal(calCalc(age, height, weight, rate, sex));
              }
            }}
          >
            Calculate
          </Button>
        </Form>
      </div>
      <Calculations
        total={total}
        sex={sex}
        age={age}
        height={height}
        weight={weight}
        rate={rate}
      />
    </div>
  );
};


function calCalc(age, height, weight, rate, sex) {
  let calories = 10 * weight + 6.25 * height - 5 * age + sex;
  calories = calories * rate;
  return Math.round(calories);
}

export default Fields;
