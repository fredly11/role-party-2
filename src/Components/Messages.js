import React, { useState } from "react";

const Messages = ({ messages, handleSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  return (
    <>
      {messages.map((message) => {
        return (
          <div className="message-container" key={message.id}>
            <h4>{message.user}</h4>
            <h5>{message.timestamp}</h5>
            <p>{message.text}</p>
          </div>
        );
      })}
      <form
        onSubmit={(e) => {
          const newMessages = [
            ...messages,
            {
              id: messages.length + 1,
              user: "Admiral Snackbar",
              timestamp: "10/15/4031",
              text: messageText,
            },
          ];
          console.log(newMessages);
          handleSendMessage(newMessages, e);
        }}
      >
        <input
          type="text"
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Message"
        />
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
};

export default Messages;
