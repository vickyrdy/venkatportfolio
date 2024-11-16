import React from "react";
import "../styles/Header.css";

function Header({ name, contact }) {
  return (
    <header className="header">
      <h1>{name}</h1>
      <p>Phone: {contact.phone}</p>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
          Profile
        </a>
      </p>
    </header>
  );
}

export default Header;
