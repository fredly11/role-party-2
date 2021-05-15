const Messages = ({ messages }) => {
  console.log(messages);

  return messages.map((message) => {
    return (
      <div className="message-container" key={message.id}>
        <h4>{message.user}</h4>
        <h5>{message.timestamp}</h5>
        <p>{message.text}</p>
      </div>
    );
  });
};

export default Messages;
