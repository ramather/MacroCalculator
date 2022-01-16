import React from "react";
import Accordion from "react-bootstrap/Accordion";

function macroCalc(calPerGram, percent, total) {
  const calPer = parseInt(calPerGram);
  const percentAsFloat = parseFloat(percent);
  const cals = parseInt(total) * percentAsFloat;
  return Math.round(cals / calPer);
}

const Macro = (props) => {
  console.log(props);
  return (
    <div>
      <Accordion.Item eventKey={props.eventKey}>
        <Accordion.Header>
         
          {props.name}:{" "}
          {macroCalc(props.calPerGram, props.percent, props.total)} grams{" "}
        </Accordion.Header>

        <Accordion.Body
        style={{color: "black"}}
        >{props.text}</Accordion.Body>
      </Accordion.Item>
    </div>
  );
};

export default Macro;
