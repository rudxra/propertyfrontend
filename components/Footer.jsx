
   "use client"
import React from 'react'
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxFigmaLogo,
} from "react-icons/rx";



const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="innerContainer">
        <div className="sectionContainer">

          <div className="section">
            <div className="sectionTitle">Community</div>

            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxGithubLogo />
                <span className="sectionText">Github</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxFigmaLogo />
                <span className="sectionText">Figma</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxDiscordLogo />
                <span className="sectionText">Discord</span>
              </a>
            </p>
          </div>

          <div className="section">
            <div className="sectionTitle">Social Media</div>
            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxInstagramLogo />
                <span className="sectionText">Instagram</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxTwitterLogo />
                <span className="sectionText">Twitter</span>
              </a>
            </p>
            <p className="sectionItem">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="sectionLink"
              >
                <RxLinkedinLogo />
                <span className="sectionText">Linkedin</span>
              </a>
            </p>
          </div>

          <div className="section">
            <div className="sectionTitle">Learn About Me</div>
            <p className="sectionItem">
              <a href="#Contact" className="sectionLink">
                <span className="sectionText">Contact</span>
              </a>
            </p>
            <p className="sectionItem">
              <a href="#" className="sectionLink">
                <span className="sectionText">About me</span>
              </a>
            </p>
            <p className="sectionItem">
              <a href="#projects" className="sectionLink">
                <span className="sectionText">Projects</span>
              </a>
            </p>
          </div>

        </div>
        <div className="footerText">
          &copy; Ruddra Shukla, 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
