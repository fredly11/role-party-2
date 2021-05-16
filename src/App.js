import data from "./data";
import React, { useState } from "react";
import Messages from "./Components/Messages";

function App() {
  const [parties, setParties] = useState(data);
  const [activeParty, setActiveParty] = useState(0);
  const [addRoomText, setAddRoomText] = useState("");

  const { name, icon, users, rooms, activeRoom } = parties[activeParty];

  const handleRoomClick = (room, e) => {
    e.preventDefault();
    const newParties = parties.map((party, j) => {
      if (j === activeParty) {
        party.activeRoom = room.id - 1;
      }
      return party;
    });
    setParties(newParties);
  };

  const handleAddRoom = (text, e) => {
    e.preventDefault();
    const newParties = parties.map((party, j) => {
      if (j === activeParty) {
        party.rooms.push({
          id: party.rooms.length + 1,
          name: text,
          messages: [],
        });
      }
      return party;
    });
    console.log(newParties);
    setParties(newParties);
  };

  const handleSendMessage = (messages, e) => {
    e.preventDefault();
    const newParties = parties.map((party, j) => {
      if (j === activeParty) {
        party.rooms[party.activeRoom].messages = messages;
      }
      return party;
    });
    console.log(newParties);
    setParties(newParties);
  };

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
          {rooms.map((room, id) => {
            return (
              <div
                key={room.id}
                className={`job-btn ${id === activeRoom && "active-btn"}`}
                onClick={(e) => {
                  {
                    handleRoomClick(room, e);
                  }
                }}
              >
                {room.name}
              </div>
            );
          })}
          <div className="container">
            <form
              onSubmit={(e) => {
                console.log("here");
                handleAddRoom(addRoomText, e);
              }}
            >
              <input
                type="text"
                onChange={(e) => setAddRoomText(e.target.value)}
                placeholder="Room to add"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </article>
        <article className="job-info">
          <Messages
            messages={rooms[activeRoom].messages}
            handleSendMessage={handleSendMessage}
          />
        </article>
      </div>
    </section>
  );
}

export default App;
