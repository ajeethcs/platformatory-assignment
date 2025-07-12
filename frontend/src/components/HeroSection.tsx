// src/components/HeroSection.tsx
import React from "react";
import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import HeroImage from "../../assets/hero-section.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 80px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const Content = styled.div`
  max-width: 600px;
`;

const Title = styled(Typography).attrs({ variant: "h2" })`
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtitle = styled(Typography).attrs({ variant: "body1" })`
  color: #666;
  margin-bottom: 30px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

const Image = styled.img`
  width: 400px;
  @media (max-width: 768px) {
    margin-top: 40px;
    width: 80%;
  }
`;

const HeroSection = () => {
  return (
    <Container>
      <Content>
        <Typography variant="subtitle2" gutterBottom>
          FREE 30 DAYS TRIAL
        </Typography>
        <Title>The best way to showcase your project.</Title>
        <Subtitle>
          Here you can put a short description about your project.
        </Subtitle>
        <Buttons>
          <Button variant="contained" color="primary">
            Try for free
          </Button>
          <Button variant="outlined">See how it works</Button>
        </Buttons>
      </Content>
      <Image src={HeroImage} alt="Hero Graphic" />
    </Container>
  );
};

export default HeroSection;
