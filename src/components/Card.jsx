import { Row, Space, Typography, Grid } from "antd";
import React from "react";
import styled from "styled-components";

const { Text } = Typography;

export default function Card({
  src,
  name,
  hospital,
  specialization,
  price,
  about,
}) {
  const { xs } = Grid.useBreakpoint();

  return (
    <Wrapper>
      <Space direction={xs ? "vertical" : "horizontal"}>
        <DoctorPhoto src={src} alt={name} />

        <Space direction="vertical">
          <Text strong>{name}</Text>
          <Text type="secondary">
            {hospital} - {specialization}
          </Text>
          <Text type="secondary">
            <div dangerouslySetInnerHTML={{ __html: about }} />
          </Text>
          <Row justify="end">
            <Text type="success" strong>
              {price}
            </Text>
          </Row>
        </Space>
      </Space>
    </Wrapper>
  );
}

const DoctorPhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s;

  @media (max-width: 1040px) {
    width: 136px;
    height: 136px;
  }

  @media (max-width: 575px) {
    width: 200px;
    height: 200px;
  }
`;

const Wrapper = styled.div`
  background: var(--white-color);
  padding: 16px;
  border-radius: 8px;
  margin-top: 32px;
  width: 49%;

  @media (max-width: 990px) {
    width: 100%;
  }

  box-shadow: 0px 22px 46px rgba(57, 57, 57, 0.03),
    0px 8.03036px 16.7908px rgba(62, 62, 62, 0.03);
`;
