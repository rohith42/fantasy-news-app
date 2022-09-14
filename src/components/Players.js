import React from "react";
import Roster from "./Roster";
import SimpleInput from "./SimpleInput";

function Players () {
    return (
        <div className="players-component">
            <SimpleInput />
            <Roster />
        </div>
    )
}

export default Players;