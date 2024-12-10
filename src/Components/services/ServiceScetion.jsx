import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCreditCard,
  faStore,
  faChalkboardTeacher,
  faMobileAlt, // Added icon for mobile app development
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <motion.div
      className='container service-section'
      id='services'
      initial={{ opacity: 0 }} // Initial opacity 0 for fade-in effect
      animate={{ opacity: 1 }} // Animate to opacity 1
      transition={{ duration: 1 }} // Fade-in duration
    >
      <div className='title my-3'>
        <h3 className='h3'>Services</h3>
        <div className='hr'></div>
      </div>
      <div className='row d-flex justify-content-center'>
        {/* Web Applications */}
        <div className='col-lg-4 col-md-6 mb-4'>
          <motion.div
            className='service-item shadow-sm p-4 rounded'
            whileHover={{ scale: 1.05 }} // Hover scale effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='service-icon'>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h3>Web Applications</h3>
            <p>
              I build custom web apps that look great and work smoothly. From
              the user interface to the backend, I make sure everything runs
              perfectly and meets your needs.
            </p>
          </motion.div>
        </div>

        {/* Mobile App Development */}
        <div className='col-lg-4 col-md-6 mb-4'>
          <motion.div
            className='service-item shadow-sm p-4 rounded'
            whileHover={{ scale: 1.05 }} // Hover scale effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='service-icon'>
              <FontAwesomeIcon icon={faMobileAlt} /> {/* Mobile App icon */}
            </div>
            <h3>Mobile App Development</h3>
            <p>
              I specialize in developing high-performance, cross-platform mobile
              apps using technologies like React Native. From concept to
              deployment, I ensure that your app is user-friendly, feature-rich,
              and optimized for all devices.
            </p>
          </motion.div>
        </div>

        {/* Payment Integration */}
        <div className='col-lg-4 col-md-6 mb-4'>
          <motion.div
            className='service-item shadow-sm p-4 rounded'
            whileHover={{ scale: 1.05 }} // Hover scale effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='service-icon'>
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <h3>Payment Integration</h3>
            <p>
              I make it easy to add payment options like Mpesa and credit cards
              to your app or website. Secure, fast, and hassle-free—just the way
              it should be.
            </p>
          </motion.div>
        </div>

        {/* E-commerce Development */}
        <div className='col-lg-4 col-md-6 mb-4'>
          <motion.div
            className='service-item shadow-sm p-4 rounded'
            whileHover={{ scale: 1.05 }} // Hover scale effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='service-icon'>
              <FontAwesomeIcon icon={faStore} />
            </div>
            <h3>E-commerce Development</h3>
            <p>
              I create online stores with all the features you need—product
              listings, payments, orders, and even customer management. Let’s
              bring your business online.
            </p>
          </motion.div>
        </div>

        {/* Coaching & Training */}
        <div className='col-lg-4 col-md-6 mb-4'>
          <motion.div
            className='service-item shadow-sm p-4 rounded'
            whileHover={{ scale: 1.05 }} // Hover scale effect
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className='service-icon'>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <h3>Coaching & Training</h3>
            <p>
              Teaching tech is my passion. I love breaking down complex coding
              concepts into simple, easy-to-understand lessons. Someday, I dream
              of running my own tech school to help more people get into this
              field.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceSection;
