import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingCard from "./components/listingCard";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";

function App() {
  const Listings = gql`
    {
      listings {
        name
        author
        description
      }
    }
  `;

  async function SaveNewListing() {
    const response = await fetch("http://localhost:7000/api/listings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "fetchname",
        author: "fetchauthor",
        description: "description"
      })
    });
    console.log(await response.json());
  }

  function GetAllListings() {
    const { loading, error, data } = useQuery(Listings);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.listings.map(({ name, author, description }) => (
      <ListingCard title={name} description={description} actions={buttons} />
    ));
  }

  const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: DodgerBlue;
  `;
  const buttons = [
    {
      label: (
        <>
          <FaCommentAlt /> 0 Comments
        </>
      )
    },
    {
      label: (
        <>
          <FaThumbsUp /> 242 Likes
        </>
      )
    },
    {
      label: (
        <>
          <FaRegEye /> 187288 Views
        </>
      )
    }
  ];

  return (
    <div className="App">
      <header className="App-header"></header>
      <FlexContainer>
        <GetAllListings></GetAllListings>
      </FlexContainer>
    </div>
  );
}

export default App;
