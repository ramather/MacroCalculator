import React, { useState } from "react";
import Calculations from "./Calculations";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Screen from "./Screen";
import Button from "react-bootstrap/Button";

const Fields = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [total, setTotal] = useState(0);


  const findErrors = () => {
    const { rate, sex, age, height, weight } = form;
    const newErrors = {};

    if (!rate || rate === 0) newErrors.rate = "plz";

    if (!sex || sex === 0) newErrors.sex = "plz";

    if (!age || age === "") newErrors.age = "please enter an age";
    else if (age < 18 || age > 80) newErrors.age = "age must be between 18-80";

    if (!height || height === "") newErrors.height = "plz enter height";
    else if (height < 1) newErrors.height = "cannot be less than 0, fren";

    if (!weight || weight === "") newErrors.weight = "plz";
    else if (weight < 1) newErrors.weight = "gotta be at least 1kg, fren";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setTotal(calCalc(form.age, form.height, form.weight, form.rate, form.sex))
    }
  };

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  };

  return (
    <div style={{ paddingTop: "50px" }}>

      <div className="wrapper">
        <Screen value={total} />
        <Form onSubmit={handleSubmit}>
          <div className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Height</Form.Label>
              <Form.Control
                isInvalid={!!errors.height}
                onChange={(e) => setField("height", e.target.value)}
                type="number"
              />

              <Form.Control.Feedback type="invalid">
                {errors.height}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <div className="inputs">
            <Form.Group className="mb-3">
              <Form.Label>Weight</Form.Label>
              <Form.Control
                isInvalid={!!errors.weight}
                type="number"
                className="inputs"
                onChange={(e) => setField("weight", e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.weight}
              </Form.Control.Feedback>
            </Form.Group>
          </div>

          <div className="inputs">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                isInvalid={!!errors.age}
                onChange={(e) => setField("age", e.target.value)}
                type="number"
              />
              <Form.Control.Feedback type="invalid">
                {errors.age}
              </Form.Control.Feedback>
            </Form.Group>
          </div>
          <Row>
            <Col>
              <div style={{ paddingLeft: "15px" }}>
                <Form.Group className="mb-3" >
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    isInvalid={!!errors.sex}
                    as="select"
                    onChange={(e) => setField("sex", e.target.value)}
                  >
                    <option value={0}>Select:</option>

                    <option value={5}>male</option>
                    <option value={-161}>female</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.sex}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
            <Col>
              <div style={{ paddingRight: "15px" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Activity Level</Form.Label>

                  <Form.Control
                    as="select"
                    isInvalid={!!errors.rate}
                    onChange={(e) => setField("rate", e.target.value)}
                  >
                    <option value={0}>Select:</option>
                    <option value={1}>Basal Metabolic Rate (BMR)</option>
                    <option value={1.2}>
                      Sedentary: little or no exercise
                    </option>
                    <option value={1.375}>
                      Light: exercise 1-3 times/week
                    </option>
                    <option value={1.465}>
                      Moderate: exercise 4-5 times/week
                    </option>
                    <option value={1.55}>
                      Active: daily exercise or intense exercise 3-4 times/week
                    </option>
                    <option value={1.725}>
                      Very Active: intense exercise 6-7 times/week
                    </option>
                    <option value={1.9}>
                      Extra Active: very intense exercise daily, or physical job
                    </option>{" "}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.rate}
                  </Form.Control.Feedback>
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Button
            variant="secondary"
            style={{ width: "60%" }}
            type="submit"
            onClick={() => {
              console.log(form);
              // handleSubmit()
            }}
          >
            Calculate
          </Button>
        </Form>
      </div>
      <Calculations
        total={total}
      />
    
    </div>
  );
};

function calCalc(age, height, weight, rate, sex) {
  console.log(`this is the sex: ` + sex);
  console.log(typeof sex);
  console.log("this is the rate " + rate);
  console.log(typeof rate);
  rate = parseFloat(rate)
  sex = parseInt(sex)
  let calories = 10 * weight + 6.25 * height - 5 * age + sex;
  calories = calories * rate;
  return Math.round(calories);
}

export default Fields;
