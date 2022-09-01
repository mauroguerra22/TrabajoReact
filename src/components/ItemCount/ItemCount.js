import { Alert } from "@mui/material";
import React, { useState } from "react";
import Header from "../Header/Header.css";

const ItemCount = () => {
    const [name, setName] = useState("Proteina");
    const [counter, setCounter] = useState(0);
    
    const handlerCounterUp = () => {
        setCounter(counter + 1 )
        alert("Sin Stock");
    }


    return (
        <div className="center">
            <h1 className="ic">Cantidad de Suplementos</h1>
            <p>{name}</p>
            <button onClick={() => setName("Creatina")}>Cambiar Suplemento</button>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}>+</button>
            <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
    )
}

export default ItemCount;
