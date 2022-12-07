import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

function App() {
  const [cities,setcities] = useState([]);
  const [showCity,setshowCity] = useState(false);
  const [showTowns,setShowTowns] = useState(false);
  const [towns,setTowns] = useState([]);

  const displayCity = id =>{
    setcities(pre => [...states[id]].cities);
    setshowCity(!showCity);
    if(showTowns)
    setShowTowns(!showTowns);
  }
  const displayTowns = (id) =>{
    setTowns(cities[id].towns);
    setShowTowns(!showTowns);
  }
  return (
  <div id="main">
    <div className="states">
      {states.map((state,index) =>(
        <state key= {`${state + index}`}
        displayCity = {displayCity} id = {index} stateName = {state.name} />
      ))}
    </div>
    <div className="cities">
      {cities && showCity && cities.map((city,index) => (
        <City key={`${city + index}`}
        displayTowns = {displayTowns} id = {idx} cityName = {city.name} />
      ))}
    </div>
    <div className="towns">
      {towns && showTowns && towns.map((towns, index) =>(
        <Town key={`${town + index}`} id = {index} townName = {town.name} />
      ))}
    </div>
  </div>
  )
}

export default App;
