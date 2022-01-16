import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

function macroCalc(calPerGram, percent, total){
    console.log(calPerGram, percent, total)
    const calPer = parseInt(calPerGram)
    const percentAsFloat = parseFloat(percent)
    const cals = parseInt(total) * percentAsFloat;
    return Math.round(cals / calPer);
}

const Macro = (props) => {
    return (
    <div>
        {/* <h1>
        {props.name}: {macroCalc(props.calPerGram, props.percent, props.total)} grams

        </h1> */}
        <Accordion.Item eventKey={props.eventKey}>
            <Accordion.Header>         {props.name}: {macroCalc(props.calPerGram, props.percent, props.total)} grams </Accordion.Header>

                <Accordion.Body>
                {props.text}
                </Accordion.Body>
            
        </Accordion.Item>


    </div>
    )
}

export default Macro;



