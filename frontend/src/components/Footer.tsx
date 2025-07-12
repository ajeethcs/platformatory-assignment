// src/components/Footer.tsx
import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const FooterWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 16px;
  opacity: 0.5;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2">
        Trusted by individuals and teams at the world's best companies
      </Typography>
      <Logos>
        {Array.from({ length: 5 }).map((_, i) => (
          <Typography key={i} variant="body1">
            Logo
          </Typography>
        ))}
      </Logos>
    </FooterWrapper>
  );
};

export default Footer;
