import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #f1f1f1;
  width: 700px;
  margin: 10px;
  text-align: center;
`;

const Title = styled.h2`
  color: #000;
  font-weight: 300;
`;

const Description = styled.p`
  color: #000;
  font-weight: 300;
`;
const ActionButton = styled.button`
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

const Actions = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
`;

const ListingCard = props => {
  return (
    <Card>
      <p>{props.id}</p>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Actions>
        {props.actions.map((item, index) => (
          <ActionButton key={index}>{item.label}</ActionButton>
        ))}
      </Actions>
    </Card>
  );
};

export default ListingCard;
