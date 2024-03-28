import { useState, useRef, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Heroe = () => {
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

  window.addEventListener("scroll", function () {
    const socialIcons = document.querySelector("#social-block");
    socialIcons?.classList.toggle("fixed-social-block", window.scrollY > 600);
  });

  window.addEventListener("scroll", function () {
    const activeHeader = document.querySelector("#heroe-navbar");
    activeHeader?.classList.toggle("active-header", window.scrollY > 500);
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
    <div className='heroe-section' id='heroe-section home'>
      <div className='heroe-wrapper'>
        <div className='heroe-navbar' id='heroe-navbar'>
          <div className='navbar-left'>
            <h3>
              <a href='#home'>Wamae Dev</a>
            </h3>
          </div>
          <div className='navbar-right' ref={linksContainerRef}>
            <ul className='nav-links' ref={linksRef}>
              <li>
                <a href='/#about'>About Me</a>
              </li>
              <li>
                <a href='#services'>Services</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#blogs'>Blogs</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
            </ul>
          </div>
          <a href='tel:+254740924507' className='btn main-btn'>
            <TapAndPlayIcon />
            {""} Hire Me
          </a>
          <div className='menu-icon' onClick={toggleLinks}>
            {showLinks ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
        <div className='heroe-center'>
          <div className='heroe-info'>
            <h4>Wamae Ndiritu | Software Engineer</h4>
            <p>
              Hi, I&apos;m a dedicated Software Engineer passionate about making
              a positive impact in the tech world and beyond. I love solving
              real-world problems with innovative solutions, using my
              programming skills to create practical applications. I&apos;m
              constantly adapting to the fast-paced tech environment and strive
              to make meaningful contributions through cutting-edge technology.
            </p>
            <div className='heroe-btn-cont'>
              <a href='tel:+254740924507' className='btn main-btn'>
                <TapAndPlayIcon />
                {""} Hire Me
              </a>
              <button className='main-btn-1' onClick={downloadCV}>
                Download CV <DownloadIcon />
              </button>
            </div>
          </div>
          <div className='heroe-profile-cont'>
            <div className='heroe-profile'>
              <img src='/Assets/Images/potrait.png' alt='' />
            </div>
          </div>
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
