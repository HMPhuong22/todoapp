import React, { useContext } from "react";
import NameContext from "../NameContext";
import "../components/styles/News.css"

const News = () => {
    const nameContext = useContext(NameContext)
    console.log(nameContext.color)
    return (
        <>
            <button onClick={nameContext.changeColor}>Set color for text</button>
            <h1 className={nameContext.color}>News page</h1>
            <h3>Name: {nameContext.name}</h3>
        </>
    )
}

export default News;