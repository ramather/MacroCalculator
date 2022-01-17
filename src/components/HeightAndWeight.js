import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HeightAndWeight = (props) => {
const [metric, setMetric]= useState(true)

  if (metric) {
    return (
      <div>
        <div className="inputs">
          <Form.Group className="mb-3">
            <Form.Label
            style={{paddingRight: "15px"}}
            >Height (cm)</Form.Label>
            
            <Button
            onClick={()=>{
                const newMetric = !metric
                setMetric(newMetric)            }} 
            style={{height: "25px", display: "inline-flex", alignItems: "center", paddingLeft: "10px"}}
            variant = "secondary"
            >Units</Button>
            <Form.Control
              isInvalid={!!props.errors.height}
              onChange={(e) => props.setField("height", e.target.value)}
              type="number"
            />

            <Form.Control.Feedback type="invalid">
              {props.errors.height}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
        <div className="inputs">
          <Form.Group className="mb-3">
            <Form.Label>Weight (kg)</Form.Label>
            <Form.Control
              isInvalid={!!props.errors.weight}
              type="number"
              className="inputs"
              onChange={(e) => props.setField("weight", e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {props.errors.weight}
            </Form.Control.Feedback>
          </Form.Group>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="inputs">
        <Form.Group className="mb-3">
          <Form.Label
                      style={{paddingRight: "15px"}}

          >Height (in)</Form.Label>
          <Button
            onClick={()=>{
                const newMetric = !metric
                setMetric(newMetric)
            }} 
            style={{height: "25px", display: "inline-flex", alignItems: "center", paddingLeft: "10px"}}
            variant = "secondary"
            >Units</Button>

          <Form.Control
            
            isInvalid={!!props.errors.height}
            onChange={(e) => props.setField("height", heightConverter(e.target.value))}
            type="number"
          />

          <Form.Control.Feedback type="invalid">
            {props.errors.height}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      <div className="inputs">
        <Form.Group className="mb-3">
          <Form.Label>Weight (lbs)</Form.Label>
          <Form.Control
            isInvalid={!!props.errors.weight}
            type="number"
            className="inputs"
            onChange={(e) => props.setField("weight", weightConverter(e.target.value))}
          />
          <Form.Control.Feedback type="invalid">
            {props.errors.weight}
          </Form.Control.Feedback>
        </Form.Group>
      </div>
    </div>
  );
};

// const UnitButton = (metric, setMetric ) => {
//     return(
//     <div>
//         <Button
//             onClick={()=>{
//                 setMetric(metric = !metric)
//             }} 
//             style={{height: "25px", display: "inline-flex", alignItems: "center", paddingLeft: "10px"}}
//             variant = "secondary"
//             >Units</Button>
//     </div>
//     )
// }

function heightConverter(inches) {
  return  inches / 0.3937;
}

function weightConverter(weight) {
  return weight * 0.453592;
}

export default HeightAndWeight;
