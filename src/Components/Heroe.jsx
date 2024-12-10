import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaDownload,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Heroe = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadCV = () => {
    fetch("/docs/Wamae-Ndiritu-Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "Wamae Ndiritu.pdf";
        link.click();
      });
    });
  };

  // Detect scroll height
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='relative bg-gray-100 text-gray-800'>
      {/* Navbar */}
      <nav
        className='fixed top-0 left-0 w-full bg-opacity-60 backdrop-blur-lg z-50 flex items-center justify-between px-6 py-3'
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }} // Adjust to match video tone
      >
        <h3 className='text-xl font-bold text-white'>
          <a href='#home' className='hover:text-gray-300'>
            Wamae Dev
          </a>
        </h3>
        <div className='md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes size={24} className='text-white' />
          ) : (
            <FaBars size={24} className='text-white' />
          )}
        </div>
        <ul
          className={`absolute md:static md:flex md:items-center md:space-x-2 top-16 left-0 w-full bg-opacity-60  md:w-auto shadow-md md:shadow-none transition-all duration-300 ${
            menuOpen ? "block bg-black text-primary" : "hidden"
          }`}
        >
          {["About Me", "Services", "Projects", "Blogs", "Contacts"].map(
            (item, index) => (
              <li
                key={index}
                className='py-2 px-4 text-center md:py-0 hover:text-gray-300 text-white'
                onClick={() => setMenuOpen(false)}
              >
                <a href={`#${item.toLowerCase().replace(" ", "")}`}>{item}</a>
              </li>
            )
          )}
        </ul>
        <a
          href='tel:+254740924507'
          className='hidden md:inline-block px-4 py-2 bg-white text-primary rounded-md hover:bg-gray-200'
        >
          Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className='relative flex items-center justify-center min-h-screen'>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover'
          src='/videos/coding.mp4'
        ></video>
        {/* Overlay Content */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>{" "}
        {/* Semi-transparent overlay */}
        <div className='relative z-10 flex flex-col md:flex-row items-center justify-center px-6'>
          <div className='md:w-1/2 text-center md:text-left space-y-4'>
            <motion.h1
              className='text-2xl md:text-4xl font-bold text-white'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Wamae Ndiritu | Software Engineer
            </motion.h1>
            <p className='text-gray-200'>
              Hi, I&apos;m a dedicated Software Engineer passionate about
              solving real-world problems through innovative solutions.
            </p>
            <div className='flex space-x-4 justify-center'>
              <motion.button
                className='px-6 py-2 bg-primary text-white rounded-md flex items-center space-x-2'
                onClick={downloadCV}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaDownload /> <span>Download CV</span>
              </motion.button>
              <motion.a
                href='tel:+254740924507'
                className='px-6 py-2 border border-primary text-white rounded-md hover:bg-primary hover:text-white flex items-center space-x-2'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>Hire Me</span>
              </motion.a>
            </div>
          </div>
          <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
            <div className='relative'>
              <motion.img
                src='/Assets/Images/potrait.png'
                alt='Portrait'
                className='w-72 h-72 object-cover rounded-full shadow-lg'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1 }}
              />
              {/* Circular Overlay */}
              <div className='absolute inset-0 rounded-full border-4 border-primary'></div>
            </div>
          </div>
        </div>
        {/* Social Links */}
        <motion.div
          className={`fixed ${
            scrolled
              ? "right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4"
              : "bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {[
            { Icon: FaGithub, link: "https://github.com/wamae-ndiritu" },
            { Icon: FaFacebook, link: "https://facebook.com/wamaendiritu" },
            { Icon: FaTwitter, link: "https://x.com/wamai_wa" },
            {
              Icon: FaLinkedin,
              link: "https://www.linkedin.com/in/wamae-ndiritu-54b38124b/",
            },
            { Icon: FaWhatsapp, link: "https://wa.me/254740924507" },
          ].map(({ Icon, link }, index) => (
            <motion.a
              key={index}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-gray-800 bg-transparent border border-primary p-2 rounded-full ${
                scrolled ? "text-primary" : "text-white"
              }`}
              whileHover={{ scale: 1.2, backgroundColor: "#0056b3" }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Heroe;
