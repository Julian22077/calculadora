import { useState } from "react";
const Contador=()=>{
    const[contador, setContador]=useState(0);
    function Aumentar(){
        setContador(contador+1);
    }
    return (
        <div>
        <label>Contador:{contador}</label>
        <br/>
        <button onClick={Aumentar}>Aumentar</button>
        </div>
    );
};
export default Contador;