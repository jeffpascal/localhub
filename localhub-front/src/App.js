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

  const ModifyListing = gql`
    mutation modifyBook($ep: Episode!, $review: ReviewInput!) {
      createReview(episode: $ep, review: $review) {
        stars
        commentary
      }
    }
  `;

  function ExchangeRates() {
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
        <ExchangeRates></ExchangeRates>
      </FlexContainer>
    </div>
  );
}

export default App;
