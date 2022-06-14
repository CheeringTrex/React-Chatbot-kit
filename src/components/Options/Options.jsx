import React, { useEffect, useState } from 'react';
import "./Options.css";




const VacationOptions = (props) => {
    const options = [
        {text: "Rust",
        handler:props.actionProvider.handleRustList,
        id:1 },
        {text: "Natuur", handler:() => {}, id:2 },
        {text: "Actief", handler:() => {}, id:3 },
        {text: "Duurzaamheid", handler:() => {}, id: 4}
    ];

    const optionsMarkup = options.map((option) => (
        <button
          className="vacation-option-button"
          key={option.id}
          onClick={option.handler}
        >
          {option.text}
        </button>
      ));

    return <div className="vacation-options-container"> {optionsMarkup}</div>

};

export default VacationOptions;
