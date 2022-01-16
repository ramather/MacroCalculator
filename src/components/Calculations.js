import React from "react";
import Macro from "./Macro";
import Accordion from "react-bootstrap/Accordion";




const Calculations = (props) => {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do "

    if(props.total === 0){
        return (
            <div>
             
            </div>
            )
    }
        return (
           
                <div className="accordionBox">
                <Accordion  variant="secondary">
                <Macro calPerGram={4} name="Carbs" total={props.total} percent={.4} text={text} eventKey="0"></Macro>
                <Macro calPerGram={4} name="Protein" total={props.total} percent={.3} text={text} eventKey="1"></Macro>
                <Macro calPerGram={9} name="Fat" total={props.total} percent={.3} text={text} eventKey="2"></Macro>
                </Accordion>
                </div>
            
        )

    
}

export default Calculations