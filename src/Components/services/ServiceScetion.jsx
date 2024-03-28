import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCogs,
  faCreditCard,
  faStore,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import "./ServiceSection.css";

const ServiceSection = () => {
  return (
    <div className='container service-section' id='services'>
      <div className='title my-3'>
        <h3 className='h3'>Services</h3>
        <div className='hr'></div>
      </div>
      <div className='row d-flex justify-content-center'>
        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='service-item shadow-sm p-4 rounded'>
            <div className='service-icon'>
              <FontAwesomeIcon icon={faDesktop} />
            </div>
            <h3>Web Applications</h3>
            <p>
              I specialize in crafting full-stack web applications using a
              diverse range of technologies to ensure optimal performance and
              functionality. From sleek user interfaces to robust backend
              systems, I am dedicated to delivering high-quality web solutions
              tailored to meet your specific needs.
            </p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='service-item shadow-sm p-4 rounded'>
            <div className='service-icon'>
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <h3>System Design</h3>
            <p>
              With expertise in system design, I offer comprehensive solutions
              for architecting scalable and efficient systems. Whether you are
              launching a new platform or optimizing existing infrastructure, I
              provide strategic guidance and technical expertise to design
              systems that are reliable, secure, and adaptable to your evolving
              requirements.
            </p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='service-item shadow-sm p-4 rounded'>
            <div className='service-icon'>
              <FontAwesomeIcon icon={faCreditCard} />
            </div>
            <h3>Payment Integration</h3>
            <p>
              I provide seamless payment integration solutions, including
              popular mobile payment platforms like Mpesa and various card
              payment gateways. By integrating secure and efficient payment
              processing into your applications, I help streamline transactions
              and enhance the user experience, empowering your business to
              thrive in the digital economy.
            </p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='service-item shadow-sm p-4 rounded'>
            <div className='service-icon'>
              <FontAwesomeIcon icon={faStore} />
            </div>
            <h3>E-commerce Development</h3>
            <p>
              I develop online stores and e-commerce platforms with features
              such as product catalog management, secure payment gateways, order
              processing, and customer relationship management (CRM)
              integration.
            </p>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 mb-4'>
          <div className='service-item shadow-sm p-4 rounded'>
            <div className='service-icon'>
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <h3>Coaching & Training</h3>
            <p>
              With a passion in teaching concrete concepts, I break down
              programming concepts into smaller chunks and help other tech
              enthusiast understand them and digest them. I offer coaching &
              training to my colleagues at campus and help them to understand
              various concepts in Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
