// Create a new component called SimpleForm

// Use the useState hook to manage the state of form inputs

// Create input fields for the form (e.g., name, email, message)

// Implement a handleSubmit function to handle form submission

// Render the form inputs and a submit button

import { useState } from "react";

export function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
    alert("Form Submitted");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "lightblue" }}>
      <h3>Simple Form</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br /> <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /> <br />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />{" "}
      <br /> <br />
      <button type="submit">Submit Form</button>
    </form>
  );
}
