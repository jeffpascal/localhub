import React from "react";
import { useState } from "react";
import styled from "styled-components";
import FlexContainer from "./MyStyles";
import SaveNewListing from "../services/ListingActions";

const AddButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #000;
  cursor: pointer;
  border: 1px solid #000;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

const Add = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    let listing = {
      name: name,
      author: author,
      description: description
    };
    let x = SaveNewListing(listing);
    alert(x);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FlexContainer>
        <label>
          Title
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Author
          <input
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          ></input>
        </label>
        <label>
          Description
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </FlexContainer>
    </form>
  );
};

export default Add;
