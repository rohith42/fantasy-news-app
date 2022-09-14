import { createContext, useState } from "react";

const RosterContext = createContext();

export function RosterProvider({ children }) {
    return (
        <RosterContext.Provider 
            value={{
                selected: "russell wilson",
                roster: ["dak prescott", 'pete carroll']
            }}
        >
            {children}
        </RosterContext.Provider>
    );
}


export default RosterContext;