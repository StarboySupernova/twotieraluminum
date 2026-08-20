import { Link } from 'gatsby';
import React from 'react';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <Logo />
        <ParagraphText className="footer__text">
          Two Tier Aluminium Hub is your trusted partner for high-quality
          hardware and comprehensive aluminium solutions.
        </ParagraphText>
        <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="footer__socialList">
          {socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
        <ParagraphText className="copyright">
          <strong>Location:</strong> 4148 11th Street Dzivarasekwa, Harare,
          Zimbabwe, 00263
          <br />
          <strong>Operating Hours:</strong> Monday to Sunday (6 AM to 6 PM)
          <br />
          <strong>Contacts:</strong> Tariro: +263 71 987 5027 | Wendy: +263 77
          829 6767
        </ParagraphText>
        <ParagraphText className="copyright">
          © Two Tier Aluminium Hub | {new Date().getFullYear()} | All rights
          reserved
        </ParagraphText>
      </div>
    </FooterStyles>
  );
}

export default Footer;
