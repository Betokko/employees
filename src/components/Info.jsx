import React from "react";
import "./styles/Info.css";

function Info(props) {
  const { employees, increased } = props;
  return (
    <div className="Info">
      <h1>Учет сотрудников в комании</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {increased}</h2>
    </div>
  );
}

export default Info;
