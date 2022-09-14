import React from "react";
import SimpleInput from "./SimpleInput";

function Players () {
    const output = <p>Add a player or a team to get started</p>;
    
    return (
        <div className="players-component">
            <SimpleInput />
            {output}
        </div>
    )
}

export default Players;