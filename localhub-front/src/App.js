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
      books {
        title
        author
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

    return data.books.map(({ title, author }) => (
      <div key={title}>
        <p>
          {title}: {author}
        </p>
      </div>
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
      <ExchangeRates></ExchangeRates>
      <FlexContainer>
        <ListingCard
          title="The Benefits of Green Apples"
          description="Green apples have a high fiber content which helps in increasing the
        body's metabolism. While consuming an apple, make sure that you're not
        tossing the peel in the trash. Consuming apple with its peel improves
        the overall health. Due to its high fiber content, apple helps in
        detoxification process. It keeps the liver and digestive system away
        from harmful elements."
          actions={buttons}
        />
        <ListingCard
          title="The Benefits of Green Apples"
          description="Green apples have a high fiber content which helps in increasing the
        body's metabolism. While consuming an apple, make sure that you're not
        tossing the peel in the trash. Consuming apple with its peel improves
        the overall health. Due to its high fiber content, apple helps in
        detoxification process. It keeps the liver and digestive system away
        from harmful elements."
          actions={buttons}
        />
        <ListingCard
          title="The Benefits of Green Apples"
          description="Green apples have a high fiber content which helps in increasing the
        body's metabolism. While consuming an apple, make sure that you're not
        tossing the peel in the trash. Consuming apple with its peel improves
        the overall health. Due to its high fiber content, apple helps in
        detoxification process. It keeps the liver and digestive system away
        from harmful elements."
          actions={buttons}
        />
      </FlexContainer>
    </div>
  );
}

export default App;
