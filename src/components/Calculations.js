import React from "react";
import Macro from "./Macro";
import Accordion from "react-bootstrap/Accordion";




const Calculations = (props) => {
    const pro = `Protein is a nutrient needed by the human body for growth and maintenance. Aside from water, proteins 
    are the most abundant kind of molecules in the body. Protein can be found in all cells of the body and is the major
     structural component of all cells in the body, especially muscle.`
     
    const carb = `Carbohydrates, or carbs, are sugar molecules. Along with proteins and fats, carbohydrates are one of
     three main nutrients found in foods and drinks. Your body breaks down carbohydrates into glucose. Glucose, or blood
      sugar, is the main source of energy for your body's cells, tissues, and organs."`
     
    const fats = `Fats give you energy, and they help the body absorb certain vitamins. Essential fatty acids help the body function, 
    but they aren't made by your body—you have to consume them. Many foods naturally contain fats, including dairy products; meats, 
    poultry, seafood, and eggs; and seeds, nuts, avocados, and coconuts.`

    if(props.total === 0){
        return (
            <div>
             
            </div>
            )
    }
        return (
           
                <div className="accordionBox">
                <Accordion  variant="secondary" flush>
                <Macro calPerGram={4} name="Carbs" total={props.total} percent={.4} text={carb} eventKey="0"></Macro>
                <Macro calPerGram={4} name="Protein" total={props.total} percent={.3} text={pro} eventKey="1"></Macro>
                <Macro calPerGram={9} name="Fat" total={props.total} percent={.3} text={fats} eventKey="2"></Macro>
                </Accordion>
                </div>
            
        )

    
}

export default Calculations