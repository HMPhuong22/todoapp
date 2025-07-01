import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { createGlobalStyle } from "styled-components";

const NameContext = createContext();

export const NameProdiver = ({children}) => {
    const [name, setName] = useState('Phuong')
    const [color, setColor] = useState('red')

    const changeColor = () => {
        setColor(color === 'red' ? 'blue':'red')
    }

    return(
        <NameContext.Provider value={{name, color, changeColor}}>
            {children}
        </NameContext.Provider>
    )
}

export default NameContext;