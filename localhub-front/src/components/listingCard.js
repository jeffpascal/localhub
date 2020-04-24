import React from "react";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
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

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: DodgerBlue;
`;

const Content = props => {
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
  );
};

const ListingCard = props => {
  return (
    <Card>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <Actions>
        {props.actions.map(item => (
          <ActionButton>{item.label}</ActionButton>
        ))}
      </Actions>
    </Card>
  );
};

export default Content;
