import React, { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typed from "typed.js";

const Heroe = () => {
  const el = useRef(null);
  const nameRef = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);
  const typedName = useRef(null);

  const downloadCV = () => {
    // using Java Script method to get PDF file
    fetch("/Assets/docs/Ndiritu_Wamae_CV.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "/Assets/docs/Ndiritu_Wamae_CV.pdf";
        alink.click();
      });
    });
  };

  useEffect(() => {
    const options = {
      strings: ["Ndiritu Wamae"],
      typeSpeed: 250,
      backSpeed: 70,
    };

    typedName.current = new Typed(nameRef.current, options);
    return () => {
      typedName.current.destroy();
    };
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        "FrontEnd Development",
        "Backend Development",
        "Systems Intergartion",
        "Payments Intergration e.g Lipa Na Mpesa Online..",
      ],
      typeSpeed: 100,
      backSpeed: 30,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  window.addEventListener("scroll", function () {
    const socialIcons = document.querySelector("#social-block");
    socialIcons?.classList.toggle("fixed-social-block", window.scrollY > 600);
  });

  window.addEventListener("scroll", function () {
    const activeHeader = document.querySelector("#heroe-navbar");
    activeHeader?.classList.toggle("active-header", window.scrollY > 400);
  });

  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    let linksHeight = linksRef.current.getBoundingClientRect().height;
    linksHeight += 200;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <div className='heroe-section' id='heroe-section'>
      <div className='heroe-wrapper'>
        <div className='heroe-navbar' id='heroe-navbar'>
          <div className='navbar-left'>
            <h3>Nelite dev</h3>
          </div>
          <div className='navbar-right' ref={linksContainerRef}>
            <ul className='nav-links' ref={linksRef}>
              <li>Home</li>
              <li>About Me</li>
              <li>Portfolio</li>
              <li>Contacts</li>
              <li>Socials</li>
            </ul>
          </div>
          <div className='menu-icon' onClick={toggleLinks}>
            {showLinks ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className='heroe-center'>
          <div className='heroe-info'>
            <span className='h1'>
              <span style={{ color: "#fff" }}>Hi, I am</span>{" "}
              <span className='typed-h1' ref={nameRef}></span>
            </span>
            <h4>A FullStack Web Developer |</h4>
            <span className='h4 typed' ref={el}></span>
          </div>
          <div className='heroe-profile-cont'>
            <div className='heroe-profile'>
              <img src='/Assets/Images/potrait.png' alt='' />
            </div>
          </div>
        </div>
        <div className='heroe-quote'>
          <p>
            <i className='fa fa-quote-left icon' aria-hidden='true'></i>
            Programmers are the architects of the digital world, shaping
            tomorrows innovations with lines of code today.
            <i className='fa fa-quote-right icon' aria-hidden='true'></i>
          </p>
        </div>
        <div className='heroe-btn-cont'>
          <button className='main-btn'>
            <TapAndPlayIcon />
            {""} Hire Me
          </button>
          <button className='main-btn-1' onClick={downloadCV}>
            Download CV <DownloadIcon />
          </button>
        </div>
        <div className='heroe-socials'>
          <div className='heroe-icon'>
            <a
              href='https://github.com/wamae-ndiritu'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
          </div>
          <div className='heroe-icon'>
            <a
              href='https://twitter.com/wamai_wa'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon />
            </a>
          </div>
          <div className='heroe-icon'>
            <a
              href='https://www.facebook.com/wamaendiritu'
              target='_blank'
              rel='noreferrer'
            >
              <FacebookRoundedIcon />
            </a>
          </div>
        </div>
        <div className='socials-block' id='social-block'>
          <div className='social-icon'>
            <a
              href='https://github.com/wamae-ndiritu'
              target='_blank'
              rel='noreferrer'
              style={{ color: "#000" }}
            >
              <GitHubIcon />
            </a>
          </div>
          <div className='social-icon'>
            <a
              href='https://www.facebook.com/wamaendiritu'
              target='_blank'
              rel='noreferrer'
            >
              <FacebookRoundedIcon />
            </a>
          </div>
          <div className='social-icon'>
            <a
              href='https://twitter.com/wamai_wa'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon />
            </a>
          </div>
          <div className='social-icon'>
            <a
              href='https://www.linkedin.com/in/wamae-ndiritu-54b38124b/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className='social-icon'>
            <a
              href='https://www.linkedin.com/in/wamae-ndiritu-54b38124b/'
              target='_blank'
              rel='noreferrer'
              style={{ color: "green" }}
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroe;
