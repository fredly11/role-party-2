import data from "./data";
import React, { useState } from "react";

function App() {
  const [parties, setParties] = useState(data);
  const [activeParty, setActiveParty] = useState(0);
  console.log(parties);

  const { name, icon, users, rooms } = parties[activeParty];

  return (
    <section className="section">
      <div className="title">
        <h2>Parties</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {parties.map((party, index) => {
            return (
              <button
                key={party.id}
                onClick={() => {
                  setActiveParty(index);
                }}
                className={`job-btn ${index === activeParty && "active-btn"}`}
              >
                {party.icon}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{name}</h3>
          <h4>{icon}</h4>
          {rooms.map((room) => {
            return (<div key={room.id} className="job-btn">{room.name}</div>
            
            ))}}
        </article>
      </div>
    </section>
  );
}

export default App;
