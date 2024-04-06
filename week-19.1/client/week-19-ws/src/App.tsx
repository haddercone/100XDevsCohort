import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      console.log("Connected");
      setSocket(socket);
    };

    socket.onmessage = (message) => {
      console.log("Received message:", message.data);
      setLatestMessage(message.data);
    };

    return () => {
      socket.close();
    };
  }, []);

  if (!socket) {
    return (
      <>
        <p>Connecting to socket server...</p>
      </>
    );
  }

  return (
    <>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          if (message.trim() !== "") {
            socket.send(message);
            setMessage("");
          }
        }}
      >
        Send
      </button>

      <p>{latestMessage}</p>
    </>
  );
}

export default App;
