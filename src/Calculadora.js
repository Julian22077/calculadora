import { useState } from "react";


const Calculadora = () => {
  const [pantalla, setPantalla] = useState("");
  const [guardado, setGuardado] = useState(0);
  const [operacion, setOperacion] = useState("");

  function numero(n) {
    if (pantalla === "") {
      setPantalla(String(n));
    } else {
      setPantalla(pantalla + String(n));
    }
    
  }

  function operador(op) {
    setGuardado(Number(pantalla));
    setOperacion(op);
    setPantalla("");
  }
  
 

  function igual() {
    if (guardado===null || operacion==="") return;

    const n2 = Number(pantalla);
    let res;

    if (operacion === "+") res = guardado + n2;
    if (operacion === "-") res = guardado - n2;
    if (operacion === "*") res = guardado * n2;
    if (operacion === "/") {
      if(n2==0||guardado==0 && n2==0){
        setPantalla("No se puede dividir por cero ");
        setGuardado(0);
        setOperacion("");
        return;
      }
      res = guardado / n2;
    }
    if(operacion==="^") res=guardado**n2;
    if(operacion==="r") {
      if(guardado<0){
        setPantalla("Error, no existe raiz negativa");
        setGuardado(0);
        setOperacion("");

      }
      res=Math.sqrt(guardado);
    }
    if(operacion==="log") {
      if(guardado<=0){
        setPantalla("Error");
        setGuardado(0);
        setOperacion("");
        return;
      }
    res=Math.log(guardado);
    }

    setPantalla( String(res));
    setGuardado(0);
    setOperacion("");
  }

  function reset() {
    setPantalla("");
    setGuardado(0);
    setOperacion("");
  }

  return (
    <div className="Contador">
      <label>Pantalla: {pantalla}</label>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={() => numero(1)}>1</button>
      <button onClick={() => numero(2)}>2</button>
      <button onClick={() => numero(3)}>3</button>
      <br />
      <button onClick={() => numero(4)}>4</button>
      <button onClick={() => numero(5)}>5</button>
      <button onClick={() => numero(6)}>6</button>
      <br />
      <button onClick={() => numero(7)}>7</button>
      <button onClick={() => numero(8)}>8</button>
      <button onClick={() => numero(9)}>9</button>
      <br />
      <button onClick={() => numero(0)}>0</button>
      <br />
      <button onClick={() => operador("+")}>+</button>
      <button onClick={() => operador("-")}>-</button>
      <button onClick={() => operador("/")}>/</button>
      <button onClick={() => operador("*")}>*</button>
      <button onClick={() => operador("^")}>^</button>
      <button onClick={() => operador("r")}>r</button>
      <button onClick={() => operador("log")}>log</button>
      <br />
      <button onClick={igual}>=</button>
    </div>
  );
};

export default Calculadora;