import React from "react";
import spinner from "./spinner.gif";
const Spinner = () => {
    return (
        <div>
            {" "}
            <img
                src={spinner}
                alt="Loading..."
                style={{ width: "400px", marginLeft:"45.5rem", marginTop:"18.75rem" , display: "block" }}
            />
        </div>
    );
};

export default Spinner;