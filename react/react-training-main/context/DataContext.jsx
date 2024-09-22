// step 1
import { createContext } from "react";

// step2
export const DataContext =createContext()

// step3
 export const DataProvider=()=>{
    const data ="hello this is comming from context"
    return <DataContext.Provider value={{data}}>

    </DataContext.Provider>
}
