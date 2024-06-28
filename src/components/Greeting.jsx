import { useState } from "preact/hooks";

export default function Greeting({ messages, ...props }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div {...props}>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
}
