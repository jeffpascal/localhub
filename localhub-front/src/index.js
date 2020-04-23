import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

// for apollo grapgql
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000"
  })
});

const Listings = gql`
  {
    books {
      title
      author
    }
  }
`;

const ModifyListing = gql`
  mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
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

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ExchangeRates></ExchangeRates>
      <button>Click me</button>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
