import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListingCard from "./components/listingCard";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import Add from "./components/AddButton";
import FlexContainer from "./components/MyStyles";
import ScalingSquaresSpinner from "./components/ScalingSquaresSpinner";
function App() {
  const Listings = gql`
    {
      listings {
        _id
        name
        author
        description
      }
    }
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

  function GetAllListings() {
    const { loading, error, data } = useQuery(Listings);

    if (loading) return <ScalingSquaresSpinner></ScalingSquaresSpinner>;
    if (error) return <p>Error :(</p>;
    console.log(data);
    return data.listings.map(({ _id, name, author, description }) => (
      <ListingCard
        id={_id}
        title={name}
        description={description}
        actions={buttons}
      />
    ));
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <FlexContainer>
        <Add></Add>
        <GetAllListings></GetAllListings>
      </FlexContainer>
    </div>
  );
}

export default App;
