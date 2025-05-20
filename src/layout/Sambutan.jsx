import React from "react";
import "../style/Sambutan.css"; 
import { sambutanList } from "../data/SambutanList"; 

const Jelajah = () => {
  // Ambil data pertama dari sambutanList
  const { nama, foto, jabatan, sambutan } = sambutanList[0];

  return (
    <div className="sambutan">
   
        <h2 className="text-center">Sambutan {jabatan}</h2>
        <div className="row">
          <div className="col-md-4">
            <img src={foto} alt="dd" />
          </div>
          <div className="col-md-8">
            <h4>{nama}</h4>
        <h5>{jabatan}</h5>
          </div>
        </div>
        <p className="justify-content-center">{sambutan}</p>
     
    </div>
  );
};

export default Jelajah;
