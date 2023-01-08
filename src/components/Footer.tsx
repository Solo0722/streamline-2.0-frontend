import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MEDIA_QUERIES } from "../shared/utils/constants";
import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "antd";

const Footer = () => {
  const footerLinks = [
    {
      name: "Website",
      url: "https://oasolomon.vercel.app",
      icon: <FaGlobe color="lavender" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/owusu-ansah-solomon",
      icon: <FaLinkedin color="lavender" />,
    },
    {
      name: "Github",
      url: "https://github.com/solo0722",
      icon: <FaGithub color="lavender" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/KhobbySolo",
      icon: <FaTwitter color="lavender" />,
    },
  ];

  return (
    <FooterWrapper>
      <LinksWrapper>
        {footerLinks.map((lk, i) => (
          <Button
            icon={lk.icon}
            type="text"
            key={i}
            href={lk.url}
            target="_blank"
          />
        ))}
      </LinksWrapper>
      <cite>Developed and designed by OAS © 2022</cite>
      <Link to="/">
        <img src="/streamline_logo2.png" alt="logo" width={30} height={30} />
      </Link>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  padding: 2rem;
  background-color: #1a2238;
  color: lavender;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin: 10px 0;
  }

  ${MEDIA_QUERIES.TABLET} {
    & {
      padding: 1rem;
    }
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;

  button,
  a {
    margin: 0 10px;
  }
`;

export default Footer;
