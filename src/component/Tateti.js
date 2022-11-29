import React from "react";
import "../stylesheet/Tateti.css";

const Tateti = () => {
  const seleccionar = () => {
    alert("Funciona");
  }
  
  const Celda = () => {
    return <td onClick={() => seleccionar()}>-</td>;
  };
  return (
    <div className="container">
      <table className="tabla">
        <tbody>
          <tr>
            <Celda />
            <Celda />
            <Celda />
          </tr>
          <tr>
            <Celda />
            <Celda />
            <Celda />
          </tr>
          <tr>
            <Celda />
            <Celda />
            <Celda />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tateti;
