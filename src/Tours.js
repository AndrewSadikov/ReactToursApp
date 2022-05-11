import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {props.toursProp.map((tour) => {
          return (
            <Tour
              {...tour}
              removeTourFunctionAgain={props.removeTourFunction}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
